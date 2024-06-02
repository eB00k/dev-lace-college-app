import React from "react";
// import { galleryImages } from "../../config/constants";
import { twMerge } from "tailwind-merge";
import SectionTitle from "../title/SectionTitle";
import { useTranslation } from "react-i18next";

const imageMappings = {
  campus: "bg-gallery-1",
  cafeteria: "bg-gallery-2",
  sport: "bg-gallery-3",
  library: "bg-gallery-4",
};

const ImageCard = ({ bgImage, title }) => {
  return (
    <div
      className={twMerge(
        "relative w-full h-[450px] flex items-end justify-start text-left bg-cover bg-center",
        bgImage
      )}
    >
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <main className="p-5 z-10">
        <span className="text-md tracking-tight font-medium leading-7 font-regular text-white ">
          {title}
        </span>
      </main>
    </div>
  );
};

const Gallery = () => {
  const { t } = useTranslation();

  const galleryImages = t("home.gallerySection.images", {
    returnObjects: true,
  });

  return (
    <div className="page py-20 text-slate-900">
      <SectionTitle>{t("home.gallerySection.title")}</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-0">
        {galleryImages.map((image, index) => (
          <ImageCard
            key={index}
            bgImage={imageMappings[image.bgImage]}
            title={image.title}
          />
        ))}
      </div>
      <p className="text-base pt-20 text-center px-4 sm:px-6 md:px-8">
        {t("home.gallerySection.description")}
      </p>
    </div>
  );
};

export default Gallery;
