import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
function Section02() {
  const imgs = [{ image: "section02_p01.png" }, { image: "section02_p02.png" }];
  return (
    <div className=" bg-[#D1C4B2]">
      <div className="flex items-center">
        <div className="w-1/2 py-[12%] pl-[12%] pr-[5%]">
          <img
            src={process.env.PUBLIC_URL + "/images/release/section02_title.png"}
            alt=""
          />
        </div>
        <div className="w-1/2">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="w-full"
          >
            {imgs.map((item, index) => {
              return (
                <SwiperSlide key={item.image}>
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/release/" + item.image
                    }
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="w-full">
        <img
          src={process.env.PUBLIC_URL + "/images/release/section02_p03.png"}
          alt=""
          className="w-full"
        />
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "/images/release/section02_c01.png"}
          alt=""
          className="max-w-full w-1/3 ml-auto"
        />
      </div>
    </div>
  );
}

export default Section02;
