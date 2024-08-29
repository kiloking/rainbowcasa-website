import React from "react";

function Header() {
  return (
    <div className="w-full h-[50vh] bg-[#3C1743] relative lg:min-h-screen">
      <div
        className="inset-0 lg:h-screen absolute  bg-center bg-no-repeat bg-cover  z-0  "
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/images/release/header_bg.png"
          })`,
        }}
        data-aos="fade"
        data-aos-duration="1500"
      ></div>

      <div className="w-[50%]  md:w-[45%] absolute top-[13%] left-[12%]  mx-auto">
        <img
          src={process.env.PUBLIC_URL + "/images/release/header_title.png"}
          alt=""
          className="max-w-full mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </div>
      <div className=" w-[60%]  md:w-[37%] absolute bottom-0 right-[8%]  mx-auto">
        <img
          src={process.env.PUBLIC_URL + "/images/release/header_p01.png"}
          alt=""
          className="max-w-full mx-auto"
          data-aos="fade"
          data-aos-duration="1500"
        />
      </div>
    </div>
  );
}

export default Header;
