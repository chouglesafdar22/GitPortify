"use client";
import Link from "next/link";

interface Props{
    name:string;
}

export default function Footer({name}:Props){
     const currentYear = new Date().getFullYear();

    return(
         <footer className="flex w-full p-5 justify-center items-center text-center">
                <div className='flex items-center justify-center'>
                    <p className="text-[10px] md:text-[11px] xl:text-xs text-muted-foreground">
                        &copy;{currentYear} All Rights Reserved {name}. Created with {" "}
                        <Link
                            href={"/"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline hover:text-violet-600"
                        >
                            GitPortify
                        </Link></p>
                </div>
            </footer>
    )
}