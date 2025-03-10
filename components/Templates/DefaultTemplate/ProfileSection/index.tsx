import { MapPin, Rocket } from "lucide-react";
import Image from "next/image";
import { Card } from "../Card";
import { IconBox } from "../IconBox";

export const ProfileSection = () => {
  return (
    <div className="flex items-center gap-x-3">
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
          <h1 className="font-semibold text-2xl truncate">
            Eke Francis Okechukwu
          </h1>
          <p className="font-semibold text-sm text-neutral-500">
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
      {/* <div className="bg-white border flex flex-col justify-between p-4 flex-grow rounded-xl h-[11rem]"></div> */}
    </div>
  );
};
