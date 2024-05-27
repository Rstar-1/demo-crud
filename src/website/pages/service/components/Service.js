import React from "react";

const Service = () => {
  const servicecard = [
    {
      title: "Select a project",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      number: "01",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_1.svg",
    },
    {
      title: "Project analysis",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      number: "02",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_2.svg",
    },
    {
      title: "Plan Execute",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      number: "03",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_3.svg",
    },
    {
      title: "Deliver result",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      number: "04",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_4.svg",
    },
    {
      title: "Plan Execute",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      number: "05",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_5.svg",
    },
    {
      title: "Select a project",
      description:
        "Continua scale empowered metrics with cost effective innovation.",
      number: "06",
      img: "https://html.themeholy.com/webteck/demo/assets/img/icon/service_card_6.svg",
    },
  ];
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
          <div className="grid-cols-3 sm-grid-cols-1 relative z-50">
            {servicecard.map((e) => (
              <div className="sm-mbpx10">
                <div className="d-shadow bgwhite service3-h flex items-center rounded-5 mrpx20 sm-mrpx1 sm-mbpx10 mbpx30 relative">
                  <div className="plpx20 prpx20 md-plpx10 md-prpx10 sm-plpx10 sm-prpx10 w-full">
                    <img
                      src={e.img}
                      alt="service3-img"
                      className="service3-img object-contain"
                    />
                    <h4 className="fsize20 md-fsize16 sm-fsize16 mtpx12 mbpx1 font-500 textforth">
                      {e.title}
                    </h4>
                    <p className="mtpx8 fsize16 sm-fsize13 md-fsize13 textgray">
                      {e.description}
                    </p>
                  </div>
                  <div className="absolute top-0 right-0 mrpx15 mtpx8">
                    <h5 className="fsize56 mtpx1 mbpx1 textprimary font-600 opacity-8">{e.number}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Service;
