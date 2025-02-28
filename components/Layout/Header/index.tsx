import { UI } from "@/components/ui";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="px-6 py-3 sticky top-0 flex bg-white items-center justify-between">
      <UI.Logo />
      <div className="flex items-center gap-x-3">
        <UI.Button variant={"outline"}>Try Demo</UI.Button>
        <div className="h-8 w-1 border-r " />
        <UI.Button variant={"ghost"} asChild>
          <Link href={"/auth"}>Login</Link>
        </UI.Button>
        <UI.Button asChild>
          <Link href={"/app/start-here"}>Get Started</Link>
        </UI.Button>
      </div>
    </header>
  );
};
