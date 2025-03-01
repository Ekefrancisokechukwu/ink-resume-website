import { UI } from "@/components/ui";
import { CloudUpload } from "lucide-react";
import { FaFilePdf } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

// import {motion} from ""ion

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
          <div className="shadow-fade text-primary-black rounded-[13px] p-5">
            <div className="flex gap-x-5">
              <div>
                <FaFilePdf color="#3d3d3d" size={24} />
              </div>
              <div className="grow">
                <div className="flex items-center justify-between">
                  <p className="text-neutral-600">2024-my-portfolio.pdf</p>
                  <div className="flex items-center gap-x-2 ">
                    {/* <FaCheckCircle color="#3d3d" />
                    <span className="font-medium text-primary-black text-sm">
                      completed
                    </span> */}
                    <span className="font-semibold text-neutral-500 text-sm">
                      98%
                    </span>
                  </div>
                </div>
                <div className="shadow-inner mt-2 h-2.5 border bg-neutral-100 rounded">
                  <div className="h-full bg-primary-black rounded w-7 transition-all duration-300" />
                </div>

                <div className="flex items-center mt-3 gap-x-3">
                  <button className="bg-neutral-100 hover:bg-neutral-200 transition-colors duration-500 font-medium px-3 py-1 text-neutral-400 rounded-[10px]">
                    Change
                  </button>
                  <button className="bg-red-50 hover:bg-red-100 text-red-400 font-medium px-3 py-1 transition-colors duration-500 rounded-[10px]">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UploadResumeModal;
