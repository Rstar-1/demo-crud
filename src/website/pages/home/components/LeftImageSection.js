import React from "react";
import FeatherIcon from "feather-icons-react";

const LeftImageSection = () => {
  return (
    <div className="ptpx60 pbpx60 md-ptpx20 md-pbpx20 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="flex sm-block w-full items-center">
          <div className="w-50 sm-w-full prpx20 md-prpx9 sm-prpx1">
            <img
              src="https://html.themexriver.com/it-firm/images/resource/banner.png"
              className="w-full leftabout9-img object-contain"
              alt="leftabout9-img"
            />
          </div>
          <div className="w-50 sm-w-full plpx20 md-plpx1 sm-plpx1 sm-mtpx20">
            <div className="bgwhite d-shadow prpx25 plpx25 rounded-20 ptpx7 pbpx7 w-max">
              <p className="sm-fsize13 textprimary font-600 fsize16">
                About Our Company
              </p>
            </div>
            <h4 className="fsize33 md-fsize23 sm-fsize21 mtpx10 mbpx1 textdark">
              Choose The Best IT Service Company
            </h4>
            <p className="mtpx17 sm-mtpx10 fsize16 sm-fsize14 md-fsize14 textgray borderside ptpx5 pbpx5 plpx15">
              We spot, invest, and nurture passionate founders obsessed with
              solving the challenges of Indian consumers and businesses. We
              spot, invest, and nurture.
            </p>
            <div className="grid-cols-2 sm-grid-cols-1 mtpx25 sm-mtpx14 bordb bordh pbpx20 ptpx20">
              <div className="flex items-center prpx8">
                <img
                  src="https://html.themexriver.com/it-firm/images/icons/about-1.png"
                  alt="leftsecondabout9-img"
                  className="leftsecondabout9-img object-contain"
                />
                <div className="mlpx8">
                  <h5 className="fsize20 md-fsize18 sm-fsize16 textdark mtpx1 mbpx1 font-600">
                    Moneyback Gurentee
                  </h5>
                </div>
              </div>
              <div className="flex items-center prpx8 sm-mtpx10">
                <img
                  src="https://html.themexriver.com/it-firm/images/icons/about-2.png"
                  alt="leftsecondabout9-img"
                  className="leftsecondabout9-img object-contain"
                />
                <div className="mlpx8">
                  <h5 className="fsize20 md-fsize18 sm-fsize16 textdark mtpx1 mbpx1 font-600">
                    Moneyback Gurentee
                  </h5>
                </div>
              </div>
            </div>
            <div className="flex sm-block items-center mtpx25 sm-mtpx14">
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx12 pbpx12 md-ptpx8 md-pbpx8 sm-ptpx6 sm-pbpx6 md-plpx20 md-prpx20 sm-plpx16 sm-prpx16 plpx35 prpx35 fsize16 sm-fsize13 bgprimary">
                Know More
              </button>
              <div className="flex items-center mlpx25 md-mlpx15 sm-mlpx1 sm-mtpx20">
                <div className="callcircle border-primary rounded-full flex items-center justify-center">
                  <FeatherIcon icon="phone" size="20" className="textprimary" />
                </div>

                <div className="mlpx8">
                  <p className="sm-fsize13 textgray font-600 fsize14">
                    Call for help
                  </p>
                  <h5 className="fsize20 md-fsize16 sm-fsize16 textdark mtpx1 mbpx1 font-600">
                    91 124 3467 2345
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftImageSection;
