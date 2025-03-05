"use client";

import { UI } from "@/components/ui";
import { countries, months } from "@/constant";
import { cn, generateYears } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import React from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const AddExperince = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const years = generateYears(2000, 2030);
  return (
    <div className="max-w-[35rem] w-full">
      {/* <Responsibilities /> */}

      <UI.Heading text="Add Experince" />
      <div className="mt-20 space-y-5">
        <div className="grid grid-cols-2 gap-x-5">
          <UI.Input label="Job Title" />
          <UI.Input label="Company" />
        </div>
        <div className="grid grid-cols-2 gap-x-5">
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
              <UI.PopoverContent className="w-[200px] p-0">
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
          <UI.Input label="State" />
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <div className="flex flex-col gap-y-1.5">
            <UI.Label>Start Year</UI.Label>
            <UI.Select>
              <UI.SelectTrigger>
                <UI.SelectValue placeholder="Select Year" />
              </UI.SelectTrigger>
              <UI.SelectContent>
                {years.map((year, i) => (
                  <UI.SelectItem key={i} value={year.value}>
                    {year.label}
                  </UI.SelectItem>
                ))}
              </UI.SelectContent>
            </UI.Select>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <UI.Label>Start Month</UI.Label>
            <UI.Select>
              <UI.SelectTrigger>
                <UI.SelectValue placeholder="Select Month" />
              </UI.SelectTrigger>
              <UI.SelectContent>
                {months.map((month, i) => (
                  <UI.SelectItem key={i} value={month}>
                    {month}
                  </UI.SelectItem>
                ))}
              </UI.SelectContent>
            </UI.Select>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5">
          <div className="flex flex-col gap-y-1.5">
            <UI.Label>End Year</UI.Label>
            <UI.Select>
              <UI.SelectTrigger>
                <UI.SelectValue placeholder="End Year" />
              </UI.SelectTrigger>
              <UI.SelectContent>
                {years.map((year, i) => (
                  <UI.SelectItem key={i} value={year.value}>
                    {year.label}
                  </UI.SelectItem>
                ))}
              </UI.SelectContent>
            </UI.Select>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <UI.Label>End Month</UI.Label>
            <UI.Select>
              <UI.SelectTrigger>
                <UI.SelectValue placeholder="End Month" />
              </UI.SelectTrigger>
              <UI.SelectContent>
                {months.map((month, i) => (
                  <UI.SelectItem key={i} value={month}>
                    {month}
                  </UI.SelectItem>
                ))}
              </UI.SelectContent>
            </UI.Select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-x-3 mt-11">
        <UI.Button variant={"outline"} className="w-full">
          Back
        </UI.Button>
        <UI.Button className="w-full">Save</UI.Button>
      </div>
    </div>
  );
};

const Responsibilities = () => {
  return (
    <div>
      <UI.Heading text="List your responsibilitiess" />
      <p className="text-neutral-600 mt-1">
        Write what you did as a{" "}
        <span className="font-semibold capitalize">frontend developer </span> at{" "}
        <span className="font-semibold capitalize">pickriders </span>
      </p>
      <p className="mt-3 font-semibold text-neutral-600">
        Pick from our ready-to-use phrases or write your own and get AI writing
        help.
      </p>
      <RichTextEditor />
    </div>
  );
};

const RichTextEditor = () => {
  const [content, setContent] = React.useState("");

  return (
    <div className="mt-10 bg-white p-4 border rounded-xl">
      {/* <ReactQuill
        value={content}
        onChange={setContent}
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
      /> */}
    </div>
  );
};

// Toolbar and formats
RichTextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["bold", "italic", "underline"],
    [{ align: [] }],
    ["clean"],
  ],
};

RichTextEditor.formats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "align",
];

export default RichTextEditor;
