# Buchaphra NFT Auth Example

This project demonstrates a simple authentication flow using **Next.js** and **NextAuth**. A credentials provider is configured with a single demo user.

This example uses the classic **pages router** for compatibility with NextAuth. There is no `app/` directory. All pages live under `pages/` and API routes under `pages/api/` so the credential provider works correctly.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the home page.
The `package.json` resides in the repository root so build tools and CI systems can find it easily. The home page now features an amulet themed banner and link to the marketplace.

Open `http://localhost:3000/login` to sign in. You can create a new account at `/signup`.
After signing in you can view your profile at `http://localhost:3000/profile`.
Visit `http://localhost:3000/marketplace` to browse a demo NFT storefront and check `http://localhost:3000/template` for a simple page template example.
New pages include a basic KYC form at `/kyc` and a mock NFT mint page at `/mint`.

## Usage

The demo ships with a single preconfigured account:

```
Username: admin
Password: 1234
```

A sign-up page is provided at `/signup`, but the credentials provider only allows the hard-coded account. Submitted registrations are saved to `data/users.json` for reference.

KYC submissions are stored in `data/kyc.json` and associated with the logged‑in user's name. After submitting KYC data at `/kyc`, your profile page will show whether verification is complete. The mint page simply simulates a transaction and does not interact with a real blockchain.

## Building

```bash
npm run build
```

The project is ready to deploy to Vercel. User data is stored in a simple `data/users.json` file when you sign up. This is for demonstration only and should be replaced with a real database in production.

### Assets

Binary image files are not included in this repository. The site uses a small `favicon.svg` under `public/`. Replace this file with your own SVG if you need a custom icon.
An additional placeholder `amulet.svg` provides a simple banner image for the home page.
