import { MapPin, Rocket } from "lucide-react";
import { Card } from "../Card";
import { IconBox } from "../IconBox";
import { Overlay } from "../Overlay";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Image from "next/image";

export const ProfileSection = () => {
  const { tracking } = useSelector(
    (state: RootState) => state.customization.customize
  );

  const style: React.CSSProperties = {
    letterSpacing: `${tracking}em`,
  };

  return (
    <div className="flex items-center gap-x-3 z-10 relative group/card">
      <div className="w-[8rem] shrink-0 rounded-xl relative h-[9rem] bg-neutral-100">
        <Image
          alt="user profile pic"
          src={"/profile.jpeg"}
          width={600}
          height={500}
          className="object-cover w-full h-full rounded-xl flex-grow"
        />
      </div>
      <Card className="flex flex-col p-4 justify-between h-[9rem] flex-grow">
        <IconBox Icon={Rocket} />
        <div>
          <h1 style={style} className="font-semibold text-3xl truncate">
            Eke Francis Okechukwu
          </h1>
          <p
            style={{ letterSpacing: `${tracking}em` }}
            className="font-semibold text-base text-neutral-500"
          >
            Full-stack Web Developer
          </p>
        </div>
        <div className="flex  items-center gap-x-2">
          <MapPin size={13} className="text-neutral-400 " />
          <p className="text-neutral-500 font-medium text-xs">
            Based in Enugu, Nigeria
          </p>
        </div>
      </Card>
      <Overlay />
    </div>
  );
};
