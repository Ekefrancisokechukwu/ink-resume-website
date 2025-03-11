import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { Move, Pencil } from "lucide-react";
import { useSelector } from "react-redux";

type OverlayProps = {
  sortable?: boolean;
};

export const Overlay = ({ sortable = false }: OverlayProps) => {
  const editMode = useSelector((state: RootState) => state.resumeMode.editMode);

  return (
    <div
      className={cn(
        "w-[113%] scale-75 opacity-0 invisible group-hover/card:visible group-hover/card:opacity-100 group-hover/card:scale-100    transition-all duration-200 flex justify-end h-[110%] px-2 py-5 ring-1 ring-black rounded-lg bg-white -z-10 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2",
        !editMode ? "hidden" : "flex"
      )}
    >
      <div className="flex flex-col gap-y-5">
        <button className="size-[1.7rem] group   rounded-lg grid place-items-center bg-neutral-100 hover:bg-neutral-800 transition-colors duration-200">
          <Pencil size={15} className="group-hover:text-neutral-50" />
        </button>
        {sortable && (
          <button className="size-[1.7rem] cursor-grab rounded-lg grid place-items-center bg-neutral-100  transition-colors duration-200">
            <Move size={15} className="group-hover:text-neutral-50" />
          </button>
        )}
      </div>
    </div>
  );
};
