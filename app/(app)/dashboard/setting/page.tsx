"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/dashboard/Footer";
import { useTheme } from "next-themes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "next-auth/react";

export default function SettingPage() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const { theme, setTheme } = useTheme();
    const [url, setUrl] = useState("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            setUrl(`${window.location.origin}/portfolio/${username}`);
        }
    }, [username]);

    useEffect(() => {
        const savedUsername = localStorage.getItem("gitportify-username");
        const savedTheme = localStorage.getItem("gitportify-theme") as
            | "system"
            | "light"
            | "dark"
            | null;

        if (savedUsername) setUsername(savedUsername);
        if (savedTheme) setTheme(savedTheme);
    }, []);

    const handleLogout = async () => {
        const confirmLogout = window.confirm("Are you sure, you want to logout from this account?");
        if (!confirmLogout) return;
        setLoading(true);
        await signOut({ callbackUrl: "/signup" });
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

            <div className="py-8 px-16 md:px-20 space-y-10 h-dvh max-w-md sm:max-w-xl lg:max-w-3xl w-full">
                <h1 className="text-lg sm:text-xl lg:text-2xl px-2 font-semibold">
                    Settings
                </h1>
                <div className="space-y-2 border rounded-xl p-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                        Profile
                    </h3>
                    <div className="space-y-2">
                        <label
                            className="text-sm sm:text-base lg:text-xl text-muted-foreground"
                        >
                            Username
                        </label>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="your-name"
                            className="w-full border rounded-md px-3 py-2 bg-background text-sm"
                        />
                        <p className="text-xs text-muted-foreground">
                            Your Portfolio URL: {url}
                        </p>
                    </div>
                    <Button
                        className="cursor-pointer text-sm"
                        variant={"secondary"}
                        onClick={() => {
                            localStorage.setItem("gitportify-username", username);
                            toast.success("Username Saved");
                        }}
                    >
                        Save Username
                    </Button>
                </div>

                <div className="space-y-2 border rounded-xl p-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                        Theme
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                        {["systme", "dark", "light"].map((t) => (
                            <button
                                key={t}
                                onClick={() => {
                                    setTheme(t)
                                    localStorage.setItem("gitportify-theme", t);
                                    toast.success("Theme Changed successfully");
                                }}
                                className={`text-sm px-3 py-2 rounded-md border capitalize transition cursor-pointer ${theme === t
                                    ? "bg-violet-600 text-white border-violet-600"
                                    : "hover:bg-muted"
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-2 border border-red-500/40 rounded-xl p-4">
                    <h3 className="text-lg sm:text-xl lg:text-2xl text-red-500 font-medium">
                        Danger Zone
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        This will Logout your account from GitPortify
                    </p>
                    <button
                        onClick={handleLogout}
                        className="text-sm cursor-pointer px-4 py-2 rounded-md border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
                    >
                        {loading ? "Logout..." : "Logout"}
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
};