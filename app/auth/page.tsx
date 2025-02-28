import { UI } from "@/components/ui";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

const AuthPage = () => {
  return (
    <section className="h-screen grid place-items-center px-5">
      <div>
        <div className="text-center">
          <UI.Logo />
        </div>
        <div className="w-[30rem] max-[520px]:w-full mt-6 bg-neutral-100 p-1.5 shadow rounded-lg ">
          <div className="w-full bg-white border py-8 px-6 rounded-lg">
            <h1 className="text-primary-black text-center font-medium text-2xl">
              Log in / Sign up
            </h1>
            <div className="mt-5 space-y-3">
              <UI.Button size={"sm"} className="w-full">
                <FcGoogle /> Continue with Google
              </UI.Button>
              <UI.Button
                size={"sm"}
                variant={"outline"}
                className="w-full shadow"
              >
                <IoLogoGithub /> Continue with Github
              </UI.Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AuthPage;
