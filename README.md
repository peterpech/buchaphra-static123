
Open `http://localhost:3000/login` to sign in using the credentials below. You can create a new account at `/signup`, though sign-ups are saved only for demonstration.

A sign-up page is provided at `/signup`. It collects a username and optional email, storing submissions to `data/users.json` for reference. The credentials provider only allows the preconfigured demo user to authenticate.

This example uses the classic **Pages router** for compatibility with NextAuth. There is no `app/` directory. All pages live under `/pages`.

## Getting Started

Install dependencies and run the development server:

```bash
cd app
npm install
npm run dev
```

Visit `http://localhost:3000` to see the home page.

Open `http://localhost:3000/login` to sign in. You can create a new account at `/signup`.  
After signing in you can view your profile at `http://localhost:3000/profile`.

Visit `/marketplace` to browse a demo NFT storefront. Check `/template`, `/kyc`, and `/mint` for additional page examples.

## Usage

Follow the provided steps to explore NFT minting and marketplace functionalities.
