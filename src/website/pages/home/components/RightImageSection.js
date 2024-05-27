import React, { useState } from "react";

const RightImageSection = () => {
  const [check, setcheck] = useState(1);
  const abouttab = [
    {
      id: 1,
      name: "Our Vision",
    },
    {
      id: 2,
      name: "Our Mission",
    },
    {
      id: 3,
      name: "Our Value",
    },
  ];
  return (
    <div className="ptpx60 pbpx70 md-ptpx30 md-pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-flex-column-reverse w-full items-center">
          <div className="w-50 sm-w-full sm-mtpx30 prpx20 md-prpx9 sm-prpx1">
            <div className="flex items-center">
              <p className="sm-fsize13 textdark font-600 fsize16">About Us</p>
              <img
                src="https://html.themexriver.com/it-firm/images/icons/separator.png"
                alt="rightfifthabout5-img"
                className="rightfifthabout5-img mlpx5 mbpx2 object-contain"
              />
            </div>
            <h4 className="fsize35 md-fsize23 sm-fsize21 mtpx1 mbpx1 textdark">
              Choose The Best IT Service{" "}
              <span className="textprimary mlpx4">Company</span>
            </h4>
            <p className="mtpx17 sm-mtpx10 fsize16 sm-fsize13 md-fsize14 textdark font-600 uppercase">
              We spot, invest, and nurture obsessed with solving the challenges
              of Indian consumers and businesses.
            </p>
            <div className="mtpx29 md-mtpx15">
              <div className="flex items-center">
                {abouttab.map((e) => (
                  <p
                    className={
                      check === e.id
                        ? "fsize16 md-fsize14 sm-fsize13 font-600 tababoutline plpx20 prpx20 md-plpx10 md-prpx10 sm-plpx8 sm-prpx8 pbpx8 cursor-pointer"
                        : "fsize16 md-fsize14 sm-fsize13 font-600 textdark plpx20 prpx20 md-plpx10 md-prpx10 sm-plpx8 sm-prpx8 pbpx8 cursor-pointer"
                    }
                    onClick={() => setcheck(e.id)}
                  >
                    {e.name}
                  </p>
                ))}
              </div>
              {check === 1 ? (
                <>
                  <p className="mtpx12 fsize16 sm-fsize13 md-fsize14 textgray">
                    We spot, invest, and nurture passionate founders obsessed
                    with solving the challenges of Indian consumers and
                    businesses. We spot, invest, and nurture passionate founders
                    obsessed with solving the challenges of Indian consumers and
                    businesses.
                  </p>
                </>
              ) : null}
              {check === 2 ? (
                <>
                  <p className="mtpx12 fsize16 sm-fsize13 md-fsize14 textgray">
                    We spot, invest, and nurture passionate founders obsessed
                    with solving the challenges of Indian consumers and
                    businesses. We spot, invest, and nurture passionate founders
                    businesses.
                  </p>
                </>
              ) : null}
              {check === 3 ? (
                <>
                  <p className="mtpx12 fsize16 sm-fsize13 md-fsize14 textgray">
                    We spot, invest, and nurture passionate founders obsessed
                    with solving the challenges of Indian consumers and founders
                    obsessed with solving the challenges of Indian consumers and
                    businesses. We spot, invest, and nurture passionate founders
                    obsessed with solving the challenges of Indian consumers and
                    businesses.
                  </p>
                </>
              ) : null}
            </div>
          </div>
          <div className="w-50 sm-w-full  plpx20 md-plpx9 sm-plpx1">
            <div className="relative">
              <img
                src="https://html.themexriver.com/it-firm/images/background/pattern-45.png"
                className="w-full rightabout5-img object-contain rounded-10"
                alt="rightabout5-img"
              />
              <div className="center-absolute w-70 md-w-90 sm-w-90 absolute z-30">
                <img
                  src="https://html.themexriver.com/it-firm/images/resource/about-4.jpg"
                  className="w-full rightsecondabout5-img object-cover rounded-10"
                  alt="rightsecondabout5-img"
                />
                <div className="absolute bottom-0 left-0 flex justify-center">
                  <div className="bgwhite p10 cardabout-bottom w-80 sm-w-90 flex items-center">
                    <img
                      src="https://html.themexriver.com/it-firm/images/icons/award.png"
                      className="rightthirdabout5-img object-contain rounded-10"
                      alt="rightthirdabout5-img"
                    />
                    <div className="mlpx8">
                      <h4 className="fsize18 md-fsize16 sm-fsize14 mtpx1 mbpx1 textdark">
                        Best Awarded Company
                      </h4>
                      <p className="fsize13 sm-fsize12 textgray">
                        We adapt our delivery to the way your work, whether as
                        an external provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 z-50">
                <div className="rounded-5 float-card p15">
                  <h5 className="fsize36 md-fsize24 sm-fsize18 textwhite mtpx1 mbpx1 font-600">
                    12
                  </h5>
                  <p className="fsize16 md-fsize14 sm-fsize13 textwhite">
                    years of experiences
                  </p>
                </div>
                <img
                  src="https://html.themexriver.com/it-firm/images/icons/about-dots.png"
                  alt="rightforthabout5-img"
                  className="rightforthabout5-img absolute top-0 right-0 m9"
                />
              </div>
              <div className="absolute bottom-0 right-0 z-10">
                <img
                  src="https://html.themexriver.com/it-firm/images/background/pattern-13.png"
                  alt="rightsixthabout5-img"
                  className="rightsixthabout5-img sm-object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImageSection;
