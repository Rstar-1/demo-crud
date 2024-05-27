import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/swiper.min.css";
import ReactStars from "react-stars";

const Testimonial = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="ptpx60 pbpx60 md-ptpx30 md-pbpx30 sm-ptpx20 sm-pbpx20 bg-fa">
      <div className="container mx-auto">
        <div className="flex sm-block justify-between items-center w-full">
          <div className="w-50 sm-w-full">
            <p className="fsize17 md-fsize14 sm-fsize13 textprimary font-600">
              Our Portfolio
            </p>
            <h5 className="fsize33 mtpx1 mbpx1 md-fsize22 sm-fsize20 textdark">
              Testimonial
            </h5>
            <p className="fsize17 mtpx10 md-fsize16 sm-fsize14 textgray">
              “Artha embodies the spirit of meaning which we bring to your he
              spirit of meaning which start-up.
            </p>
          </div>
          <div className="w-50 sm-w-full">
            <Swiper
              grabCursor={true}
              className="mySwiper p10"
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                1536: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                991: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
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
                <div className="d-shadow bgwhite rounded-10 testimonial1-h prpx20 plpx20 ptpx20 pbpx20">
                  <p className="fsize17 md-fsize16 sm-fsize14 textgray">
                    “Artha spirit of meaning embodies the spirit of meaning
                    which we bring to your he spirit of meaning which spirit of
                    meaning start-up.
                  </p>
                  <div className="flex items-center gap-4 mtpx20">
                    <img
                      src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.11587255197607083.png-YswS1JxwyDRsIdvvw5YUl-1710012463"
                      alt="testimonial1-img"
                      className="testimonial1-img object-contain"
                    />
                    <div className="mlpx10">
                      <h4 className="fsize20 sm-text-left md-text-left text-center md-fsize16 sm-fsize14 mtpx1 mbpx1 textdark">
                        Bhavin Patel - Lenden Club
                      </h4>
                      <ReactStars count={5} size={24} color2={"#ffd700"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="d-shadow bgwhite rounded-10 testimonial1-h prpx20 plpx20 ptpx20 pbpx20">
                  <p className="fsize17 md-fsize16 sm-fsize14 textgray">
                    “Artha spirit of meaning embodies the spirit of meaning
                    which we bring to your he spirit of meaning which spirit of
                    meaning start-up.
                  </p>
                  <div className="flex items-center gap-4 mtpx20">
                    <img
                      src="https://nexuscluster.blob.core.windows.net/server01/artha-venture-fund/undefined/0.11587255197607083.png-YswS1JxwyDRsIdvvw5YUl-1710012463"
                      alt="testimonial1-img"
                      className="testimonial1-img object-contain"
                    />
                    <div className="mlpx10">
                      <h4 className="fsize20 sm-text-left md-text-left text-center md-fsize16 sm-fsize14 mtpx1 mbpx1 textdark">
                        Raj Patel - Lenden Club
                      </h4>
                      <ReactStars count={5} size={24} color2={"#ffd700"} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
