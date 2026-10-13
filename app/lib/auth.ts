import { auth, clerkClient } from "@clerk/nextjs/server";
import type { OAuthProvider } from "@clerk/nextjs/types";
import { connectDB } from "@/app/lib/mongodb";
import User from "@/app/models/User";

export async function getCurrentUser() {
    const { userId } = await auth();

    if (!userId) {
        return null;
    }

    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    return user;
};

export async function getCurrentUserId() {
    const { userId } = await auth();

    return userId;
};

export async function getCurrentUserProvider(): Promise<{
    provider: OAuthProvider;
    providerId: string;
    username: string;
} | null> {
    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    const externalAccount = user.externalAccounts.find(
        (account) =>
            account.provider === "oauth_github" ||
            account.provider === "oauth_gitlab"
    );

    if (!externalAccount) {
        return null;
    }

    const provider: OAuthProvider =
        externalAccount.provider === "oauth_github"
            ? "github"
            : "gitlab";

    const username =
        externalAccount.username ||
        user.username ||
        "";

    if (!username) {
        console.error("Provider username is missing");
        return null;
    }

    return {
        provider,
        providerId: externalAccount.providerUserId,
        username,
    };
}

export async function getCurrentUserAccessToken() {
    const userId = await getCurrentUserId();

    if (!userId) {
        return null;
    }

    const providerInfo = await getCurrentUserProvider();

    if (!providerInfo) {
        return null;
    }

    const client = await clerkClient();

    const response = await client.users.getUserOauthAccessToken(
        userId,
        providerInfo.provider
    );

    const accessToken = response.data[0]?.token;

    if (!accessToken) {
        return null;
    }

    return {
        provider: providerInfo.provider,
        providerId: providerInfo.providerId,
        accessToken,
    };
};

export async function getOrCreateCurrentUser() {
    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    const providerInfo = await getCurrentUserProvider();

    if (!providerInfo) {
        return null;
    }

    await connectDB();

    const email = user.primaryEmailAddress?.emailAddress ?? "";

    const name =
        user.fullName ||
        user.firstName ||
        user.username ||
        "GitPortify User";

    const username = user.username || "";

    if (!username) {
        console.error("Clerk username is missing");
        return null;
    }

    const mongoUser = await User.findOneAndUpdate(
        {
            clerkId: user.id,
        },
        {
            $set: {
                provider: providerInfo.provider,
                providerId: providerInfo.providerId,
                name,
                username,
                email,
                image: user.imageUrl || "",
            },
        },
        {
            returnDocument: "after",
            upsert: true,
            runValidators: true,
            setDefaultsOnInsert: true,
        }
    );

    return mongoUser;
}