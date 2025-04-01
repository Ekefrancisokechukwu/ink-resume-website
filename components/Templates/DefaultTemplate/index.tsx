import { ProfileSection } from "./ProfileSection";
import { ContactSection } from "./ContactSection";
import { AboutMeProfileSection } from "./AboutMeProfileSection";
import { SkillsSection } from "./SkillsSection";
import { LangaugeSection } from "./LanguageSection";
import { CertificationSection } from "./CertificationSection";
import { ExperienceSection } from "./ExperienceSection";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { cn } from "@/lib/utils";

export const DefaultTemplate = () => {
  const layout = useSelector(
    (state: RootState) => state.customization.customize.layout
  );

  return (
    <div
      className={cn(
        "bg-neutral-50 h-full rounded-lg py-6 px-4 gap-x-3 flex items-start",
        layout === "gridLeft" ? "flex-row-reverse" : ""
      )}
    >
      {/* Layout List */}
      {layout === "list" && (
        <div className="space-y-3 flex-grow">
          <ProfileSection />
          <AboutMeProfileSection />
          <ExperienceSection />
          <ContactSection />
          <SkillsSection />
          <LangaugeSection />
          <CertificationSection />
        </div>
      )}

      {/* Layout Grid right */}
      {(layout === "gridRight" || layout === "gridLeft") && (
        <>
          <div className="space-y-3 flex-grow">
            <ProfileSection />
            <AboutMeProfileSection />
            <ExperienceSection />
          </div>
          <div className="space-y-3  md:w-[15rem] w-[12rem]">
            <ContactSection />
            <SkillsSection />
            <LangaugeSection />
            <CertificationSection />
          </div>
        </>
      )}
    </div>
  );
};
