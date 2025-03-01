import { UI } from "@/components/ui";
import { CloudUpload } from "lucide-react";
import { FaFilePdf } from "react-icons/fa6";

const UploadResumeModal = () => {
  return (
    <div>
      <div className="w-[35rem] z-[70] rounded-xl   shadow-fade px-7 py-4">
        <h1 className="font-semibold text-lg">Upload Resume</h1>

        <div className="border-2 border-dashed grid place-items-center cursor-default transition-colors duration-500 hover:bg-neutral-200/50  p-6 bg-neutral-100 mt-6  rounded-lg">
          <CloudUpload className="text-neutral-600" />

          <p className=" text-neutral-600 mt-5">
            Choose a file or Drag and drop your file here
          </p>
          <p className="text-neutral-400 text-sm mt-1">
            pdf,txt,doc and docx formats are allowed up to 50MB
          </p>
        </div>

        <div className="mt-5">
          <div className="border text-primary-black rounded-[13px] px-6 py-5">
            <div className="flex gap-x-5">
              <div>
                <FaFilePdf color="#3d3d3d" size={24} />
              </div>
              <div className="grow">
                <div className="flex items-center justify-between">
                  <p>2024-my-portfolio.pdf</p>
                  <div>completed</div>
                </div>
                <div className="shadow-inner mt-2 h-3 border rounded"></div>
              </div>
            </div>

            {/* <div className="flex items-center justify-center gap-x-5">
              <UI.Button size={"sm"} variant={"secondary"}>
                Change
              </UI.Button>
              <UI.Button
                size={"sm"}
                className="bg-red-200 text-red-700 hover:bg-transparent"
              >
                Remove
              </UI.Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default UploadResumeModal;
