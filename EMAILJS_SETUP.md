# EmailJS Setup Guide

This guide will help you configure EmailJS to enable email submissions from the consultation form.

## Step 1: Create EmailJS Account

1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## Step 2: Add Gmail Service

1. In the EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "Gmail"
4. Click "Connect Account"
5. Authorize EmailJS to access your Gmail account (weddingsnthings22@gmail.com)
6. Note the **Service ID** (e.g., "service_abc123")

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject Line:**
```
New Consultation Request from {{from_name}}
```

**Email Body:**
```html
<p>You have received a new consultation request from your website!</p>

<h3>Contact Information:</h3>
<ul>
  <li><strong>Name:</strong> {{from_name}}</li>
  <li><strong>Email:</strong> {{from_email}}</li>
  <li><strong>Phone:</strong> {{phone}}</li>
</ul>

<h3>Event Details:</h3>
<ul>
  <li><strong>Event Type:</strong> {{event_type}}</li>
  <li><strong>Event Date:</strong> {{event_date}}</li>
  <li><strong>Guest Count:</strong> {{guest_count}}</li>
  <li><strong>Budget:</strong> {{budget}}</li>
</ul>

<h3>Message:</h3>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from your wedding events website consultation form.</em></p>
```

4. Save the template and note the **Template ID** (e.g., "template_xyz789")

## Step 4: Get Public Key

1. Go to "Account" in the dashboard
2. Find your **Public Key** (e.g., "user_abc123xyz")

## Step 5: Create Environment File

1. In your project root, create a file named `.env`
2. Add your EmailJS credentials:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_actual_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

**Important:** Replace the placeholder values with your actual IDs from the EmailJS dashboard.

## Step 6: Test the Form

1. Make sure your development server is running (`pnpm dev`)
2. Go to the consultation page
3. Fill out and submit the form
4. Check your Gmail inbox for the test email
5. Check the browser console for any errors

## Troubleshooting

### Common Issues:

1. **"EmailJS service error"**: Check that your Service ID is correct
2. **"Template not found"**: Verify your Template ID
3. **"Invalid public key"**: Confirm your Public Key is accurate
4. **No email received**: 
   - Check Gmail spam folder
   - Verify template variables match the code
   - Ensure Gmail service is properly connected

### Test Mode:

You can test EmailJS directly in their dashboard:
1. Go to your template
2. Click "Test it"
3. Fill in sample data
4. Send test email

## Security Note

The `.env` file is already included in `.gitignore`, so your credentials won't be committed to the repository. Never share your EmailJS credentials publicly.

## Support

If you encounter issues:
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their dashboard