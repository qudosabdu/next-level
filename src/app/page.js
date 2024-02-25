import Image from "next/image";
import LandingPage from "../components/LandingPage";
import Navbar from "../components/Navbar";
import AboutUsSection from "../components/AboutUsSection";
import OurSolutions from "../components/OurSolutions";
import Footer from "@/components/Footer";
import CompanyProfile from "@/components/CompanyProfile";

export default function Home() {
  
  return (
    <>
      <div className="w-full">
        {/* <div className="bg-primaryM absolute w-[579px] h-[579px] top-[350px] -left-72 blur-2xl opacity-25 overflow-hidden rounded-full z-30"></div>
        <div className="bg-primaryM absolute w-[579px] h-[579px] top-[-200px]  -right-64 blur-2xl opacity-30 overflow-hidden rounded-full"></div> */}

        <Navbar />
        <OurSolutions />
        <AboutUsSection />
        <CompanyProfile />
        <Footer />
      </div>
    </>
  );
}
