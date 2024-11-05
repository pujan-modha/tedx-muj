"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { FileText, Image as ImageIcon, UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";


const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
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
  file: z.custom<File>()
    .refine((file) => !file || file.size <= 5000000, 'File size should be less than 5MB')
    .refine(
      (file) => !file || ['application/pdf', 'image/jpeg', 'image/png'].includes(file.type),
      'Only PDF, JPEG, and PNG files are allowed'
    )
    .optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export default function TedXForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      registrationNumber: "",
      termsAccepted: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
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
    } catch (error) {
      console.error("Registration error:", error);
    }
  }

  return (
    <div className="flex min-h-[100svh] my-12 items-center justify-end max-w-7xl mx-auto pt-20">
      <div className="grid grid-cols-2">
        <div>hello</div>
        <div className="bg-black">
          <BackgroundBeamsWithCollision className="max-w-md m-auto p-6 border-2 border-brand bg-brand/5 ">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 z-10"
              >
                <div className="flex gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name</FormLabel>
                        <FormControl>
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Upload Payment Proof
                      </FormLabel>
                      <FormControl>
                        <div className="flex items-center justify-center w-full">
                          <label 
                            htmlFor="file-upload" 
                            className={cn(
                              "flex flex-col items-center justify-center w-full h-32 rounded-lg cursor-pointer",
                              "border-2 border-dashed transition-all duration-150 ease-in-out",
                              field.value
                                ? "border-brand bg-brand/5 hover:bg-brand/10"
                                : "border-brand/50 hover:border-brand bg-brand/5 hover:bg-brand/10"
                            )}
                          >
                            {field.value ? (
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                {field.value.type.includes("image") ? (
                                  <ImageIcon className="w-8 h-8 mb-4 text-brand" />
                                ) : (
                                  <FileText className="w-8 h-8 mb-4 text-brand" />
                                )}
                                <p className="mb-2 text-sm text-brand font-medium">
                                  {field.value.name}
                                </p>
                                <p className="text-xs text-white">
                                  {(field.value.size / 1024 / 1024).toFixed(2)}MB
                                </p>
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    field.onChange(null);
                                  }}
                                  className="mt-2 text-xs text-brand hover:text-brand/80"
                                >
                                  Remove file
                                </Button>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <UploadCloud className="w-8 h-8 mb-4 text-brand"/>
                                <p className="mb-2 text-sm text-white">
                                  <span className="font-semibold text-brand hover:text-brand/80">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-white">
                                  PDF, JPEG, or PNG (max. 5MB)
                                </p>
                              </div>
                            )}
                            <Input
                              id="file-upload"
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                field.onChange(file);
                              }}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage className="text-brand" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="termsAccepted"
                  render={({ field }) => (
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </Form>
          </BackgroundBeamsWithCollision>
        </div>
      </div>
    </div>
  );
}
