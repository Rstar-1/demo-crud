import React from "react";

const HeroSection = () => {
  return (
    <div className="ptpx60 pbpx99 md-ptpx20 md-pbpx50 sm-ptpx20 sm-pbpx20 bgsecondary relative">
      <div className="container mx-auto">
        <div className="flex sm-block w-full items-center">
          <div className="w-60 md-w-50 sm-w-full prpx20 md-prpx9 sm-prpx1">
            <h4 className="textwhite font-400 text-left sm-text-justify mbpx1 fsize20 md-fsize16 sm-fsize14">
              GROW BUSINESS BY
            </h4>
            <h3 className="fsize35 md-fsize23 sm-fsize21 mtpx1 mbpx1 textwhite">
              Award winning digital marketing agency
            </h3>
            <p className="mtpx10 sm-mtpx10 fsize16 sm-fsize14 md-fsize14 textwhite">
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable he followed
              speedily. Indeed vanity excuse or mr lovers of on. By offer scale
              an stuff. Blush be sorry no sight sang lose.
            </p>
            <div className="flex items-center mtpx20">
              <button className="cursor-pointer font-500 textprimary border-white rounded-5 ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 fsize16 md-fsize14 sm-fsize13 bgwhite">
                About Us
              </button>
              <button className="cursor-pointer font-500 whitebtn rounded-5 ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 fsize16 md-fsize14 sm-fsize13 mlpx13">
                Know More
              </button>
            </div>
          </div>
          <div className="w-40 md-w-50 sm-w-full plpx20 md-plpx1 sm-plpx1 sm-mtpx10 relative">
            <img
              src="https://validthemes.net/site-template/diglu/assets/img/illustration/8.png"
              className="w-full herosection2-img object-contain relative z-20"
              alt="herosection2-img"
            />
            <div className="absolute top-0 left-0 w-full hidden sm-block">
              <img
                src="https://validthemes.net/site-template/diglu/assets/img/shape/6.png"
                className="w-full herosecondsection2-img object-contain"
                alt="herosecondsection2-img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full block sm-hidden">
        <img
          src="https://validthemes.net/site-template/diglu/assets/img/shape/5.png"
          className="w-full herothirdsection2-img flex object-cover"
          alt="herothirdsection2-img"
        />
      </div>
      <div className="absolute top-0 left-0 w-full block sm-hidden">
        <img
          src="https://validthemes.net/site-template/diglu/assets/img/shape/6.png"
          className="w-full herosecondsection2-img object-contain"
          alt="herosecondsection2-img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
