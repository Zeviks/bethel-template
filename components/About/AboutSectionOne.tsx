import Image from "next/image";
import SectionHeading from "../SectionHeading";

const AboutSectionOne = () => {
  return (
    <section id="about" className="">
      <SectionHeading heading="Our Mission" />
      <div className="container mt-10 flex w-full items-center justify-between">
        <h2 className=" text-4xl font-semibold text-dark">
          A promise to teach the truth <br /> and nothing but the truth.
        </h2>
        <p className="text-xl font-light">
          Every believer was created to belong to a community. <br />
          It was never God’s heart for us to do this life alone.
        </p>
      </div>
    </section>
  );
};

export default AboutSectionOne;
