"use server";

import * as z from 'zod';

const inquirySchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().optional(),
  service: z.string(),
  date: z.string().optional(),
  message: z.string(),
});

export async function submitInquiry(data: z.infer<typeof inquirySchema>) {
  const parsedData = inquirySchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, error: "Invalid data" };
  }

  // Here you would typically send an email, save to a database, or call an external API.
  // For this example, we'll just log the data to the console and simulate a success response.
  
  console.log("New Inquiry Received:", parsedData.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Always return success for this demo
  return { success: true };
}
