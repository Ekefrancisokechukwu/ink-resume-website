import { Headphones, Mail } from "lucide-react";
import { Card } from "../Card";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HeadingContainer } from "../HeadingContainer";

export const ContactSection = () => {
  return (
    <Card className="p-0  ">
      <HeadingContainer heading="Contacts" icon={Headphones} />
      <div className="px-4 py-3">
        <ul className="space-y-2">
          <li>
            <Link
              href={"#"}
              className="flex text-xs text-neutral-400 items-center gap-x-2"
            >
              <Mail fill="#a3a3a3" size={13} className="text-neutral-300 " />
              <span className="underline">spectertech202@gmail.com</span>
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="flex text-xs  text-neutral-400 items-center gap-x-2"
            >
              <FaLinkedin size={13} className="text-neutral-400 shrink-0 " />
              <span className="underline truncate">
                linkedin.com/in/francis-okechukwu-954632261
              </span>
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="flex text-xs  text-neutral-400 items-center gap-x-2"
            >
              <FaGithubSquare
                size={13}
                className="text-neutral-400 shrink-0 "
              />
              <span className="underline truncate">github</span>
            </Link>
          </li>
          <li>
            <Link
              href={"#"}
              className="flex text-xs  text-neutral-400 items-center gap-x-2"
            >
              <FaXTwitter size={13} className="text-neutral-400 shrink-0 " />
              <span className="underline truncate">x.com/ekeSpecter</span>
            </Link>
          </li>
        </ul>
      </div>
    </Card>
  );
};
