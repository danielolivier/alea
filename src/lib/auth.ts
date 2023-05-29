import { nanoid } from "nanoid";
import { NextAuthOptions } from "next-auth";
import CredentialsProviders from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProviders({
      id: "credentials",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const response = await fetch("https://reqres.in/api/login", {
          method: "POST",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        });

        const token = await response.json();

        return {
          id: nanoid(),
          email,
          token,
        };
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (!token.email) {
        if (user) token.id = user?.id;
        return token;
      }

      return {
        id: nanoid(),
        email: token.email,
      };
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
