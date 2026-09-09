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
}

export default function ProfileCard({
    name,
    username,
    avatar,
    bio,
}: ProfileCardProps) {
    const router = useRouter();

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
}