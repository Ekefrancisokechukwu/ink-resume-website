import { UI } from "@/components/ui";
import { FontStyleDropdown } from "../FontStyleDropdown";
import { CollapsableMenu } from "../CollapsableMenu";
import { PaintbrushVertical, Telescope } from "lucide-react";
import React from "react";

const colorThemes = [
  { primary: "#1E3A8A", secondary: "#3B82F6" }, // Classic Blue
  { primary: "#000000", secondary: "#4B5563" }, // Elegant Black
  { primary: "#065F46", secondary: "#10B981" }, // Modern Green
  { primary: "#BE185D", secondary: "#F472B6" }, // Soft Pink
  { primary: "#4B5563", secondary: "#9CA3AF" }, // Minimalist Gray
  { primary: "#B91C1C", secondary: "#F87171" }, // Bold Red
  { primary: "#7C3AED", secondary: "#A78BFA" }, // Royal Purple
  { primary: "#047857", secondary: "#34D399" }, // Deep Teal
  { primary: "#D97706", secondary: "#FBBF24" }, // Warm Yellow
  { primary: "#F43F5E", secondary: "#FB7185" }, // Vibrant Coral
  { primary: "#3F6212", secondary: "#A3E635" }, // Olive Green
  { primary: "#0E7490", secondary: "#22D3EE" }, // Ocean Blue
  { primary: "#9333EA", secondary: "#D8B4FE" }, // Electric Violet
  { primary: "#A16207", secondary: "#FACC15" }, // Golden Brown
  { primary: "#9D174D", secondary: "#F472B6" }, // Raspberry Pink
];

export const RightSidebarPanel = () => {
  const [fontSize, setFontSize] = React.useState([10]);
  const [headingSize, setHeadingSize] = React.useState([10]);
  const [letterSpaceing, setLetterSpaceing] = React.useState([13]);
  const [lineheight, setLineHeight] = React.useState([10]);

  return (
    <aside className="md:block hidden min-w-[10rem] w-[18rem] border-l space-y-6 h-screen sticky top-0 px-5 pt-3">
      <CollapsableMenu
        TrigggerIcon={PaintbrushVertical}
        content={
          <div className="py-4 px-3">
            <p className="font-bold text-xs mb-2 text-primary-black">COLORS</p>
            <div className="flex flex-wrap gap-2  items-center">
              {colorThemes.map((color, index) => {
                return (
                  <button
                    key={index}
                    style={{ backgroundColor: color.primary }}
                    className="inline-block flex-shrink-0 rounded-full  size-[1.3rem] hover:ring-offset-2 hover:ring-2 ring-neutral-300 ring-offset-neutral-200 transition-all duration-300"
                  ></button>
                );
              })}
            </div>
            <div className="mt-5">
              <p className="font-bold text-primary-black text-xs mb-2">
                FONT FORMATING
              </p>
              <div className="mt-3">
                <FontStyleDropdown />
              </div>
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-xs mb-2 text-neutral-500">
                  Font size
                </p>
                <p className=" text-neutral-400 text-sm mb-2">{fontSize}</p>
              </div>
              <UI.Slider
                onValueChange={(value) => setFontSize(value)}
                value={fontSize}
                max={18}
                step={2}
                min={5}
              />
            </div>
            <div className="mt-3">
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-xs mb-2 text-neutral-500">
                  Heading size
                </p>
                <p className=" text-neutral-400 text-sm mb-2">{headingSize}</p>
              </div>
              <UI.Slider
                onValueChange={(value) => setHeadingSize(value)}
                value={headingSize}
                max={20}
                step={5}
                min={5}
              />
            </div>
            <div className="mt-6">
              <p className="font-bold text-xs mb-2 text-primary-black">
                LETTER SPACING
              </p>
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-xs mb-2 text-neutral-500">
                    Tracking
                  </p>
                  <div>
                    <p className=" text-neutral-400 text-sm mb-2">
                      {letterSpaceing}
                    </p>
                  </div>
                </div>
                <UI.Slider
                  onValueChange={(value) => setLetterSpaceing(value)}
                  value={letterSpaceing}
                  max={20}
                  step={5}
                  min={5}
                />
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-xs mb-2 text-neutral-500">
                    Line height
                  </p>
                  <div>
                    <p className=" text-neutral-400 text-sm mb-2">
                      {lineheight}%
                    </p>
                  </div>
                </div>
                <UI.Slider
                  onValueChange={(value) => setLineHeight(value)}
                  value={lineheight}
                  max={100}
                  step={5}
                  min={10}
                />
              </div>
            </div>
          </div>
        }
      />
      <CollapsableMenu TrigggerIcon={Telescope} content={<div></div>} />
    </aside>
  );
};
