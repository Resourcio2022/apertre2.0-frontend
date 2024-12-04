import React from "react";
import Image from "next/image";
const aboutus = () => {
  return (
    <div className="w-full min-h-screen flex flex-col  p-20  bg-aboutus text-white font-Poppins">
      <span className="text-nowrap text-2xl md:text-6xl font-mokoto text-textyellow text-left mb-10">
        About Apertre 2.0
      </span>
      <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-10 ">
        <div className="flex flex-col gap-5 ">
          <span className="text-white text-lg md:text-xl font-normal">
            We are back with the season 2 of{" "}
            <span className="text-textyellow">Apertre</span> - the open source
            contribution event. Organized by Resourcio Community and Google
            Developer Group On Campus Academy Of Technology, it aims on
            enhancing your technical skills. Noob or Pro, all are welcomed. Join
            us to sky rocket your experience, portfolio and career.
          </span>
          <div className="border-t-2 border-b-2 border-textyellow border-opacity-30 py-7 border-dashed">
            <span className="text-white text-sm md:text-lg font-normal">
              “When we have welcoming communities of contributors, open source
              software gets better and more useful to everyone.” -{" "}
              <span className="text-textyellow">Limor Fried</span>
            </span>
          </div>
        </div>
        <Image
          src="/about.svg"
          width={445}
          height={382}
          alt="logo"
          className="justify-end ml-auto"
        />
      </div>
    </div>
  );
};

export default aboutus;
