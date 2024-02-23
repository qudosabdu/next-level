import React from "react";
import Lines from '../../public/lines.png'
import Image from "next/image";

const LineStrip = ({ height, width, bgColor }) => (
  <div style={{ height: height, width: width, backgroundColor: bgColor }}></div>
);

const OurStorySection = () => (
  <section className="flex flex-col my-auto font-light max-md:mt-10 max-md:max-w-full">
    <h2 className="text-4xl text-neutral-100 max-md:max-w-full">
      <span className="text-base max-md:max-w-full">Who we are</span>
      <strong className="font-semibold max-md:max-w-full">
        {" "}
        The Story Behind our Name{" "}
      </strong>
      <p className="max-md:max-w-full">level Five</p>
      <div className="max-w-full h-1 bg-violet-500 w-[302px]" />
    </h2>
    <p className="mt-14 text-xl text-stone-300 max-md:mt-10 max-md:max-w-full">
      Level Five Information Systems Technology Company emerged as a boutique IT
      house with a distinctive story. The choice of “Level Five” was akin to the
      journey through a boutique, where each level represents a curated space of
      expertise. Just as one explores unique offering in a boutique, Level Five
      aspires to deliver specialized and tailored IT solutions at the highest
      level of proficiency.
      <br />
      <br />
      The” Level five” designation reflects the boutique approach – an exclusive
      commitment to excellence, personalization, and attention to detail. Like a
      boutique that carefully selects its inventory, our IT house meticulously
      crafts solutions that cater specifically to the unique needs of each
      client. In this narrative, “Level Five” becomes not just a measure of
      proficiency but a promise of a boutique IT experience, where technology is
      finely curated and elegantly tailored for every client’s journey
    </p>
  </section>
);

function CompanyProfile() {
//   const lineStripsData = [
//     { height: "858px", width: "3px", bgColor: "bg-slate-900" },
//     { height: "826px", width: "1px", bgColor: "bg-indigo-950" },
//     { height: "796px", width: "1.5px", bgColor: "bg-slate-900" },
//     { height: "766px", width: "1px", bgColor: "bg-violet-950" },
//     { height: "732px", width: "3px", bgColor: "bg-indigo-700" },
//     { height: "704px", width: "3px", bgColor: "bg-violet-600" },
//     { height: "672px", width: "1px", bgColor: "bg-indigo-700" },
//     { height: "643px", width: "3px", bgColor: "bg-indigo-900" },
//     { height: "612px", width: "7px", bgColor: "bg-indigo-950" },
//     { height: "580px", width: "3px", bgColor: "bg-indigo-950" },
//     { height: "550px", width: "1px", bgColor: "bg-slate-900" },
//     { height: "519px", width: "1px", bgColor: "bg-slate-900" },
//   ];

  return (
    <main className="flex flex-col ">
      <section className=" self-center w-full max-w-[1571px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <article className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 justify-between items-start px-2 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
              <Image src={Lines}
              width={500}
              height={500}
              />
            </div>
          </article>
          <OurStorySection />
        </div>
      </section>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/55cfc0db335d51eb7bbe8fee795cc6006e9ba795a68f8b1e4beeedffbb4a9737?apiKey=c54fe1b1a9934721bc0cbe496673d9bc&"
        alt="Representational Image"
        className="mt-8 w-full aspect-[5.88] max-md:max-w-full"
      />
    </main>
  );
}

export default CompanyProfile;
