import { signIn, signInWithProvider } from "@/utils/db/servicefirebase";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import GitHubProvider from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const user: any = await signIn(credentials.email);

          if (!user || !user.password) return null;

          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (isPasswordValid) {
            return {
              id: user.id,
              email: user.email,
              name: user.fullname,
              role: user.role,
            };
          }

          return null;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),

    // Tambah Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
    clientId: process.env.GITHUB_CLIENT_ID || "",
    clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
  }),
  ],

  callbacks: {
    async jwt({ token, account, user }: any) {
      // Login credentials
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.name;
        token.role = user.role;
      }

      // Login Google atau GitHub
      if (account?.provider === "google" || account?.provider === "github") {
        const data = {
          fullname: user.name,
          email: user.email,
          image: user.image,
          type: account.provider,
        };
            token.fullname = data.fullname;
            token.email = data.email;
            token.image = data.image;
            token.type = data.type;
          }

      return token;
    },

    async session({ session, token }: any) {
      if (token) {
        session.user.email = token.email;
        session.user.fullname = token.fullname;
        session.user.role = token.role;
        if (token.image) session.user.image = token.image;
        if (token.type) session.user.type = token.type;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);