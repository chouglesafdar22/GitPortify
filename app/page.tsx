"use client";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/hero";
import Template from "@/components/landing/Template";
import Feature from "@/components/landing/Feature";
import Step from "@/components/landing/Step";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";
import CTA from "@/components/landing/CTA";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Template />
            <Feature />
            <Step />
            <Faq />
            <CTA />
            <Footer />
        </>
    );
};