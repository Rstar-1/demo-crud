import React from "react";

const OurService = () => {
  const servicecard = [
    {
      title: "Select a project",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      number: "1",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_1.svg",
    },
    {
      title: "Project analysis",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      number: "2",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_2.svg",
    },
    {
      title: "Plan Execute",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      number: "3",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_3.svg",
    },
    {
      title: "Deliver result",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      number: "4",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_4.svg",
    },
  ];
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <p className="text-center mtpx1 fsize16 md-fsize14 sm-fsize13 textgray">
          Work Progress
        </p>
        <h4 className="fsize26 md-fsize22 sm-fsize20 mtpx1 mbpx1 text-center textprimary font-900">
          How To Work It!
        </h4>
        <div className="relative mtpx62 sm-mtpx50">
          <div className="grid-cols-4 sm-grid-cols-1 relative z-50">
            {servicecard.map((e) => (
              <div className="relative sm-mbpx40">
                <div className="d-shadow bgwhite mlpx30 mrpx30 md-mlpx10 md-mrpx10 sm-mlpx25 sm-mrpx25 text-center service2-h flex items-center rounded-10">
                  <div className="plpx20 prpx20 md-plpx10 md-prpx10 sm-plpx10 sm-prpx10 w-full">
                    <img
                      src={e.img}
                      alt="service2-img"
                      className="service2-img object-contain"
                    />
                    <h4 className="fsize20 md-fsize16 sm-fsize16 mtpx8 mbpx1 text-center font-500 textforth">
                      {e.title}
                    </h4>
                    <p className="mtpx8 fsize16 sm-fsize13 text-center md-fsize13 textgray">
                      {e.description}
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 let-0 mlpx10">
                  <div className="pointer flex items-center justify-center">
                    <h5 className="fsize22 textwhite font-600">{e.number}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute z-10 top-0 left-0 w-full flex justify-center sm-hidden">
            <img
              src="https://html.themeholy.com/webteck/demo/assets/img/bg/process_line.svg"
              alt="line"
              className="w-90 mtpx80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
