import { UI } from "@/components/ui";
import { CirclePlus, Trash } from "lucide-react";
import React from "react";

type Certificate = {
  title: string;
};

export const Certifications = () => {
  const [certs, setCerts] = React.useState<Certificate[] | []>([]);

  return (
    <div className="max-w-[34rem]">
      <UI.Heading text="Licenses & Certifications;" />
      <p className="text-neutral-500  mt-1">
        If the job requires you to have a certain certifications or licenses,
        this is where you should list them.
      </p>
      <div className="mt-20">
        <ul className="space-y-4">
          {...certs.map((cert, i) => <SingleCertificate key={i} />)}
        </ul>
        <button
          onClick={() =>
            setCerts((prev) => {
              return [...prev, { title: "new" }];
            })
          }
          className="border-dashed mt-6 border-2 text-sm font-semibold text-neutral-600 bg-white justify-center  px-7 py-3 rounded-lg w-full flex items-center gap-x-3"
        >
          <CirclePlus size={18} />
          {certs.length > 0 ? "Add another certificate" : "Add certificate"}
        </button>
      </div>
    </div>
  );
};

const SingleCertificate = () => {
  const [value, setValue] = React.useState(
    "JavaScript Algorithms and Data Structures - FreeCodeCamp"
  );
  return (
    <li className="border flex gap-x-5 h-14 items-center justify-between bg-white rounded-xl px-4 py-3">
      <div className="flex-grow">
        <input type="text" value={value} className="w-full px-2 py-1" />
      </div>

      <UI.Button size="sm">
        <Trash />
      </UI.Button>
    </li>
  );
};
