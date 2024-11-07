import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { v2 as cloudinary } from "cloudinary";
import { Resend } from "resend";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let cachedClient: MongoClient | null = null;

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Keep only this essential log for API key verification
console.log(
  "Resend API Key:",
  process.env.RESEND_API_KEY ? "Present" : "Missing"
);

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

    const fullName = formData.get("fullName") as string;
    const mobileNumber = formData.get("mobileNumber") as string;
    const email = formData.get("email") as string;
    const registrationNumber = formData.get("registrationNumber") as string;
    const transactionID = formData.get("transactionID") as string;
    const termsAccepted = formData.get("termsAccepted") === "true";
    const file = formData.get("file") as File | null;
    const is_payment_verified = false;

    let fileUrl = "";
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const result = (await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "registrations",
            timeout: 60000, // 60 seconds timeout
            resource_type: 'auto', // Automatically detect file type
            chunk_size: 6000000 // 6MB chunks
          },
          (error, result) => {
            if (error) reject(error);
            else if (result) resolve(result);
            else reject(new Error("Upload failed"));
          }
        );

        // Add error handler for the stream
        uploadStream.on('error', (error) => {
          reject(error);
        });

        uploadStream.end(buffer);
      })) as { secure_url: string };

      fileUrl = result.secure_url;
    }

    const client = await connectToDatabase();
    const db = client.db("tedx-muj");

    const collection = db.collection("registrations");
    const result = await collection.insertOne({
      fullName,
      mobileNumber,
      email,
      registrationNumber,
      termsAccepted,
      fileUrl,
      transactionID,
      is_payment_verified,
      createdAt: new Date(),
    });

    // Send confirmation email with simplified error handling
    try {
      await resend.emails.send({
        from: "TEDxManipalUniversityJaipur <notifications@tedxmanipaluniversityjaipur.com>",
        to: [email],
        subject: "Registration Confirmation - TEDxManipalUniversityJaipur",
        html: `
          <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TEDx ManipalUniversityJaipur Registration</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Inter', sans-serif;
        line-height: 1.6;
        color: #f9f9f9;
        background-color: #121212;
        max-width: 650px;
        margin: 0 auto;
        padding: 30px;
      }
      .header {
        text-align: center;
        margin-bottom: 40px;
        border-bottom: 2px solid #eb0028;
      }
      .header img {
        width: 200px;
        height: auto;
      }
      .content {
        background-color: #1e1e1e;
        padding: 25px;
        border: 2px solid #eb0028;
      }
      .content h2 {
        color: #f9f9f9;
        font-size: 24px;
        margin-bottom: 20px;
      }
      .details {
        background-color: #252525;
        padding: 15px;
        margin: 25px 0;
        border-left: 4px solid #eb0028;
      }
      .details h3 {
        color: #f9f9f9;
        margin-top: 0;
        font-size: 20px;
      }
      .footer {
        text-align: center;
        margin-top: 40px;
        padding-top: 20px;
        border-top: 2px solid #333;
        color: #999;
      }
      .button {
        display: inline-block;
        padding: 12px 25px;
        background-color: #eb0028;
        color: white;
        text-decoration: none;
        border: 2px solid #eb0028;
        font-weight: 600;
        margin: 25px 0;
        text-align: center;
      }
      .button:hover {
        background-color: #d1001e;
        border-color: #d1001e;
      }
      ul {
        list-style: none;
        padding: 0;
        color: #f9f9f9;
      }
      ul li {
        margin-bottom: 10px;
      }
      small {
        font-size: 0.9em;
        color: #999;
      }
    </style>
  </head>
  <body>
    <div class="header">
      <img src="https://www.tedxmanipaluniversityjaipur.com/logo-white.png" alt="TEDx ManipalUniversityJaipur">
    </div>
    <div class="content">
      <h2>Registration Confirmation</h2>
      <p>Dear ${fullName},</p>
      <p>Thank you for registering for TEDxManipalUniversityJaipur! We're thrilled to have you join us.</p>
      
      <div class="details">
        <h3>Registration Details:</h3>
        <p><strong>Registration Number:</strong> ${registrationNumber}</p>
        <p><strong>Transaction ID:</strong> ${transactionID}</p>
        <p><strong>Status:</strong> Payment Verification Pending</p>
      </div>

      <p>Our team is verifying your payment. Once complete, you'll receive an email with your ticket details.</p>
      
      <p>If you have any questions, feel free to contact:</p>
      <ul>
        <li>Lakshita Agrawal: +91 93129 41940</li>
        <li>Atharv Thakle: +91 75808 37176</li>
        <li>Krishnav Gupta: +91 98111 87903</li>
        <li>Ankika Chatterjee: +91 95014 55191</li>
      </ul>
    </div>
    
    <div class="footer">
      <p>Best regards,<br>Team TEDxManipalUniversityJaipur</p>
      <small>This independent TEDx event is operated under license from TED.</small>
    </div>
  </body>
</html>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send confirmation email:", emailError);
    }

    return NextResponse.json({
      success: true,
      data: {
        _id: result.insertedId,
        fullName,
        mobileNumber,
        email,
        registrationNumber,
        termsAccepted,
        fileUrl,
        transactionID,
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
