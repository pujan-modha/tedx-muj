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
    .refine((file) => file.size <= 5000000, "File size should be less than 5MB")
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

      const result = await response.json();
      console.log("Registration successful:", result);
      toast({
        title: "Successfully registered for TedX Event",
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
          title: "Error fetching registration count",
          description: "Please try again later",
          variant: "destructive",
        });
        console.error("Error fetching registrations:", error);
      }
    }
    fetchRegCount();
  }, [toast]);

  useEffect(() => {
    console.log(regCount)
  }, [regCount]);

  return (
    <div className="flex min-h-[100svh] my-12 items-center justify-end max-w-7xl mx-auto pt-20">
      <div className="grid grid-cols-2">
        <div>Placeholder Text</div>
        <div className="bg-black">
          <BackgroundBeamsWithCollision className="max-w-md m-auto p-6 border-2 border-brand bg-brand/5 ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 z-10"
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
                      <FormLabel>Mobile number</FormLabel>
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
                          placeholder="john.doe@muj.manipal.edu"
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
                                  Drag and drop your file here or{" "}
                                  <span className="font-semibold text-red-500 hover:text-red-400">
                                    click to browse
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
                            You agree to follow all event rules and guidelines.
                          </FormDescription>
                        </div>
                      </FormItem>
                      <FormMessage />
                    </div>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
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
          </BackgroundBeamsWithCollision>
        </div>
      </div>
    </div>
  );
}
