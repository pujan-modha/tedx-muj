"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import {
  Image as ImageIcon,
  Trash2,
  UploadCloud,
  LoaderCircle,
} from "lucide-react";
import { BoxReveal } from "@/components/ui/box-reveal";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  mobileNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid mobile number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  registrationNumber: z.string().min(1, {
    message: "Registration number is required.",
  }),
  file: z
    .custom<File>((file) => file instanceof File, {
      message: "Payment proof is required.",
    })
    .refine(
      (file) => file.size <= 10000000,
      "File size should be less than 10MB"
    )
    .refine(
      (file) =>
        ["application/pdf", "image/jpeg", "image/png"].includes(file.type),
      "Only PDF, JPEG, and PNG files are allowed"
    ),
  transactionID: z.string().min(1, {
    message: "Transaction ID is required.",
  }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export default function TedXForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [regCount, setRegCount] = useState(0);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      registrationNumber: "",
      transactionID: "",
      termsAccepted: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key === "file" && value instanceof File) {
        formData.append(key, value);
      } else if (typeof value === "boolean") {
        formData.append(key, value.toString());
      } else if (value !== null && value !== undefined) {
        formData.append(key, value as string);
      }
    });

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      // const result = await response.json();
      // console.log("Registration successful:", result);
      toast({
        title: "Successfully registered for TEDx Event",
        description: "We have sent a confirmation email",
      });
      form.reset();
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Registration failed",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function fetchRegCount() {
      try {
        const res = await fetch("/api/register", { method: "GET" });
        const data = await res.json();
        setRegCount(data.count);
      } catch (error) {
        toast({
          title: "Something went wrong",
          description: "Please try again later",
          variant: "destructive",
        });
        console.error("Error fetching registrations:", error);
      }
    }
    fetchRegCount();
  }, [toast]);

  useEffect(() => {
    console.log(regCount);
  }, [regCount]);

  return (
    <div className="flex min-h-[100svh] my-12 items-center max-w-7xl mx-auto pt-20 px-4 lg:px-0">
      <div className="lg:flex w-full lg:space-x-12 space-y-8">
        <div className="bg-black w-full flex h-full items-center">
          <BackgroundBeamsWithCollision className="w-full m-auto p-6 border-2 border-brand bg-brand/5 ">
            {regCount < 100 ? (
              <>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4 z-10 w-full"
                  >
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile number (WhatsApp)</FormLabel>
                          <FormControl>
                            <Input placeholder="9876543210" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john.doe@gmail.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="registrationNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Registration number</FormLabel>
                          <FormControl>
                            <Input placeholder="229301576" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="mt-4">
                      <Link href="https://rzp.io/rzp/ntW8VTH9" target="_blank">
                        <Button
                          className="w-full"
                          onClick={(e) => {
                            e.preventDefault();
                            window.open(
                              "https://rzp.io/rzp/ntW8VTH9",
                              "_blank"
                            );
                          }}
                        >
                          Click Here to Pay
                        </Button>
                      </Link>
                    </div>
                    <FormField
                      control={form.control}
                      name="file"
                      render={({ field: { onChange, value, ...field } }) => (
                        <FormItem>
                          <FormLabel className="text-white">
                            Upload Payment Proof
                          </FormLabel>
                          <FormControl>
                            <div className="w-full">
                              <label
                                htmlFor="file-upload"
                                className="flex items-center justify-between w-full p-4 rounded-lg cursor-pointer border-2 border-dashed border-red-500/50 hover:border-red-500 bg-red-500/5 hover:bg-red-500/10 transition-all duration-150 ease-in-out"
                              >
                                {value ? (
                                  <>
                                    <div className="flex items-center space-x-4">
                                      <ImageIcon className="w-6 h-6 text-red-500" />
                                      <div>
                                        <p className="text-sm text-red-500 font-medium truncate-filename">
                                          {value.name}
                                        </p>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.preventDefault();
                                        onChange(undefined);
                                      }}
                                      className="text-red-500 hover:text-red-400 p-1 rounded"
                                    >
                                      <Trash2 className="w-5 h-5" />
                                    </button>
                                  </>
                                ) : (
                                  <div className="flex flex-col items-center justify-center w-full py-4">
                                    <UploadCloud className="w-12 h-12 mb-2 text-red-500" />
                                    <p className="text-sm text-gray-400">
                                      <span className="font-semibold text-red-500 hover:text-red-400">
                                        Click here to browse file
                                      </span>
                                    </p>
                                  </div>
                                )}
                                <Input
                                  id="file-upload"
                                  type="file"
                                  accept=".pdf,.jpg,.jpeg,.png"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    onChange(file);
                                  }}
                                  className="hidden"
                                  {...field}
                                />
                              </label>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="transactionID"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Transaction ID</FormLabel>
                          <FormControl>
                            <Input placeholder="123456789" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="termsAccepted"
                      render={({ field }) => (
                        <div>
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Accept terms and conditions</FormLabel>
                              <FormDescription>
                                You agree to follow all event rules and
                                guidelines.
                              </FormDescription>
                            </div>
                          </FormItem>
                          <FormMessage />
                        </div>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <LoaderCircle className="animate-spin" />
                          <p>Submitting...</p>
                        </div>
                      ) : (
                        <p>Submit</p>
                      )}
                    </Button>
                  </form>
                </Form>
              </>
            ) : (
              <>
                <p className="text-2xl font-bold text-brand">
                  Registrations are closed
                </p>
              </>
            )}
          </BackgroundBeamsWithCollision>
        </div>
        <div className="w-full space-y-8">
          <div className="space-y-4">
            <div className="text-3xl font-bold">
              Thank you for your interest in
              <div>
                <BoxReveal boxColor={"#eb0028"} duration={0.5}>
                  <div className="text-4xl font-black text-brand">
                    TED<span className="align-super text-2xl">x</span>
                  </div>
                </BoxReveal>
                <div className="flex">
                  <GradualSpacing
                    className="font-display text-center font-thin text-white text-4xl"
                    text="Manipal "
                    duration={0.5}
                  />
                  <GradualSpacing
                    className="font-display text-center font-thin text-white text-4xl"
                    text="University"
                    duration={0.5}
                  />
                </div>
                <GradualSpacing
                  className="font-display text-center font-thin text-white text-4xl"
                  text="Jaipur"
                  duration={0.5}
                />
              </div>
            </div>
          </div>
          <p className="text-lg text-balance">
            Please fill the form to complete your registration to a day full of
            ideas and stories designed to move and inspire.
          </p>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand">
              Terms and Conditions:
            </h3>
            <ol className="list-decimal list-inside space-y-4 marker:text-brand">
              <li className="text-balance">
                By registering for TEDxManipalUniversityJaipur, you agree to be
                part of the event and allow TEDxManipalUniversityJaipur to use
                your registration details for event communication.
              </li>
              <li className="text-balance">
                Photos and videos taken during the event may be used for
                promotional purposes across various media platforms.
              </li>
              <li className="text-balance">
                The event organizers are not responsible for any lost personal
                items during the event.
              </li>
              <li className="text-balance">
                Please ensure you have provided accurate contact information to
                receive event updates.
              </li>
              <li className="text-balance">
                The event organizers may share your provided details with
                trusted third-party partners for services such as ticketing,
                catering, and other promotional activities.
              </li>
            </ol>
          </div>

          <p className="text-xl font-medium text-brand">
            We look forward to having you join us at
            TEDxManipalUniversityJaipur!
          </p>
        </div>
      </div>
    </div>
  );
}
