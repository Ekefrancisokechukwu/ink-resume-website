"use client";

import { UI } from "@/components/ui";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export const Header = () => {
  const [isScrollHeight, setIsScrollHeight] = React.useState(false);

  React.useEffect(() => {
    const handleWindowScroll = () => {
      const windowScrollY = window.scrollY;
      if (windowScrollY > 40) {
        setIsScrollHeight(true);
      } else {
        setIsScrollHeight(false);
      }
    };
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <header
      className={cn(
        "px-6 py-3 sticky z-30 border-b border-b-transparent top-0 flex bg-white/85 backdrop-blur-sm items-center justify-between",
        isScrollHeight ? "border-b-border" : ""
      )}
    >
      <UI.Logo />
      <div className="flex items-center gap-x-3">
        <UI.Button variant={"outline"} className="sm:inline-flex hidden">
          Try Demo
        </UI.Button>
        <div className="h-8 w-1 border-r " />
        <UI.Button variant={"ghost"} asChild className="sm:inline-flex hidden">
          <Link href={"/auth"}>Login</Link>
        </UI.Button>
        <UI.Button
          variant={"outline"}
          asChild
          className="sm:hidden inline-flex"
        >
          <Link href={"/auth"}>Login</Link>
        </UI.Button>
        <UI.Button asChild className="sm:inline-flex hidden">
          <Link href={"/app/start-here"}>Get Started</Link>
        </UI.Button>
      </div>
    </header>
  );
};
