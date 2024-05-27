import React from "react";
import FeatherIcon from "feather-icons-react";

const ConnectForm = () => {
  return (
    <div className="bgwhite ptpx60 pbpx60 sm-ptpx30 sm-pbpx30 bg-fa">
      <div className="container mx-auto">
        <div className="w-50 sm-w-full">
          <h4 className="fsize30 sm-fsize20 font-600 mtpx1 mbpx1 textprimary">
            Connect Us
          </h4>
          <p className="mtpx16 font-500 fsize17 sm-fsize14">
            65/73, C.P. Tank Road, Habib Building, Mumbai-400004, Maharashtra,
            India
          </p>
          <div>
            <div className="flex items-center mtpx30 sm-mtpx15">
              <FeatherIcon icon="map-pin" size="20" className="textprimary" />
              <p className="font-500 fsize17 sm-fsize14 textforth mlpx10">
                36, Apollo Court, LE2 0TQ, Leicester, UK.
              </p>
            </div>
            <div className="flex items-center mtpx20 sm-mtpx15">
              <FeatherIcon icon="mail" size="20" className="textprimary" />
              <a href="mailto:krishienggworks@gmail.com">
                <p className="font-500 fsize17 sm-fsize14 textforth mlpx10">
                  krishienggworks@gmail.com
                </p>
              </a>
            </div>
            <div className="flex items-center mtpx20 sm-mtpx15">
              <FeatherIcon icon="phone" size="20" className="textprimary" />
              <a href="tel:+91 99305 12803">
                <p className="font-500 fsize17 sm-fsize14 textforth mlpx10">
                  +91 99305 12803
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="mtpx50">
          <iframe
            className="border-0 w-full"
            title="map"
            height={350}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectForm;
