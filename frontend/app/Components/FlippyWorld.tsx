import { World } from "@/components/ui/globe";
import { globeConfig, sampleArcs } from "../utils";
import { FormInput } from "lucide-react";

const FlippyWorld = () => {
  return (
    <>
      <div
        className=" shadow-blue-700 flex justify-center "
        style={{
          width: "800px",
          height: "600px",
          bottom: "20px",
          left: "calc(50% - 400px)",
        }}
      >
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </>
  );
};

export default FlippyWorld;
