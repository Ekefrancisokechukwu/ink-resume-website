import { StepperNav } from "./StepperNav";

const PersonalizeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <StepperNav />
      {children}
    </div>
  );
};
export default PersonalizeLayout;
