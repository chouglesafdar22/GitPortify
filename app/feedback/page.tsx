"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPaperPlane } from "react-icons/fa";
import Footer from "@/components/dashboard/Footer";

export default function FeedbackPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            setLoading(true);

            const form = e.currentTarget

            const formData = new FormData(form);

            const data = {
                name: formData.get("name"),
                type: formData.get("type"),
                email: formData.get("email"),
                feedback: formData.get("feedback")
            };

            const res = await fetch("/api/feedback", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.error || "Something went wrong")
            };

            setSuccess(true);

            form.reset();
        } catch (error) {
            toast.error("Something went wrong");
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
            <div className="relative min-h-screen overflow-hidden bg-background px-5 py-14">
                <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
                <div className="relative mx-auto flex justify-center max-w-2xl flex-col gap-8">
                    <div className="flex flex-col justify-center items-center gap-3.5 text-center">
                        <div className="flex justify-center items-center text-center rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1">
                            <span className="xl:text-base md:text-sm text-xs text-center text-purple-400 fira-sans-medium">
                                GitPortify Feedback
                            </span>
                        </div>
                        <h1 className="flex justify-center items-center gap-2 text-foreground xl:text-3xl md:text-2xl text-xl fira-sans-bold leading-tight">
                            Help us improve
                            <h1 className="text-foreground xl:text-3xl md:text-2xl text-xl fira-sans-bold tracking-tight">
                                GitPortify
                            </h1>
                        </h1>
                        <p className="max-w-xl text-muted-foreground xl:text-xl md:text-lg text-base fira-sans-regular leading-relaxed">
                            Share your experience, report bugs, or suggest new features.
                            Your feedback helps us build a better platform for developers.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_40px_rgba(109,40,217,0.12)]">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-5"
                        >
                            <div className="flex flex-col gap-2">
                                <label className="xl:text-lg md:text-base text-sm text-foreground fira-sans-medium">
                                    Name
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full rounded-2xl border border-foreground/10 bg-background/30 px-4 py-3 xl:text-base md:text-sm text-xs text-foreground outline-none transition-all duration-300 hover:border-purple-500/20 focus:border-purple-500/40"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="xl:text-lg md:text-base text-smtext-foreground fira-sans-medium">
                                    Feedback Type
                                </label>
                                <select
                                    name="type"
                                    className="w-full rounded-2xl border border-foreground/10 bg-background/30 px-4 py-3 xl:text-base md:text-sm text-xs text-foreground outline-none transition-all duration-300 hover:border-purple-500/20 focus:border-purple-500/40"
                                >
                                    <option value="general" className="bg-background">
                                        General Feedback
                                    </option>
                                    <option value="bug" className="bg-background">
                                        Bug Report
                                    </option>
                                    <option value="feature" className="bg-background">
                                        Feature Request
                                    </option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="xl:text-lg md:text-base text-sm text-foreground fira-sans-medium">
                                    Email
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email (optional)"
                                    className="w-full rounded-2xl border border-foreground/10 bg-background/30 px-4 py-3 xl:text-base md:text-sm text-xs text-foreground outline-none transition-all duration-300 hover:border-purple-500/20 focus:border-purple-500/40"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="xl:text-lg md:text-base text-sm text-foreground fira-sans-medium">
                                    Feedback
                                </label>
                                <textarea
                                    name="feedback"
                                    rows={5}
                                    required
                                    placeholder="Share your thoughts..."
                                    className="w-full rounded-2xl border border-foreground/10 bg-background/30 px-4 py-3 xl:text-base md:text-sm text-xs text-foreground outline-none transition-all duration-300 hover:border-purple-500/20 focus:border-purple-500/40"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center gap-2 rounded-2xl bg-[#51149C] px-5 py-3 xl:text-base md:text-sm text-xs cursor-pointer text-white transition hover:bg-[#6D28D9] disabled:opacity-60"
                            >
                                {loading
                                    ? "Submitting..."
                                    : (
                                        <>
                                            Submit Feedback
                                            <FaPaperPlane />
                                        </>
                                    )
                                }

                            </button>
                        </form>
                        {
                            success && (
                                <div className="mt-5 rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 xl:text-base md:text-sm text-xs text-green-500 fira-sans-medium">
                                    Thanks for your feedback ❤️
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}