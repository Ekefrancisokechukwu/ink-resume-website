import Link from "next/link";
import { creepster } from "../fonts";

export const Logo = () => {
  return (
    <Link href={"/"} className={`sm:text-2xl text-lg ${creepster.className}`}>
      Ink Resume
    </Link>
  );
};
