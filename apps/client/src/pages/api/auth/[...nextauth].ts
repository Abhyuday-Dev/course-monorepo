// pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { ensureDbConnected } from "@/lib/dbConnect";
import { Admin } from "@/lib/db";
import { redirect } from "next/dist/server/api-utils";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        name: { label: "name", type: "text" },
      },
      async authorize(credentials) {
        await ensureDbConnected();
        if (!credentials) {
          return null;
        }

        const email=credentials.email
        const password=credentials.password
        const name=credentials.name

        if (name) {
          const admin = await Admin.findOne({ username: email });

          if (!admin) {
            const obj = { username: email, password };
            const newAdmin = new Admin(obj);
            const adminDb = await newAdmin.save();
            console.log("User created");
            return {
              id: adminDb._id,
              email: adminDb.username,
            };
          } else {
            return null;
          }
        } else {
            console.log("heger")
            console.log(email)
          const admin = await Admin.findOne({ username: email });

          if (!admin || admin.password !== password) {
            console.log("user dfjkvhndf")
            return null;
          }

          return {
            id: admin._id,
            email: admin.username,
          };
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    encryption: true,
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
});
