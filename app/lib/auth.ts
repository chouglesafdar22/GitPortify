import GitHubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";

export const authOptions: NextAuthOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID!,
            clientSecret: process.env.GITHUB_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope: "read:user user:email repo",
                },
            },
        }),
    ],

    callbacks: {
        async signIn({ user, profile }) {
            try {
                await connectDB();

                const githubProfile = profile as any;

                const githubId = githubProfile.id?.toString();

                if (!githubId) {
                    return false;
                }
                const existingUser = await User.findOne({
                    githubId,
                });

                if (!existingUser) {
                    await User.create({
                        githubId,
                        name: user.name ||
                            githubProfile.name ||
                            githubProfile.login,
                        email: user.email,
                        image: user.image,
                    });
                };
                
                return true;
            } catch (error) {
                console.error("Sign In Error:", error);
                return false;
            }
        },

        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token;
            }

            return token;
        },

        async session({ session, token }) {
            session.accessToken = token.accessToken as string;
            return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
};