"use client";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/hero";
import Template from "@/components/landing/Template";
import Feature from "@/components/landing/Feature";
import Step from "@/components/landing/Step";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Template />
            <Hero />
            <Feature />
            <Step />
            <Faq />
            <Footer />
        </>
    );
}