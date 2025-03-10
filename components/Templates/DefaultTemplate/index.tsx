import { ProfileSection } from "./ProfileSection";
import { ContactSection } from "./ContactSection";
import { AboutMeProfileSection } from "./AboutMeProfileSection";
import { SkillsSection } from "./SkillsSection";
import { LangaugeSection } from "./LanguageSection";
import { CertificationSection } from "./CertificationSection";

export const DefaultTemplate = () => {
  return (
    <div className="bg-neutral-50 h-full rounded-lg py-6 px-4 gap-x-3 flex items-start">
      <div className="space-y-3 flex-grow">
        <ProfileSection />
        <AboutMeProfileSection />
      </div>
      <div className="  space-y-3  md:w-[15rem] w-[12rem]">
        <ContactSection />
        <SkillsSection />
        <LangaugeSection />
        <CertificationSection />
      </div>
    </div>
  );
};
