"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useClerk } from "@clerk/nextjs";
import GuideBarButton from "@/components/layout/GuideBarButton";
import Link from "next/link";

export default function SettingPage() {
    const [loading, setLoading] = useState(false);
    const [inLoading, setInLoading] = useState(false);
    const { theme, setTheme } = useTheme();
    const { signOut } = useClerk();

    useEffect(() => {
        const savedTheme = localStorage.getItem("gitportify-theme") as
            | "system"
            | "light"
            | "dark"
            | null;
        if (savedTheme) setTheme(savedTheme);
    }, []);

    const handleLogout = async () => {
        const confirmLogout = window.confirm(
            "Are you sure, you want to logout from this account?"
        );

        if (!confirmLogout) return;

        try {
            setInLoading(true);

            await signOut({
                redirectUrl: "/signin",
            });
        } catch (error) {
            console.error("Logout Error:", error);
            setInLoading(false);
            toast.error("Failed to logout. Please try again.");
        }
    };

    const handleDeleteAccount = async () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to permanently delete your GitPortify account? This action cannot be undone."
        );

        if (!confirmDelete) return;

        setLoading(true);

        try {
            const response = await fetch("/api/accounts/delete", {
                method: "DELETE",
            });

            const data = await response.json();

            if (!response.ok) {
                toast.error(data.error || "Failed to delete account.");
                return;
            }

            // Remove only GitPortify data
            Object.keys(localStorage).forEach((key) => {
                if (key.startsWith("gitportify-")) {
                    localStorage.removeItem(key);
                }
            });

            toast.success("Account deleted successfully.");

            await signOut({
                redirectUrl: "/signup",
            });
        } catch (error) {
            console.error("Delete Account Error:", error);
            toast.error("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick={false}
                rtl={false}
                pauseOnHover={false}
                draggable
                theme="colored"
            />

            <div className="fixed bottom-5 right-6 z-40">
                <GuideBarButton />
            </div>

            <main className="min-h-full w-full px-4 py-5 md:px-6 xl:px-8">
                <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 pb-10 pt-12 md:pt-0 md:pb-0">

                    {/* Header */}
                    <div className="space-y-1">
                        <h1 className="text-2xl font-semibold tracking-tight text-foreground fira-sans-semibold sm:text-3xl">
                            Settings
                        </h1>

                        <p className="text-sm text-muted-foreground fira-sans-regular">
                            Manage your GitPortify preferences, account, and
                            support options.
                        </p>
                    </div>

                    {/* Appearance */}
                    <section className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/2.5 shadow-sm">
                        <div className="border-b border-foreground/10 px-5 py-4 sm:px-6">
                            <h2 className="text-base font-medium text-foreground fira-sans-medium sm:text-lg">
                                Appearance
                            </h2>

                            <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                Customize how GitPortify looks on your device.
                            </p>
                        </div>

                        <div className="px-5 py-5 sm:px-6">
                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm font-medium text-foreground fira-sans-medium">
                                        Theme
                                    </p>

                                    <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                        Choose between system, dark, or light mode.
                                    </p>
                                </div>

                                <div className="grid grid-cols-3 gap-2 sm:max-w-md">
                                    {["system", "dark", "light"].map((t) => (
                                        <button
                                            key={t}
                                            type="button"
                                            onClick={() => {
                                                setTheme(t);
                                                localStorage.setItem(
                                                    "gitportify-theme",
                                                    t
                                                );

                                                toast.success(
                                                    "Theme changed successfully"
                                                );
                                            }}
                                            className={`h-10 cursor-pointer rounded-lg border text-sm capitalize transition-all duration-200 fira-sans-regular ${theme === t
                                                ? "border-violet-600 bg-violet-600 text-white shadow-sm"
                                                : "border-foreground/10 bg-background text-muted-foreground hover:border-foreground/20 hover:bg-foreground/4 hover:text-foreground"
                                                }`}
                                        >
                                            {t}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Legal & Support */}
                    <section className="overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/2.5 shadow-sm">
                        <div className="border-b border-foreground/10 px-5 py-4 sm:px-6">
                            <h2 className="text-base text-foreground fira-sans-medium sm:text-lg">
                                Legal & Support
                            </h2>

                            <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                Important information and ways to get help.
                            </p>
                        </div>

                        <div className="divide-y divide-foreground/10">
                            {/* Privacy */}
                            <Link
                                href="/legal/privacy-policy"
                                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-foreground/3 sm:px-6"
                            >
                                <div>
                                    <p className="text-sm text-foreground fira-sans-medium">
                                        Privacy Policy
                                    </p>

                                    <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                        Learn how GitPortify collects, uses, and
                                        protects your information.
                                    </p>
                                </div>

                                <span className="text-sm text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-foreground">
                                    →
                                </span>
                            </Link>

                            {/* Terms */}
                            <Link
                                href="/legal/terms-and-conditions"
                                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-foreground/3 sm:px-6"
                            >
                                <div>
                                    <p className="text-sm text-foreground fira-sans-medium">
                                        Terms & Conditions
                                    </p>

                                    <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                        Review the terms for using GitPortify.
                                    </p>
                                </div>

                                <span className="text-sm text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-foreground">
                                    →
                                </span>
                            </Link>

                            {/* Feedback */}
                            <Link
                                href="/support/feedback"
                                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-foreground/3 sm:px-6"
                            >
                                <div>
                                    <p className="text-sm text-foreground fira-sans-medium">
                                        Send Feedback
                                    </p>

                                    <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                        Report a bug, request a feature, or share
                                        your feedback.
                                    </p>
                                </div>

                                <span className="text-sm text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-foreground">
                                    →
                                </span>
                            </Link>

                            {/* Version & Release Notes */}
                            <Link
                                href="/dashboard/setting/versions"
                                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-foreground/3 sm:px-6"
                            >
                                <div className="min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <p className="text-sm text-foreground fira-sans-medium">
                                            Version & Release Notes
                                        </p>

                                        <span className="rounded-full border border-violet-500/25 bg-violet-500/10 px-2 py-0.5 text-[10px] fira-sans-medium text-violet-400 fira-sans-medium">
                                            v1.0.0
                                        </span>
                                    </div>

                                    <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                        Explore the latest features, improvements, and bug fixes.
                                    </p>
                                </div>

                                <span className="text-sm text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-foreground">
                                    →
                                </span>
                            </Link>
                        </div>
                    </section>

                    {/* Danger Zone */}
                    <section className="overflow-hidden rounded-2xl border border-red-500/20 bg-red-500/2">
                        <div className="border-b border-red-500/15 px-5 py-4 sm:px-6">
                            <h2 className="text-base font-medium text-red-500 fira-sans-medium sm:text-lg">
                                Danger Zone
                            </h2>

                            <p className="mt-0.5 text-xs text-muted-foreground fira-sans-regular">
                                These actions affect your account and cannot always
                                be undone.
                            </p>
                        </div>

                        <div className="divide-y divide-red-500/10">

                            {/* Logout */}
                            <div className="flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                                <div className="max-w-xl">
                                    <p className="text-sm font-medium text-foreground fira-sans-medium">
                                        Log out
                                    </p>

                                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground fira-sans-regular">
                                        Log out of your GitPortify account on this
                                        device.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    disabled={inLoading}
                                    className="h-9 w-full cursor-pointer rounded-lg border border-red-500/50 px-4 text-sm text-red-500 transition-all hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto fira-sans-medium"
                                >
                                    {inLoading ? "Logging out..." : "Log out"}
                                </button>
                            </div>

                            {/* Delete Account */}
                            <div className="flex flex-col gap-4 px-5 py-5 sm:px-6">
                                <div>
                                    <p className="text-sm font-medium text-foreground fira-sans-medium">
                                        Delete account
                                    </p>

                                    <p className="mt-1 max-w-2xl text-xs leading-relaxed text-muted-foreground fira-sans-regular">
                                        Permanently delete your GitPortify account,
                                        portfolio, settings, and associated data.
                                        This action cannot be undone.
                                    </p>
                                </div>

                                <div>
                                    <button
                                        type="button"
                                        onClick={handleDeleteAccount}
                                        disabled={loading}
                                        className="h-9 w-full cursor-pointer rounded-lg bg-red-500 px-4 text-sm text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto fira-sans-medium"
                                    >
                                        {loading
                                            ? "Deleting..."
                                            : "Delete Account"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
};