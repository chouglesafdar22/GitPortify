"use client";
import { useEffect, useState } from "react";
import Footer from "@/components/dashboard/Footer";
import { useTheme } from "next-themes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "next-auth/react";
import GuideBarButton from "@/components/layout/GuideBarButton";

export default function SettingPage() {
    const [loading, setLoading] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const savedTheme = localStorage.getItem("gitportify-theme") as
            | "system"
            | "light"
            | "dark"
            | null;
        if (savedTheme) setTheme(savedTheme);
    }, []);

    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure, you want to logout from this account?");
        if (!confirmLogout) return;
        setLoading(true);
        await signOut({ callbackUrl: "/signup" });
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
                callbackUrl: "/",
            });

        } catch (error) {
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
                newestOnTop={true}
                closeOnClick={false}
                rtl={false}
                pauseOnHover={false}
                draggable
                theme="colored"
            />

            <div className="fixed bottom-5 right-6 z-40">
                <GuideBarButton />
            </div>

            <div className="p-7 space-y-10 h-full max-w-md sm:max-w-xl lg:max-w-3xl w-full">
                <h1 className="text-lg sm:text-xl lg:text-2xl px-16 fira-sans-semibold">
                    Setting
                </h1>

                <div className="space-y-2 border rounded-xl p-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl fira-sans-medium">
                        Theme
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                        {["system", "dark", "light"].map((t) => (
                            <button
                                key={t}
                                onClick={() => {
                                    setTheme(t)
                                    localStorage.setItem("gitportify-theme", t);
                                    toast.success("Theme Changed successfully");
                                }}
                                className={`text-sm px-3 py-2 rounded-md border capitalize transition cursor-pointer ${theme === t
                                    ? "bg-violet-600 text-white border-violet-600 fira-sans-regular"
                                    : "hover:bg-muted fira-sans-light"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-3 border border-red-500/40 rounded-xl p-4">

                    <h3 className="text-lg sm:text-xl lg:text-2xl text-red-500 fira-sans-medium">
                        Danger Zone
                    </h3>

                    {/* Logout */}

                    <div className="space-y-2">

                        <p className="text-sm fira-sans-regular text-muted-foreground">
                            Logout your account from GitPortify on this device.
                        </p>

                        <button
                            onClick={handleLogout}
                            className="text-sm cursor-pointer px-4 py-2 rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition fira-sans-regular"
                        >
                            {loading ? "Logging out..." : "Logout"}
                        </button>

                    </div>

                    <hr className="border-red-500/20" />

                    {/* Delete Account */}

                    <div className="space-y-2">

                        <p className="text-sm fira-sans-regular text-muted-foreground">
                            Permanently delete your GitPortify account, portfolio, settings, and all associated data. This action cannot be undone.
                        </p>

                        <button
                            onClick={handleDeleteAccount}
                            className="text-sm cursor-pointer px-4 py-2 rounded-md border border-red-500 bg-red-500 text-white hover:bg-red-600 transition fira-sans-regular"
                        >
                            {loading ? "Deleting..." : "Delete Account"}
                        </button>

                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
};