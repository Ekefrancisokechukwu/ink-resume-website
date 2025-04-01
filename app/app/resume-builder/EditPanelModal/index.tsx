import { Overlay } from "@/components/ui/Overlay";

export function EditInfoModal() {
  return (
    <div className="text-neutral-500">
      <Overlay />

      <div className="bg-white shadow-xl rounded-xl w-[60rem] fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 border  h-[35rem]  z-[60]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        eaque nulla dolor eum. Molestias ratione saepe similique quas facere
        dicta voluptatem, quibusdam maxime consequatur! Consequatur at
        reprehenderit nulla ad sit.
      </div>
    </div>
  );
}
