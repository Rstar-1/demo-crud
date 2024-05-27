import React from "react";

const Banner = () => {
  return (
    <div className="relative h-banner">
      <img
        src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.6575744868268558.jpg-0VVAmED992CXSEhVNA2dt-1710009355"
        alt="banner"
        className="w-full h-banner filter-b6 object-cover"
      />
      <div className="absolute top-0 text-center left-0 flex items-center justify-start h-banner">
        <div className="w-full container mx-auto">
          <h3 className="textwhite font-800 sm-font-400 mtpx9 sm-mtpx6 leading mbpx1 fsize45 md-fsize35 sm-fsize24">
            Our Blogs
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
