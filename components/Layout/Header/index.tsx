import { creepster } from "@/components/fonts";
import { UI } from "@/components/ui";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-6 py-3 sticky top-0 flex bg-white items-center justify-between">
      <Link href={"/"} className={`text-2xl ${creepster.className}`}>
        Ink Resume
      </Link>
      <div className="flex items-center gap-x-3">
        <UI.Button variant={"outline"}>Try Demo</UI.Button>
        <div className="h-8 w-1 border-r " />
        <UI.Button variant={"ghost"}>Login</UI.Button>
        <UI.Button>Get Started</UI.Button>
      </div>
    </header>
  );
};
