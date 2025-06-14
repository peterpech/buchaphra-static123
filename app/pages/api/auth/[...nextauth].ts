import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { promises as fs } from "fs";
import path from "path";

async function findUser(email: string, password: string) {
  const filePath = path.join(process.cwd(), "app", "data", "users.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  const users = JSON.parse(jsonData);
  return users.find((u: any) => u.email === email && u.password === password);
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = await findUser(credentials.email, credentials.password);
        if (user) {
          return { id: user.id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
});
export { handler as GET, handler as POST };
