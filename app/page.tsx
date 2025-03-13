"use client";

import { Layout } from "@/components/Layout";

import { VideoSection } from "./VideoSection";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";

export default function Home() {
  return (
    <div className="bg-neutral-100 min-h-screen ">
      <Layout.Header />
      <Hero />
      <VideoSection />
      <HowItWorks />
    </div>
  );
}
