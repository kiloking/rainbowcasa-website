import React from "react";

function Section01() {
  return (
    <div className=" relative w-full">
      <div className="  w- absolute top-[8%] left-1/2 -translate-x-1/2   mx-auto">
        <img
          src={process.env.PUBLIC_URL + "/images/release/section01_title.png"}
          alt=""
          className="max-w-full mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
      <img
        src={process.env.PUBLIC_URL + "/images/release/section01_bg.png"}
        alt=""
        className="w-full"
      />
    </div>
  );
}

export default Section01;
