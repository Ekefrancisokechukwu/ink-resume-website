import Link from "next/link";
import { creepster } from "../fonts";

export const Logo = () => {
  return (
    <Link href={"/"} className={`text-2xl ${creepster.className}`}>
      Ink Resume
    </Link>
  );
};
