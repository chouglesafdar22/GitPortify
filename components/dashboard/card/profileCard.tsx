"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";
import DashboardCard from "./dashboardCard";

interface ProfileCardProps {
    name?: string;
    username?: string;
    avatar?: string;
    bio?: string;
    isLoading?:boolean;
}

export default function ProfileCard({
    name,
    username,
    avatar,
    bio,
    isLoading=false
}: ProfileCardProps) {
    const router = useRouter();

    if (isLoading) {
        return (
            <DashboardCard
                title="Profile"
                onEdit={() => router.push("/dashboard/profile")}
                className="min-h-52"
            >
                <div
                    className="flex h-full animate-pulse items-start gap-4"
                    role="status"
                    aria-label="Loading profile"
                >
                    {/* Avatar skeleton */}
                    <div className="h-16 w-16 shrink-0 rounded-xl border border-foreground/10 bg-foreground/10" />

                    {/* Profile information skeleton */}
                    <div className="min-w-0 flex-1">
                        <div className="h-5 w-32 max-w-full rounded bg-foreground/10" />

                        <div className="mt-2 h-4 w-24 rounded bg-foreground/10" />

                        <div className="mt-4 space-y-2">
                            <div className="h-3 w-full rounded bg-foreground/10" />
                            <div className="h-3 w-4/5 rounded bg-foreground/10" />
                        </div>
                    </div>
                </div>
            </DashboardCard>
        );
    }

    return (
        <DashboardCard
            title="Profile"
            onEdit={() => router.push("/dashboard/profile")}
            className="min-h-52"
        >
            <div className="flex h-full items-start gap-4">

                {/* Avatar */}
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-foreground/10 bg-muted">
                    {avatar ? (
                        <Image
                            src={avatar}
                            alt={name || "Profile"}
                            fill
                            sizes="64px"
                            className="object-cover"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center text-xl text-muted-foreground fira-sans-medium">
                            {name?.charAt(0)?.toUpperCase() || "?"}
                        </div>
                    )}
                </div>

                {/* Profile information */}
                <div className="min-w-0 flex-1">

                    <h3 className="truncate text-lg text-foreground fira-sans-medium">
                        {name || "Your Name"}
                    </h3>

                    <p className="mt-0.5 truncate text-sm text-muted-foreground fira-sans-regular">
                        {username ? `@${username}` : "Username not set"}
                    </p>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground fira-sans-regular">
                        {bio || "Add a short introduction to your profile."}
                    </p>
                </div>
            </div>
        </DashboardCard>
    );
};