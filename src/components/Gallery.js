import React from "react";
import Subheader from "./Subheader";
import { galleryPhotos } from "./galleryData/GalleryData";

const Gallery = () => {
  return (
    <section className="flex justify-center pt-12 pb- text-white">
      <div className="w-full">
        <h2 className="after:w-[8%] after:left-[47.5%]">our gallery</h2>
        <Subheader title="enjoy our awesome snapshot" />
        <div className="gallery">
          {galleryPhotos.map((photo, index) => (
            <div key={index}>
              <img src={photo.src} alt="gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
