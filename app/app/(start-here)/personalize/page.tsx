"use client";

import { UI } from "@/components/ui";
import { StepperNav } from "./StepperNav";
import { Check, ChevronsUpDown, CircleUser } from "lucide-react";
import { countries } from "@/constant";
import React from "react";
import { cn } from "@/lib/utils";

const PersonalizePage = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  console.log(value);

  return (
    <div className="bg-neutral-50 min-h-screen grid grid-cols-[auto_1fr_auto] md:pl-0 px-5">
      <StepperNav />
      <div className="grid place-items-center">
        <div>
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
                <UI.Popover>
                  <UI.PopoverTrigger asChild>
                    <UI.Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="justify-between"
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
            </div>
          </div>
        </div>
      </div>
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
