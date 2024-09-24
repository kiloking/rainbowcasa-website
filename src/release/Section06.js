import React from "react";

function Section06() {
  return (
    <div className=" bg-[#D0C3B1]  pt-[5%]">
      <div className="w-[75%] mx-auto">
        <img
          src={process.env.PUBLIC_URL + "/images/release/section06_title.png"}
          alt=""
          data-aos="fade-up"
        />
      </div>
      <div className="w-11/12 mx-auto mt-16 lg:mt-32 relative">
        <img
          src={process.env.PUBLIC_URL + "/images/release/section06_p01.png"}
          alt=""
          className="w-full"
          data-aos="fade"
          data-aos-duration="600"
        />
        <div className=" absolute -top-8 md:-top-20 -left-[50%] md:-left-[20%]">
          <img
            src={process.env.PUBLIC_URL + "/images/release/section06_i1.png"}
            alt=""
            className="w-full"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="500"
          />
        </div>
      </div>
      <div className="w-1/2 md:w-[30%] mx-auto py-4 md:py-10">
        <img
          src={process.env.PUBLIC_URL + "/images/release/section06_title2.png"}
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Section06;
