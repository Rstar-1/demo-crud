import React from "react";

const Gallery = () => {
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 bg-fa sm-pbpx20">
      <div className="container mx-auto">
        <div className="grid-cols-3 md-grid-cols-2 sm-grid-cols-1 gap-12">
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_1.png"
              alt="gallery1-img"
              className="w-full gallery1-img flex object-cover"
            />
          </div>
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_2.png"
              alt="gallery1-img"
              className="w-full gallery1-img flex object-cover"
            />
          </div>
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_3.png"
              alt="gallery1-img"
              className="w-full gallery1-img flex object-cover"
            />
          </div>
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_5.png"
              alt="gallery1-img"
              className="w-full gallery1-img flex object-cover"
            />
          </div>
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_4.png"
              alt="gallery1-img"
              className="w-full gallery1-img flex object-cover"
            />
          </div>
          <div className="m6">
            <img
              src="https://eduor.vercel.app/images/event_img_6.png"
              alt="gallery1-img"
              className="w-full gallery1-img flex object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
