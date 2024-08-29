import React from "react";

function Section04() {
  return (
    <div className="bg-[#3E1A56] pt-[5%]">
      <div>
        <div className="w-[75%] mx-auto">
          <img
            src={process.env.PUBLIC_URL + "/images/release/section04_title.png"}
            alt=""
          />
        </div>
        <div className="w-[80%] ml-auto py-[5%]">
          <img
            src={process.env.PUBLIC_URL + "/images/release/section04_p01.png"}
            alt=""
            className="w-full"
          />
        </div>
        <div className=" relative">
          <div className=" absolute top-[13%] w-[28%] left-[10%]">
            <img
              src={
                process.env.PUBLIC_URL + "/images/release/section04_text01.png"
              }
              alt=""
              className="w-full"
            />
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/release/section04_p02.png"}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Section04;
