import { UI } from "@/components/ui";

const StartHereLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen grid place-items-center ">
      <header className="lg:px-8 px-5 py-4 w-full top-0 fixed">
        <UI.Logo />
      </header>
      <div className="lg:px-8 px-5"> {children}</div>
    </div>
  );
};
export default StartHereLayout;
