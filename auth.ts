import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import fs from "fs";
import path from "path";

const USERS_FILE = path.join(process.cwd(), "users.json");

function readUsers() {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify([]));
  }
  try {
    const data = fs.readFileSync(USERS_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const users = readUsers();
        const user = users.find((u: any) => u.email === credentials.email);

        if (!user) {
          return null;
        }

        // Check password (plain text for simplicity in this mock DB)
        if (user.password === credentials.password) {
          return {
            id: user.id || user.email,
            name: user.name,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
});
