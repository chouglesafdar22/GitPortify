"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";

interface PublishModalProps {
    isOpen: boolean;
    onClose: () => void;
    portfolioUrl: string;
    name: string;
};

export default function PublishModal({
    isOpen,
    onClose,
    portfolioUrl,
    name
}: PublishModalProps) {
    if (!isOpen) return null;

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(portfolioUrl);
            toast.success("Portfolio link is copied");
        } catch (error) {
            toast.error("Failed to copy link")
        }
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: `${name || "My"} Portfolio`,
                    text: "Check out my portfolio",
                    url: portfolioUrl
                });
            } else {
                await navigator.clipboard.writeText(portfolioUrl);
                toast.info("Sharing not supported, Link is copied instead");
            }
        } catch (error) {
            toast.error("Sorry")
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
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="w-full lg:max-w-md sm:max-w-sm max-w-xs rounded-2xl border bg-background p-6 shadow-2xl"
                    >
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h2 className="text-xl fira-sans-semibold text-foreground">
                                    Portfolio Published
                                </h2>
                                <p className="mt-1 text-sm fira-sans-medium text-muted-foreground">
                                    Your portfolio is ready
                                </p>
                            </div>
                            <Button
                                variant={"outline"}
                                onClick={onClose}
                                className="text-sm cursor-pointer fira-sans-regular"
                            >
                                X
                            </Button>
                        </div>
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <Button
                                onClick={handleCopy}
                                className="cursor-pointer fira-sans-regular"
                            >
                                Copy Link
                            </Button>
                            <Button
                                variant={"secondary"}
                                onClick={handleShare}
                                className="cursor-pointer fira-sans-regular"
                            >
                                Share
                            </Button>
                        </div>
                        <Link
                            href={portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm fira-sans-regular hover:bg-muted cursor-pointer w-full mt-2.5"
                        >
                            Open Portfolio
                        </Link>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </>
    )
};