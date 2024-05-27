import React from "react";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="w-full bgtertiary ptpx40 pbpx40 sm-ptpx20 sm-pbpx20">
      <div className="flex sm-block justify-between gap-12 container mx-auto">
        <div className="w-20 md-w-30 sm-w-full">
          <img src={logo} alt="logo" className="footerimg object-contain" />
        </div>
        <div className="w-80 md-w-70 sm-w-full mlpx50 md-mlpx20 sm-mlpx1">
          <div className="grid-cols-4 md-grid-cols-2 sm-grid-cols-1 gap-12">
            <div className="sm-mtpx15">
              <h6 className="fsize19 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                Know More
              </h6>
              <hr className="foot-hr" />
              <div className="mtpx20 mtpx8  ">
                <NavLink to="/blogs">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    Blog
                  </p>
                </NavLink>
                <NavLink to="/about">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    About Us
                  </p>
                </NavLink>
                <NavLink to="/connect">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    Connect
                  </p>
                </NavLink>
                <NavLink to="/gallery">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    Gallery
                  </p>
                </NavLink>
              </div>
            </div>

            <div className="sm-mtpx15">
              <h6 className="fsize19 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                Our Services
              </h6>
              <hr className="foot-hr" />
              <div className="mtpx20 mtpx8">
                <NavLink to="/plans">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    Plans
                  </p>
                </NavLink>
                <NavLink to="/elearning">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    Elearning
                  </p>
                </NavLink>
                <NavLink to="/ecommerce">
                  <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                    Ecommerce
                  </p>
                </NavLink>
              </div>
            </div>

            <div className="sm-mtpx15">
              <h6 className="fsize19 sm-fsize18 mtpx5 mbpx1 textwhite font-500">
                Help & Support
              </h6>
              <hr className="foot-hr" />
              <div className="mtpx20 mtpx8  ">
                <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  Privacy Policy
                </p>
                <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  Terms & Conditions
                </p>
                <p className="fsize15 sm-fsize12 textwhite mtpx5 mbpx1 font-500">
                  FAQ
                </p>
              </div>
            </div>

            <div className="sm-mtpx15">
              <h6 className="fsize19 sm-fsize20 mtpx5 mbpx1 textwhite font-500">
                Connect Us
              </h6>
              <hr className="foot-hr" />
              <div className="flex items-center gap-9 mtpx20 mtpx8  ">
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="instagram"
                    size="18"
                    className="textwhite"
                  />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="linkedin"
                    size="18"
                    className="textwhite"
                  />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon icon="mail" size="18" className="textwhite" />
                </div>
                <div className="social-foot sm-mlpx6 flex items-center justify-center bgprimary">
                  <FeatherIcon
                    icon="facebook"
                    size="18"
                    className="textwhite"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
