import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import rateLimiter from './rateLimiter'; // Adjust the path as necessary

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(request) {
  try {
    // Apply rate limiting
    await new Promise((resolve, reject) => {
      rateLimiter(request, {
        status: (statusCode) => ({
          json: (data) => {
            const error = new Error(data.message);
            error.status = statusCode;
            return reject(error);
          },
        }),
        headers: {},
      }, (result) => {
        if (result instanceof Error) return reject(result);
        resolve(result);
      });
    });

    const { firstName, email, message, token } = await request.json();

    if (!firstName || !email || !message || !token) {
      return NextResponse.json({ success: false, message: 'Missing required fields' });
    }

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: RECAPTCHA_SECRET_KEY,
        response: token,
      }),
    });

    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return NextResponse.json({ success: false, message: 'reCAPTCHA verification failed' });
    }

    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Ignore certificate validation errors
      },
    });

    // Set up email data
    const mailOptions = {
      from: email, // Use the email address from the form
      to: 'contact@asociatiauman.ro',
      subject: 'New Contact Form Submission',
      text: `Name: ${firstName}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Form submitted and email sent successfully' });
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json({ success: false, message: 'Error processing the request' });
  }
}
