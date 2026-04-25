"use client"
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex bottom-0 relative w-full py-5 px-5 justify-center items-center text-center">
            <div className='flex items-center justify-center'>
                <p className="text-[9px] md:text-[10px] xl:text-[11px] text-muted-foreground">&copy;{currentYear} All Rights Reserved GitPortify.</p>
            </div>
        </footer>
    )
}