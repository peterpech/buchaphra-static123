import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const { username, password } = credentials;

        // 🔐 จำลองการตรวจสอบ username/password
        if (username === "admin" && password === "1234") {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
          };
        }

        // ❌ ล็อกอินไม่ผ่าน
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login", // คุณสามารถสร้างหน้าล็อกอินเองได้
  },
  secret: process.env.NEXTAUTH_SECRET, // ใส่ใน .env.local
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
