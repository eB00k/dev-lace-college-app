import React from "react";

const ImageGallery = () => {
  const images = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  ];

  return (
    <div className="page py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {images.map((src, index) => (
          <div key={index} className="hover:scale-110 transition-transform">
            <img
              className="h-auto max-w-full"
              src={src}
              alt={`Gallery image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
