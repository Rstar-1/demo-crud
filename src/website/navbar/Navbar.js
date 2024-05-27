import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sidebarshow, setsidebarshow] = useState(false);
  const NavMenu = [
    {
      icon: "home",
      name: "Home",
      route: "home",
    },
    {
      icon: "user",
      name: "About Us",
      route: "about",
    },
    {
      icon: "settings",
      name: "Service",
      route: "service",
    },
    {
      icon: "folder",
      name: "Blogs",
      route: "blogs",
    },
    {
      icon: "grid",
      name: "Gallery",
      route: "gallery",
    },
    {
      icon: "phone-call",
      name: "Connect Us",
      route: "connect",
    },
  ];

  return (
    <div className="navbar">
      <div
        className={
          sidebarshow === true
            ? "bg-glass-nav fixed hidden h-100 md-block sm-block z-99 navview"
            : "bg-glass-nav fixed hidden h-100 md-block sm-block z-99 navhide"
        }
      >
        <div className="bgwhite w-90 md-w-40 h-100 absolute right-0 top-0">
          <div className="bgprimary p10">
            <div className="flex items-center justify-between gap-4 plpx10 prpx10">
              <p className="fsize16 textwhite mtpx4 mbpx4 cursor-pointer font-500">
                RS Developers
              </p>
              <FeatherIcon
                icon="x"
                className="textwhite cursor-pointer"
                size={17}
                onClick={() => setsidebarshow(false)}
              />
            </div>
          </div>
          <div className="mtpx20">
            {NavMenu.map((e) => (
              <>
                <div className="plpx20 prpx20 mbpx25">
                  <NavLink
                    to={e.route}
                    activeClass="active"
                    className="fsize15 textforth flex items-center gap-8 cursor-pointer"
                  >
                    <FeatherIcon icon={e.icon} size={16} />
                    <p className="my-0 mlpx6" onClick={() => setsidebarshow(false)}>
                      {e.name}
                    </p>
                  </NavLink>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full ptpx4 pbpx4 md-ptpx1 md-pbpx1 bgwhite sm-ptpx1 sm-pbpx1">
        <div className="flex justify-between items-center container mx-auto">
          <div className="">
            <NavLink to="/">
              <img src={logo} alt="logo" className="object-contain nav-logo" />
            </NavLink>
          </div>
          <div className="flex justify-center gap-5 items-center md-hidden sm-hidden">
            {NavMenu.map((e) => (
              <>
                <NavLink
                  activeClass="active"
                  className="fsize17 font-500 mlpx16 mrpx16 activetext cursor-pointer"
                  to={e.route}
                >
                  {e.name}
                </NavLink>
              </>
            ))}
          </div>
          <div className="hidden md-block sm-block">
            <div className="bg-light-primary sidebar-icon justify-center items-center flex">
              <FeatherIcon
                icon="align-justify"
                className="textprimary"
                size={25}
                onClick={() => setsidebarshow(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
