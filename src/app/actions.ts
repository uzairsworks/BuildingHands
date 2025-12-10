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

const WEB3FORMS_ACCESS_KEY = "f35391b6-a90a-46ac-b73d-a4217e84da99";

export async function submitInquiry(data: z.infer<typeof inquirySchema>) {
  const parsedData = inquirySchema.safeParse(data);

  if (!parsedData.success) {
    console.error('Validation error:', parsedData.error);
    return { success: false, error: "Invalid data" };
  }

  try {
    // Format the message for email
    const emailMessage = `
New Service Inquiry from Building Hands Website

Name: ${parsedData.data.name}
Phone: ${parsedData.data.phone}
Email: ${parsedData.data.email || 'Not provided'}
Service: ${parsedData.data.service}
Preferred Date: ${parsedData.data.date || 'Not specified'}

Message:
${parsedData.data.message}
    `.trim();

    // Prepare Web3Forms payload
    const formData = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Service Inquiry - ${parsedData.data.service}`,
      from_name: parsedData.data.name,
      message: emailMessage,
      phone: parsedData.data.phone,
      // Use customer email if provided, otherwise Web3Forms will use the email from access key
      ...(parsedData.data.email && { email: parsedData.data.email }),
      // Additional custom fields
      'Service Type': parsedData.data.service,
      'Preferred Date': parsedData.data.date || 'Not specified',
    };

    console.log('Sending to Web3Forms:', {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: formData.subject,
      from_name: formData.from_name,
      has_email: !!formData.email,
      has_phone: !!formData.phone,
    });

    // Send to Web3Forms
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    console.log('Web3Forms response:', {
      success: result.success,
      message: result.message,
      status: response.status,
    });

    if (result.success) {
      return { success: true, message: result.message };
    } else {
      console.error('Web3Forms error:', result);
      return { 
        success: false, 
        error: result.message || 'Failed to send email. Please check your access key and try again.' 
      };
    }
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { 
      success: false, 
      error: `Network error: ${errorMessage}. Please try again later.` 
    };
  }
}
