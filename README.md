# UrbanDigTech

This repository contains a Vercel-ready Next.js + Tailwind website for Urban Digital Technologies.

Run locally

```bash
cd /workspaces/UrbanDigTech
npm install
npm run dev
```

Build for production

```bash
npm run build
npm start
```

Contact form

- The site includes a contact form that posts to `/api/contact` (serverless function).
- In production, integrate an email provider (SendGrid/SES/Nodemailer) and store credentials in environment variables.

Environment variables for contact email (optional)

- `SENDGRID_API_KEY`: your SendGrid API key
- `SENDGRID_FROM`: a verified sender email (e.g. no-reply@yourdomain.com)
- `SENDGRID_TO`: destination email to receive form submissions

reCAPTCHA (recommended)

- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: site key (public) — add to Vercel as an environment variable
- `RECAPTCHA_SECRET`: secret key (private) — add to Vercel as an environment variable

To enable automated spam protection, sign up for reCAPTCHA v3, add the site key and secret to Vercel, and the contact form will automatically include and verify tokens.

Index page note

- The Next.js landing page is implemented at `pages/index.js` (recommended for Vercel deployments).
- A minimal static `public/index.html` has been added for environments that expect a standalone `index.html` file. This file links to the Next.js app root.

Deploy to Vercel

- Push the repo to GitHub and import the project in Vercel.
- Add the environment variables above in the Vercel dashboard under Project Settings → Environment Variables.
# UrbanDigTech

This repository contains a Vercel-ready Next.js + Tailwind website for Urban Digital Technologies.

To run locally:

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

Contact form
 - The site includes a contact form that posts to `/api/contact` (serverless function).
 - In production replace the handler in `pages/api/contact.js` with an integration to SendGrid/SES/Nodemailer and store credentials in environment variables.

Deploy to Vercel
 - This project is ready for Vercel. Push to the GitHub repo and import the project in Vercel. Set any required environment variables for email providers if you enable them.

Environment variables for contact email (optional)
- `SENDGRID_API_KEY`: your SendGrid API key
- `SENDGRID_FROM`: a verified sender email (e.g. no-reply@yourdomain.com)
- `SENDGRID_TO`: destination email to receive form submissions

On Vercel: go to your project > Settings > Environment Variables and add the above keys. The API route will use SendGrid when these are present; otherwise form submissions are logged.

reCAPTCHA (recommended)
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`: site key (public) — add to Vercel as an environment variable
- `RECAPTCHA_SECRET`: secret key (private) — add to Vercel as an environment variable

To enable automated spam protection, sign up for reCAPTCHA v3, add the site key and secret to Vercel, and the contact form will automatically include and verify tokens.

