import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const proxy = NextAuth(authConfig).auth;

export const config = {
  // Protect /dashboard, but exclude assets and api routes
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
