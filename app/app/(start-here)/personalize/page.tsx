"use client";

import { UI } from "@/components/ui";
import { StepperNav } from "./StepperNav";
import { Check, ChevronsUpDown, CircleUser, Plus } from "lucide-react";
import { countries } from "@/constant";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const personalLinks = ["linkedin", "x", "website", "github", "behance"];

const PersonalizePage = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [selectedLink, setSelectedLink] = React.useState<string[] | []>([]);

  const avaliableLinks = personalLinks.filter(
    (link) => !selectedLink.some((f) => f === link)
  );

  return (
    <div className="bg-neutral-50 min-h-screen grid grid-cols-[auto_1fr_auto] md:pl-0 px-5">
      <StepperNav />
      <section className="grid place-items-center py-10">
        <div className="max-w-[30rem] w-full ">
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
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 ">
                {[...selectedLink].map((selected) => {
                  return (
                    <motion.div
                      key={selected}
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <UI.Input label={selected} type="text" />
                    </motion.div>
                  );
                })}
              </div>
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
        </div>
      </section>
      <div className="w-[13rem] md:block hidden"></div>
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

export default PersonalizePage;
