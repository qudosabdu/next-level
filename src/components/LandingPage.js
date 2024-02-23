import React from "react";
import Image from "next/image";
import EmptyLandingLogo from "../../public/LandingLogo.png";
import FilledLandingLogo from "../../public/FilledLandingLogo.png";
import styles from "./FilledImage.module.css";
function LandingPage() {
  return (
    <div className="h-screen">
      <div className="text-center ">
        <div className={`relative transform scale-75 top-40 z-10 `}>
          <Image
            width={1725.6}
            height={297.52}
            src={FilledLandingLogo}
            alt="Logo"
            className={` ${styles.logoContainer}`}
          />

          <Image
            width={1725.6}
            height={297.52}
            src={EmptyLandingLogo}
            alt="EmptyLandingLogo"
            className="z-30 absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
