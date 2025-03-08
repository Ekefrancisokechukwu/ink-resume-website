import { UI } from "@/components/ui";
import { countries } from "@/constant";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, CircleUser, Plus, Trash } from "lucide-react";
import { motion } from "motion/react";
import React from "react";

const personalLinks = ["linkedin", "x", "website", "github", "behance"];

type PersonalInformationProps = {
  nextPage: () => void;
};

export const PersonalInformation = ({ nextPage }: PersonalInformationProps) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedLink, setSelectedLink] = React.useState<string[] | []>([]);

  const avaliableLinks = personalLinks.filter(
    (link) => !selectedLink.some((f) => f === link)
  );

  return (
    <div className="max-w-[35rem]">
      <UI.Heading text="Personal Information" />
      <Photo />
      <div className="mt-7 space-y-4">
        <div className="grid grid-cols-2 gap-x-6 ">
          <UI.Input label="Full Name" />
          <UI.Input label="Job Title" />
        </div>
        <UI.Input label="Phone" type="tel" />
        <div className="grid grid-cols-2 gap-x-6 ">
          <div className="flex flex-col gap-y-1.5">
            <UI.Label>Country</UI.Label>
            <UI.Popover open={open} onOpenChange={setOpen}>
              <UI.PopoverTrigger asChild>
                <UI.Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="justify-between h-8 rounded-lg"
                >
                  {value
                    ? countries.find((country) => country.label === value)
                        ?.label
                    : "Select country..."}
                  <ChevronsUpDown className="opacity-50" />
                </UI.Button>
              </UI.PopoverTrigger>
              <UI.PopoverContent className="w-[200px] p-0 rounded-lg">
                <UI.Command>
                  <UI.CommandInput placeholder="Search framework..." />
                  <UI.CommandList className="scroll-bar">
                    <UI.CommandEmpty>No country found.</UI.CommandEmpty>
                    <UI.CommandGroup>
                      {countries.map((country) => (
                        <UI.CommandItem
                          key={country.value}
                          value={country.label}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          {country.label}
                          <Check
                            className={cn(
                              "ml-auto",
                              value === country.label
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </UI.CommandItem>
                      ))}
                    </UI.CommandGroup>
                  </UI.CommandList>
                </UI.Command>
              </UI.PopoverContent>
            </UI.Popover>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <UI.Input label="City" />
          </div>
        </div>
        <UI.Input label="Email" type="email" />

        {selectedLink.length > 0 && (
          <motion.div layoutRoot className="grid grid-cols-2 gap-x-6 gap-y-4 ">
            {[...selectedLink].map((selected) => {
              return (
                <motion.div
                  key={selected}
                  layoutId={selected}
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <UI.Input
                    label={selected}
                    type="text"
                    rightIcon={
                      <button
                        className="group"
                        onClick={() =>
                          setSelectedLink((links) =>
                            links.filter((link) => link !== selected)
                          )
                        }
                      >
                        <Trash className="text-neutral-400 group-hover:text-neutral-700" />
                      </button>
                    }
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}

        <div className="flex items-center flex-wrap gap-3 ">
          {avaliableLinks.map((link) => {
            return (
              <button
                onClick={() =>
                  setSelectedLink((prev) => {
                    return [...prev, link];
                  })
                }
                key={link}
                className="border font-semibold capitalize inline-flex items-center  gap-x-2 ring-neutral-400 px-3 py-1 rounded-full  transition-colors duration-300  text-neutral-500"
              >
                {link} <Plus size={18} />
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-8 flex justify-between items-center">
        <div />
        <UI.Button onClick={nextPage}>Save and Continue</UI.Button>
      </div>
    </div>
  );
};

const Photo = () => {
  return (
    <div className="mt-20 flex items-center gap-x-5">
      <div className="border-dashed border-2 rounded-md grid place-items-center bg-white size-[6rem]">
        <CircleUser size={40} className="text-neutral-600" />
      </div>
      <div>
        <p className="text-neutral-600">
          Add a Photo to Your Resume (Optional)
        </p>
        <UI.Button size={"sm"} variant={"outline"} className="mt-4">
          Add Photo
        </UI.Button>
      </div>
    </div>
  );
};
