import React from "react";
import Button from "./Button";
import Image from "next/image";
import footerLogo from "../../public/master_logo.png";

// const SectionTitle = ({ lightText, boldText }) => (
//   <div className="text-4xl font-semibold text-center text-indigo-600">
//     {lightText.map((text, index) => (
//       <span key={index} className="font-light">
//         {text}
//       </span>
//     ))}
//     {boldText.map((text, index) => (
//       <span key={index} className="font-bold text-indigo-600">
//         {text}
//       </span>
//     ))}
//   </div>
// );

const FooterItem = ({ children }) => (
  <div className="flex gap-5 justify-between self-stretch px-px py-1.5 my-auto text-lg text-center">
    {children}
  </div>
);

function Footer() {
  // const sectionTitleLightText = ["Start your", "with", "in just a few clicks"];
  // const sectionTitleBoldText = ["new project", "LevelFive", "!!!"];

  return (
    <>
      <header className="flex flex-col self-center px-5 max-w-full text-center py-10">
        <section className="flex flex-col justify-center max-md:max-w-full ">
          <div className="text-4xl font-semibold text-center text-indigo-600">
            <span className="font-light text-white">Start your</span>
            <span className="font-bold text-indigo-600"> new project</span>
            <br />
            <span className="font-light text-white"> with</span>
            <span className="font-bold text-indigo-600"> LevelFive</span>
            <span className="font-light text-white">
              {" "}
              in just a few clicks!!!
            </span>
          </div>
          <p className="self-center mt-4 text-xl font-light whitespace-nowrap text-stone-300">
            Book a free call and let’s see if we’re a good fit
          </p>

          <Button
            title="Book an Appointment"
            className="justify-center self-center px-6 py-4 mt-11 text-2xl font-medium text-white whitespace-nowrap max-md:px-5 max-md:mt-10"
          />
        </section>
        <p className="self-center mt-24 text-xl font-light text-stone-300 max-md:mt-10 max-md:max-w-full">
          Please drop us on our email:{" "}
          <span className="font-medium">connect@Level5.com.sa</span>
        </p>
      </header>
      <footer className="flex flex-col justify-center px-16 py-9 mt-40 w-full border-solid bg-zinc-950 border-t-[0.5px] border-t-[color:var(--Secondary-M,#C5C5C5)] text-white text-opacity-70 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <section className="flex gap-5 justify-between items-center mr-10 ml-10 max-md:flex-wrap max-md:mr-2.5 max-md:max-w-full">
          <Image
            loading="lazy"
            src={footerLogo}
            className="self-stretch max-w-full aspect-[4.17] w-[238px]"
            alt="LevelFive Logo"
            width={238}
            height={59}
          />
          <FooterItem>
            <div>Support</div>
            <div className="flex-auto">Privacy Policy</div>
            <div className="grow whitespace-nowrap">Terms and Conditions</div>
          </FooterItem>
          <div className="flex-auto self-stretch my-auto text-base tracking-tight leading-10 text-right">
            © 2024 LevelFive, All Rights Reserved
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
