import React from "react";


const SectionTitle = ({ title, subtitle, description }) => (
  <article className="flex flex-col text-4xl font-light text-neutral-100 max-md:max-w-full">
    <h2 className="text-base max-md:max-w-full">{title}</h2>
    <h3 className="font-semibold max-md:max-w-full">{subtitle}</h3>
    <p className="max-md:max-w-full">{description}</p>
    <div className="max-w-full h-1 bg-violet-500 w-[275px]" />
  </article>
);

const AboutUsSection = () => (
  <main className="flex flex-col justify-center px-16 py-9 bg-black max-md:px-5 top-10">
    <header className="mx-10 mt-20 max-md:mt-10 max-md:mr-2.5">
      <section className="flex gap-5 max-md:flex-col max-md:gap-0">
        <aside className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <SectionTitle
            title="About Us"
            subtitle="Tailored IT Solutions in Riyadh"
            description="Approach to Cost-Effectiveness"
          />
          <button
            type="button"
            className="justify-center self-start px-7 py-5 mt-36 text-lg font-medium text-white whitespace-nowrap bg-indigo-600 rounded-xl max-md:px-5 max-md:mt-10 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2"
          >
            Explore Services
          </button>
        </aside>
        <article className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <p className="text-xl font-light text-stone-300 max-md:mt-10 max-md:max-w-full">
            We aspire to be the premier IT solutions facilitator in the Kingdom, connecting clients with specialized expertise while maintaining operational agility and cost-effectiveness. <br /><br />
            Headquartered in Riyadh, Kingdom of Saudi Arabia, Level Five is committed to providing innovative, tailored IT solutions by fostering strategic partnerships, leveraging external expertise, and optimizing resource allocation. <br /><br />
            We adopt a lean operating model centered around outsourcing and collaboration with IT consultancy partners, Level Five aims to maximize efficiency, reduce overhead costs, and deliver high-quality solutions to clients in Saudi Arabia.
          </p>
        </article>
      </section>
    </header>
  </main>
);


export default AboutUsSection;