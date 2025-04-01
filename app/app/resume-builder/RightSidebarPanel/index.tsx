import { UI } from "@/components/ui";
import { FontStyleDropdown } from "../FontStyleDropdown";
import { CollapsableMenu } from "../CollapsableMenu";
import { Check, PaintbrushVertical, Telescope } from "lucide-react";
import React from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux/store";
import { updateCustomization } from "@/redux/features/customize/customizeSlice";
import { cn } from "@/lib/utils";

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
  { primary: "#a3a3a3", secondary: "#a3a3a3" }, // Golden Brown
];

export const RightSidebarPanel = () => {
  const [fontSize, setFontSize] = React.useState([10]);
  const {
    lineHeight,
    headingFontSize,
    tracking,
    color: currentColor,
  } = useSelector((state: RootState) => state.customization.customize);
  const dispatch = useAppDispatch();

  return (
    <aside className="md:block hidden min-w-[10rem] w-[18rem] border-l space-y-6 h-screen sticky top-0 px-5 pt-3">
      <CollapsableMenu
        TrigggerIcon={PaintbrushVertical}
        content={
          <div className="py-4 px-3">
            <p className="font-bold text-xs mb-2 text-primary-black">COLORS</p>
            <div className="flex flex-wrap gap-2  items-center">
              {colorThemes.map((color, index) => {
                const activeColor = color.secondary === currentColor;
                return (
                  <button
                    key={index}
                    onClick={() =>
                      dispatch(updateCustomization({ color: color.secondary }))
                    }
                    style={{ backgroundColor: color.primary }}
                    className={cn(
                      "grid text-center items-center flex-shrink-0 rounded-full  size-[1.3rem] ring-offset-2 hover:ring-2 ring-neutral-300 ring-offset-neutral-200 transition-all duration-300",
                      activeColor ? "ring-2" : ""
                    )}
                  >
                    {activeColor && (
                      <Check size={14} color="#fff" className="mx-auto" />
                    )}
                  </button>
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
                <p className=" text-neutral-400 text-sm mb-2">
                  {headingFontSize}rem
                </p>
              </div>
              <UI.Slider
                onValueChange={(value) =>
                  dispatch(updateCustomization({ headingFontSize: value[0] }))
                }
                value={[headingFontSize]}
                max={2}
                step={0.3}
                min={1}
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
                      {tracking}em
                    </p>
                  </div>
                </div>
                <UI.Slider
                  onValueChange={(value) =>
                    dispatch(updateCustomization({ tracking: value[0] }))
                  }
                  value={[tracking]}
                  max={0.35}
                  step={0.05}
                  min={0}
                />
              </div>
              <div className="mt-3">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-xs mb-2 text-neutral-500">
                    Line height
                  </p>
                  <div>
                    <p className=" text-neutral-400 text-sm mb-2">
                      {lineHeight}%
                    </p>
                  </div>
                </div>
                <UI.Slider
                  onValueChange={(value) =>
                    dispatch(updateCustomization({ lineHeight: value[0] }))
                  }
                  value={[lineHeight]}
                  max={250}
                  step={5}
                  min={100}
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
