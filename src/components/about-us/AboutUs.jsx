import React from "react";
import { listForMission } from "../../config/constants";
import CustomList from "../list/CustomList";
import SectionTitle from "../title/SectionTitle";
import Button from "../button/Button";

const AboutUs = () => {
  return (
    <div className="page py-20 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="flex flex-col items-center md:flex-row justify-center gap-12">
        <div className="w-full max-w-[400px] h-96 p-1.5 bg-white shadow-md rounded-md">
          <div className="w-full h-full bg-mission bg-no-repeat bg-cover bg-center rounded-md"></div>
        </div>
        <div className="w-full max-w-[400px]">
          <SectionTitle className="text-start">Our Mission</SectionTitle>
          <p className="text-sm my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Temporibus, odio sunt dicta nobis nostrum repellendus illo
            voluptatum excepturi quo voluptate amet voluptatem at consectetur,
            suscipit consequatur eius magni cupiditate officia ea ipsam mollitia
            vitae aut, et tenetur.
          </p>
          <CustomList list={listForMission} className="my-4" />
          <Button className="uppercase bg-main text-white">Learn more</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
