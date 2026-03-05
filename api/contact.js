import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, message, isChatbot } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    try {
        // 1. Send Email to Admin
        const adminSubject = isChatbot
            ? `🤖 New Lead from ${name} - Zyra Chatbot Conversation`
            : `New Contact Form Submission from ${name}`;

        const adminHtml = isChatbot
            ? `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
               <div style="background: linear-gradient(135deg, #B8860B, #FFD700); color: white; padding: 20px; border-radius: 10px 10px 0 0;">
                   <h2 style="margin: 0; font-size: 24px;">🤖 New Lead from Zyra Chatbot</h2>
                   <p style="margin: 5px 0 0; opacity: 0.9;">AI-powered conversation completed</p>
               </div>
               <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #B8860B;">
                   <h3 style="color: #B8860B; margin-top: 0;">👤 Lead Information</h3>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                   ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
                   <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
               </div>
               <div style="background: white; padding: 20px;">
                   <h3 style="color: #333; border-bottom: 2px solid #B8860B; padding-bottom: 10px;">💬 Chat Conversation</h3>
                   <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; font-family: monospace; white-space: pre-line; line-height: 1.6;">${message}</div>
               </div>
               <div style="background: #e8f5e8; padding: 15px; border-radius: 0 0 10px 10px; text-align: center;">
                   <p style="margin: 0; color: #28a745; font-weight: bold;">✅ Lead Ready for Follow-up</p>
               </div>
            </div>`
            : `<h3>New Contact Form Submission</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`;

        const adminMailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.ADMIN_EMAIL || 'zyradigitalsofficial@gmail.com',
            subject: adminSubject,
            text: `Source: Zyra Chatbot\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: adminHtml,
        };

        await transporter.sendMail(adminMailOptions);

        // 2. Send Confirmation Email to User
        const userMailOptions = {
            from: `"Zyra Digitals" <${process.env.EMAIL_USER}>`,
            to: email, // User's email
            subject: isChatbot 
                ? `Nice to meet you ${name}! - Zyra Digitals`
                : 'We received your message!',
            text: isChatbot
                ? `Hi ${name},\n\nThank you for chatting with me! I'm Zyra, your digital assistant from Zyra Digitals.\n\nI've received all your project details and our expert team will review them carefully. We'll get back to you shortly with personalized recommendations for your project.\n\nLooking forward to helping you create something amazing!\n\nBest regards,\nZyra\nDigital Assistant\nZyra Digitals`
                : `Hi ${name},\n\nThank you for reaching out to Zyra Digitals. We have received your message and will get back to you shortly.\n\nBest regards,\nZyra Digitals Team`,
            html: isChatbot
                ? `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                   <div style="background: linear-gradient(135deg, #B8860B, #FFD700); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
                       <div style="font-size: 40px; margin-bottom: 10px;">👋</div>
                       <h2 style="margin: 0;">Nice to meet you ${name}!</h2>
                       <p style="margin: 5px 0 0; opacity: 0.9;">I'm Zyra, your digital assistant</p>
                   </div>
                   <div style="background: white; padding: 30px 20px;">
                       <p>Thank you for chatting with me! I've thoroughly enjoyed our conversation about your project.</p>
                       <p>I've compiled all your requirements and our expert team is already reviewing them. We'll get back to you shortly with personalized recommendations tailored to your needs.</p>
                       <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
                           <h3 style="color: #B8860B; margin-top: 0;">What happens next?</h3>
                           <ul style="color: #666;">
                               <li>Our team reviews your project details</li>
                               <li>We prepare personalized recommendations</li>
                               <li>We'll contact you within 24 hours</li>
                           </ul>
                       </div>
                       <p style="margin-bottom: 0;">Looking forward to helping you create something amazing! 🚀</p>
                   </div>
                   <div style="background: #f9f9f9; padding: 20px; text-align: center; border-radius: 0 0 10px 10px;">
                       <p style="margin: 0; color: #666;">Best regards,<br><strong style="color: #B8860B;">Zyra</strong><br><small>Digital Assistant<br>Zyra Digitals</small></p>
                   </div>
               </div>`
                : `<h3>Hi ${name},</h3><p>Thank you for reaching out to <strong>Zyra Digitals</strong>.</p><p>We have received your message and will get back to you shortly.</p><br><p>Best regards,</p><p><strong>Zyra Digitals Team</strong></p>`,
        };

        await transporter.sendMail(userMailOptions);

        return res.status(200).json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('Email sending failed:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
