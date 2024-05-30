import React from "react";
import SectionTitle from "../title/SectionTitle";
import { GraduationCap } from "lucide-react";

function Catalog() {
  return (
    <div className="page py-20 px-4 md:px-8 text-slate-900">
      <SectionTitle>OUR BENEFITS</SectionTitle>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="group w-full max-w-72 border-2 border-main rounded-lg hover:bg-main hover:text-white transition-colors p-6 text-center cursor-pointer"
          >
            <div className="w-full flex justify-center items-center text-main hover:text-white">
              <GraduationCap className="w-[56px] h-[56px]" />
            </div>
            <h3 className="mb-4 font-medium text-lg">Lorem Ipsum</h3>
            <p className="text-sm text-slate-700 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              laborum laudantium optio, quasi nisi possimus illum! Voluptatem ad
              exercitationem error.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
