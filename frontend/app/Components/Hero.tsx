import Image from "next/image";
import { globeConfig, HerosSectionData, sampleArcs } from "../utils";
import { FlipWords } from "@/components/ui/flip-words";
import { cn } from "@/lib/utils";
import { Globe, World } from "@/components/ui/globe";
import TaskInput from "./Task-Input";
import { CardWithForm } from "@/components/ui/Card-with-forms";

export const Hero = () => {
  return (
    <div className="  m-5 p-6">
      <div className=" m-2 p-2 mt-10 gap-3 ">
        <div
          className="Text text-center h-full w-full font-bold
        text-blue-400 dark:text-white text-xl md:text-3xl"
        >
          <h1>{`Welcome to the world of Breaking Bounderies of your `}</h1>

          <FlipWords
            words={["Hard work ", "Creativity ", "Skills ", "potential"]}
            className={`${cn()} sm:font-xl  mb-10`}
          />
        </div>

        <div
          className="absolute z-2"
          style={{
            width: "800px",
            height: "600px",
            bottom: "20px",
            left: "calc(50% - 400px)",
            position: "fixed",
          }}
        >
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};
