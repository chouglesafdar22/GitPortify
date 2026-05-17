"use client"
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex bottom-0 relative w-full py-5 px-5 justify-center items-center text-center">
            <div className='flex  flex-col items-center justify-center gap-2'>
                <div className="flex justify-center items-center gap-1.5">
                    <Link href="/privacy-policy" className="text-[9px] md:text-[10px] xl:text-[11px] text-muted-foreground fira-sans-light hover:text-foreground transition text-center">
                        PrivacyPolicy
                    </Link>

                    <span className="text-[9px] md:text-[10px] xl:text-[11px] text-muted-foreground fira-sans-light text-center">|</span>

                    <Link href="/terms-and-conditions" className="text-[9px] md:text-[10px] xl:text-[11px] text-muted-foreground fira-sans-light hover:text-foreground transition text-center">
                        Terms&Conditions
                    </Link>

                    <span className="text-[9px] md:text-[10px] xl:text-[11px] text-muted-foreground fira-sans-light text-center">|</span>

                    <Link href="/feedback" className="text-[9px] md:text-[10px] xl:text-[11px] text-muted-foreground fira-sans-light hover:text-foreground transition text-center">
                        Feedback
                    </Link>
                </div>
                <p className="text-[9px] md:text-[10px] xl:text-[11px] fira-snas-light text-muted-foreground">&copy;{currentYear} All Rights Reserved GitPortify.</p>
            </div>
        </footer>
    )
};