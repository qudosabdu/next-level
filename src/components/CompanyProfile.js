import React from "react";
import Lines from "../../public/lines.png";
import Image from "next/image";

import Button from "./Button";
import master_logo_footer from "../../public/FooterLogo.png";

function CompanyProfile() {
  return (
    <div className="flex flex-col px-20  bg-black text-white max-md:px-5 z-0">
      <div className="justify-center mt-44 ml-5 max-md:mt-10 max-md:max-w-full z-20">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="mt-24 text-sm md:text-xl text-white  max-md:mt-10 max-md:max-w-full">
              <Image src={Lines} alt="Lines" className="max-md:hidden " />
            </div>
          </div>
          <div className="flex flex-col w-1/2 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow md:text-4xl font-light text-white  max-md:mt-10 max-md:max-w-full ">
              <div className="text-base max-md:max-w-full">Who we are</div>
              <div className=" text-lg font-semibold text-white max-md:max-w-full sm:text-xl lg:text-3xl">
                The Story Behind our Name
              </div>
              <div className="max-md:max-w-full">level Five</div>
              <div className="max-w-full h-1 bg-violet-500 w-[60px] md:w-[120px]" />
              <div className="mt-20  md:text-xl max-md:mt-10 max-md:max-w-full">
                Level Five Information Systems Technology Company emerged as a
                boutique IT house with a distinctive story. The choice of “Level
                Five” was akin to the journey through a boutique, where each
                level represents a curated space of expertise. Just as one
                explores unique offering in a boutique, Level Five aspires to
                deliver specialized and tailored IT solutions at the highest
                level of proficiency.
                <br />
                <br />
                The” Level five” designation reflects the boutique approach – an
                exclusive commitment to excellence, personalization, and
                attention to detail. Like a boutique that carefully selects its
                inventory, our IT house meticulously crafts solutions that cater
                specifically to the unique needs of each client. In this
                narrative, “Level Five” becomes not just a measure of
                proficiency but a promise of a boutique IT experience, where
                technology is finely curated and elegantly tailored for every
                client’s journey
              </div>
              <Button
                title="Explore Services"
                className=" text-sm hidden sm:block py-4"
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        loading="lazy"
        src={master_logo_footer}
        alt="edge"
        className="max-md:hidden max-md:mt-10 max-md:max-w-full max-md:ml-0 max-md:w-full z-30"
      />
      <div className="bg-primaryM absolute  md:w-[500px] md:h-[500px] top-[3200px] -right-0 blur-2xl opacity-25 overflow-hidden rounded-full z-20"></div>
    </div>
  );
}

export default CompanyProfile;
