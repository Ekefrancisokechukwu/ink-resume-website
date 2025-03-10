import { Card } from "../Card";
import { PiCertificateLight } from "react-icons/pi";
import { HeadingContainer } from "../HeadingContainer";
import { Dot } from "lucide-react";

export const CertificationSection = () => {
  return (
    <Card>
      <HeadingContainer heading="Certifications" icon={PiCertificateLight} />
      <div className="py-4 px-4">
        <div>
          <h5 className="text-sm text-neutral-900 font-semibold capitalize">
            Data Structure & algorithem
          </h5>
          <p className="text-neutral-500 font-medium text-xs mt-1 flex items-center gap-x-1">
            <span>FreeCodeCamp</span>
            <span>
              <Dot size={16} />
            </span>{" "}
            <span>Issued Jan 2023</span>
          </p>
        </div>
      </div>
    </Card>
  );
};
