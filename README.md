# AI Innovators Vault Website

A modern website for an AI consultancy business offering various AI services and solutions built with React, Express, and shadcn/ui components.

## UI Components

This project uses [shadcn/ui](https://ui.shadcn.com/) components, a collection of reusable components built using Radix UI and Tailwind CSS. You can find these components in the `client/src/components/ui` directory.

## Email Setup

The contact form uses Nodemailer to send emails to ai.innovators.vault@gmail.com. To make this work, you need to:

1. Create a `.env` file in the root directory (copy from `.env.example`)
2. Add your Gmail app password to the `.env` file:

```
EMAIL_PASSWORD=your-gmail-app-password-here
```

### IMPORTANT: How to get an App Password for Gmail

Gmail's security settings require an "App Password" for applications to send emails:

1. Log in to your Gmail account (ai.innovators.vault@gmail.com)
2. Go to your Google Account by clicking on your profile picture and selecting "Manage your Google Account"
3. Select the "Security" tab from the left sidebar
4. Under "Signing in to Google", enable "2-Step Verification" if not already enabled
   - This is required for App Passwords to work
   - Follow the steps to set up 2-Step Verification if needed
5. After enabling 2-Step Verification, go back to the Security page
6. Click on "App passwords" (you may need to sign in again)
7. At the bottom, select "Mail" from the "Select app" dropdown
8. Select "Other (Custom name)" from the "Select device" dropdown
9. Enter "AI Innovators Website" as the name
10. Click "Generate"
11. Google will display a 16-character password (with no spaces)
12. Copy this password and paste it in your `.env` file for the EMAIL_PASSWORD variable
13. Click "Done"

**Note:** Do not include spaces in the App Password when you copy it to your .env file.

## Troubleshooting Email Sending

If you're having issues with sending emails:


1. Make sure 2-Step Verification is enabled on your Google account
2. Verify you've generated an App Password correctly
3. Check that the EMAIL_PASSWORD in your .env file matches the generated App Password
4. Make sure there are no spaces in the App Password
5. If using Gmail, ensure "Less secure app access" is turned OFF (this option is deprecated - you should use App Passwords instead)
6. Check the console logs for any error messages from Nodemailer

## Development

```bash
# Install dependencies
npm install

# Start the development server
npm run start
```

The development server will start on http://localhost:3000 with the API server on port 3001.

## Email Testing

If you want to test the email functionality without setting up Gmail:

1. You can use a service like Ethereal (https://ethereal.email/) for testing
2. Or use Mailtrap (https://mailtrap.io/) for a more robust testing solution
trigger: rebuild Cloudflare Pages
