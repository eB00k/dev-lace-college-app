import React from "react";
import { galleryImages } from "../../config/constants";
import { twMerge } from "tailwind-merge";

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
  return (
    <div className="page py-20 text-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-0">
        {galleryImages.map((image, index) => (
          <ImageCard key={index} bgImage={image.bgImage} title={image.title} />
        ))}
      </div>
      <p className="text-sm pt-20 text-center px-4 sm:px-6 md:px-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam error
        ea veniam. A dolore amet dolores magnam consequuntur odio, expedita,
        dolorum iusto neque aliquam laborum minus cumque impedit ipsa officia
        eum earum porro repudiandae inventore ipsum! Quam ex laudantium modi!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, fuga
        possimus necessitatibus doloribus et beatae, earum deleniti accusantium
        blanditiis, deserunt iure aliquam esse vitae minima porro voluptate quia
        exercitationem quidem!
      </p>
    </div>
  );
};

export default Gallery;
