import React from "react";
import { listForMission } from "../../config/constants";
import CustomList from "../list/CustomList";
import SectionTitle from "../title/SectionTitle";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <div className="page py-20 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="flex flex-col items-center md:flex-row justify-center gap-12">
        <div className="w-full max-w-[500px] h-96 p-1.5 bg-white shadow-md rounded-md">
          <div className="w-full h-full bg-mission bg-no-repeat bg-cover bg-center rounded-md"></div>
        </div>
        <div className="w-full max-w-[400px]">
          <SectionTitle className="text-start">About Us</SectionTitle>
          <h3 className="font-medium text-base">Overview</h3>
          <p className="text-sm my-2">
            Light Academy College of Engineering (L.A.C.E.) is an institution
            dedicated to advancing knowledge and innovation in the fields of
            engineering and technology. Located in the heart of a vibrant urban
            center, L.A.C.E. offers a dynamic learning environment that combines
            modern facilities, research, and a commitment to sustainability and
            environmental stewardship.
          </p>

          <CustomList list={listForMission} className="my-4" />
          <Link to={"/about"} preventScrollReset={false} reloadDocument={true}>
            <Button className="uppercase bg-main text-white">Learn more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
