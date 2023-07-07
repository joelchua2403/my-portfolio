import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import Image from "next/image";
import joel from "../public/images/joel.JPG";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full  mx-auto text-center md:text-center lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          
          </RainbowHighlight>
            <RainbowHighlight color={colors[1]}>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
                Tech Enthusiast.
            </h1>
            </RainbowHighlight>
            <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
                Problem Solver.
            </h1>
            </RainbowHighlight>
            <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-200 my-2">
                Lifelong Learner.
            </h1>
            </RainbowHighlight>
       </RoughNotationGroup>
       </div>
     </div>
    
   );

}