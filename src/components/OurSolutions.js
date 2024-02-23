import React from 'react';
import Image from 'next/image';

function ServiceCard({ serviceName, serviceDescription, imgUrl, altText, learnMoreUrl }) {
  return (
    <div className="flex flex-col px-7 pt-12 pb-7 bg-indigo-600 rounded-md shadow-2xl max-md:px-5">
      <div className="flex flex-col">
        <div className="flex flex-col text-xl font-bold text-stone-300">
          <Image src={imgUrl} alt={altText} width="89" height="86" />
          <div className="mt-5">
            <span>{serviceName}</span>
          </div>
        </div>
        <div className="mt-4 font-mono text-sm tracking-wide text-white">
          {serviceDescription}
        </div>
        <div className="mt-8 text-base font-semibold text-zinc-950">
          <a href={learnMoreUrl}>Learn More...</a>
        </div>
      </div>
    </div>
  );
}

function OurSolutions() {
  const services = [
    {
      serviceName: "IT Services",
      serviceDescription: "Collaboratively administrate turnkey channels whereas virtual e-tailers.",
      imgUrl: "/images/IT_Services_Icon.png",
      altText: "IT Services Icon",
      learnMoreUrl: "#"
    },
    {
      serviceName: "Data Center & Cloud Services",
      serviceDescription: "Objectively seize scalable metrics whereas proactive e-services.",
      imgUrl: "/images/Data_Center_Cloud_Services_Icon.png",
      altText: "Data Center & Cloud Services Icon",
      learnMoreUrl: "#"
    },
    {
      serviceName: "Emerging Technologies",
      serviceDescription: "Seamlessly empower fully researched growth strategies.",
      imgUrl: "/images/Emerging_Technologies_Icon.png",
      altText: "Emerging Technologies Icon",
      learnMoreUrl: "#"
    }
  ];

  return (
    <section className="flex flex-col py-12 pl-20 bg-zinc-900 max-md:pl-5">
      <header className="flex flex-col mt-20 ml-5 w-full text-2xl font-light text-neutral-100 max-md:mt-10">
        <h1>Our Solutions & Service Offering</h1>
        <p>End-to-End Solutions for You</p>
        <div className="h-1 bg-violet-500 w-[255px]" />
      </header>
      <main className="ml-5 mt-8">
        <div className="flex gap-5 max-md:flex-col">
          {services.map(service => (
            <ServiceCard
              key={service.serviceName}
              serviceName={service.serviceName}
              serviceDescription={service.serviceDescription}
              imgUrl={service.imgUrl}
              altText={service.altText}
              learnMoreUrl={service.learnMoreUrl}
            />
          ))}
        </div>
      </main>
    </section>
  );
}


export default OurSolutions;