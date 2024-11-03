import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI as string);
  cachedClient = client;
  return client;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const mobileNumber = formData.get("mobileNumber") as string;
    const email = formData.get("email") as string;
    const registrationNumber = formData.get("registrationNumber") as string;
    const termsAccepted = formData.get("termsAccepted") === "true";
    const file = formData.get("file") as File | null;
    const is_payment_verified = false;

    if (
      !firstName ||
      !lastName ||
      !mobileNumber ||
      !email ||
      !registrationNumber ||
      !termsAccepted
    ) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    let fileUrl = "";
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result = (await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "registrations" }, (error, result) => {
            if (error) reject(error);
            else if (result) resolve(result);
            else reject(new Error("Upload failed"));
          })
          .end(buffer);
      })) as { secure_url: string };

      fileUrl = result.secure_url;
    }

    const client = await connectToDatabase();
    const db = client.db("tedx-muj");

    const collection = db.collection("registrations");
    const result = await collection.insertOne({
      firstName,
      lastName,
      mobileNumber,
      email,
      registrationNumber,
      termsAccepted,
      fileUrl,
      is_payment_verified,
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      data: {
        _id: result.insertedId,
        firstName,
        lastName,
        mobileNumber,
        email,
        registrationNumber,
        termsAccepted,
        fileUrl,
        is_payment_verified,
      },
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}

export async function GET() {
  const client = await connectToDatabase();
  const db = client.db("tedx-muj");
  const collection = db.collection("registrations");
  const result = await collection.countDocuments({});

  return NextResponse.json({ count: result });
}
