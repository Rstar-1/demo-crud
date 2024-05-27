import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper.min.css";
import FeatherIcon from "feather-icons-react"

const Blog1 = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20">
      <div className="container mx-auto">
        <div className="">
          <Swiper
            grabCursor={true}
            className="mySwiper pbpx10"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1536: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.4,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <div className="">
                <img
                  src="https://html.themeholy.com/haona/demo/assets/img/blog/blog_3_3.jpg"
                  alt="blog2-img"
                  className="blog2-img object-cover flex"
                />
                <div className="z-50 relative minus-blog2 mlpx17 mrpx17">
                  <div className="bgwhite p16 d-shadow ">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <FeatherIcon
                          icon="calendar"
                          size="14"
                          className="flex textprimary"
                        />
                        <p className="fsize13 mtpx2 textdark font-600 mlpx4">
                          12 April 2024
                        </p>
                      </div>
                      <div className="flex items-center mlpx12">
                        <FeatherIcon
                          icon="user"
                          size="14"
                          className="flex textprimary"
                        />
                        <p className="fsize13 mtpx2 textdark font-600 mlpx4">
                          Admin
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <h4 className="fsize18 md-fsize15 sm-fsize14 mtpx5 mbpx1 textdark">
                        Turning your moment into Masterpiece
                      </h4>
                      <p className="mtpx4 font-500 fsize14 sm-fsize14 md-fsize14 textgray">
                        “Artha embodies the spirit of meaning which we bring to
                        your start-up.
                      </p>
                      <div className="flex items-center mtpx6">
                        <p className="fsize14 textdark font-600">Read More</p>
                        <FeatherIcon
                          icon="arrow-right"
                          size="15"
                          className="flex textdark mlpx4 mtpx2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src="https://html.themeholy.com/haona/demo/assets/img/blog/blog_3_2.jpg"
                  alt="blog2-img"
                  className="blog2-img object-cover flex"
                />
                <div className="z-50 relative minus-blog2 mlpx17 mrpx17">
                  <div className="bgwhite p16 d-shadow ">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <FeatherIcon
                          icon="calendar"
                          size="14"
                          className="flex textprimary"
                        />
                        <p className="fsize13 mtpx2 textdark font-600 mlpx4">
                          12 April 2024
                        </p>
                      </div>
                      <div className="flex items-center mlpx12">
                        <FeatherIcon
                          icon="user"
                          size="14"
                          className="flex textprimary"
                        />
                        <p className="fsize13 mtpx2 textdark font-600 mlpx4">
                          Admin
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <h4 className="fsize18 md-fsize15 sm-fsize14 mtpx5 mbpx1 textdark">
                        Turning your moment into Masterpiece
                      </h4>
                      <p className="mtpx4 font-500 fsize14 sm-fsize14 md-fsize14 textgray">
                        “Artha embodies the spirit of meaning which we bring to
                        your start-up.
                      </p>
                      <div className="flex items-center mtpx6">
                        <p className="fsize14 textdark font-600">Read More</p>
                        <FeatherIcon
                          icon="arrow-right"
                          size="15"
                          className="flex textdark mlpx4 mtpx2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src="https://html.themeholy.com/haona/demo/assets/img/blog/blog_3_1.jpg"
                  alt="blog2-img"
                  className="blog2-img object-cover flex"
                />
                <div className="z-50 relative minus-blog2 mlpx17 mrpx17">
                  <div className="bgwhite p16 d-shadow ">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <FeatherIcon
                          icon="calendar"
                          size="14"
                          className="flex textprimary"
                        />
                        <p className="fsize13 mtpx2 textdark font-600 mlpx4">
                          12 April 2024
                        </p>
                      </div>
                      <div className="flex items-center mlpx12">
                        <FeatherIcon
                          icon="user"
                          size="14"
                          className="flex textprimary"
                        />
                        <p className="fsize13 mtpx2 textdark font-600 mlpx4">
                          Admin
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <h4 className="fsize18 md-fsize15 sm-fsize14 mtpx5 mbpx1 textdark">
                        Turning your moment into Masterpiece
                      </h4>
                      <p className="mtpx4 font-500 fsize14 sm-fsize14 md-fsize14 textgray">
                        “Artha embodies the spirit of meaning which we bring to
                        your start-up.
                      </p>
                      <div className="flex items-center mtpx6">
                        <p className="fsize14 textdark font-600">Read More</p>
                        <FeatherIcon
                          icon="arrow-right"
                          size="15"
                          className="flex textdark mlpx4 mtpx2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src="https://html.themeholy.com/haona/demo/assets/img/blog/blog_3_2.jpg"
                  alt="blog2-img"
                  className="blog2-img object-cover flex"
                />
                <div className="z-50 relative minus-blog2 mlpx17 mrpx17">
                  <div className="bgwhite p16 d-shadow ">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <FeatherIcon
                          icon="calendar"
                          size="14"
                          className="flex textprimary"
                        />
                        <p className="fsize13 mtpx2 textdark font-600 mlpx4">
                          12 April 2024
                        </p>
                      </div>
                      <div className="flex items-center mlpx12">
                        <FeatherIcon
                          icon="user"
                          size="14"
                          className="flex textprimary"
                        />
                        <p className="fsize13 mtpx2 textdark font-600 mlpx4">
                          Admin
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <h4 className="fsize18 md-fsize15 sm-fsize14 mtpx5 mbpx1 textdark">
                        Turning your moment into Masterpiece
                      </h4>
                      <p className="mtpx4 font-500 fsize14 sm-fsize14 md-fsize14 textgray">
                        “Artha embodies the spirit of meaning which we bring to
                        your start-up.
                      </p>
                      <div className="flex items-center mtpx6">
                        <p className="fsize14 textdark font-600">Read More</p>
                        <FeatherIcon
                          icon="arrow-right"
                          size="15"
                          className="flex textdark mlpx4 mtpx2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
