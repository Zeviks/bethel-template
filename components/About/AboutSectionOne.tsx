import SectionHeading from "../SectionHeading";

const AboutSectionOne = () => {
  return (
    <section id="about" className="my-10 sm:my-12 md:my-16 lg:my-20">
      <SectionHeading heading="Our Mission" />
      <div className="container mx-auto mt-8 sm:mt-10 md:mt-12 lg:flex lg:flex-row">
        <h2 className="mb-4 text-center text-3xl font-semibold tracking-wider text-dark lg:mb-0 lg:text-left lg:text-4xl xl:text-3xl 2xl:text-4xl">
          A promise to teach the truth and nothing but the truth.
        </h2>
        <p className="mt-4 text-center text-base font-light lg:ml-6 lg:text-left lg:text-xl xl:text-lg 2xl:text-xl">
          Every believer was created to belong to a community. It was never
          God’s heart for us to do this life alone.
        </p>
      </div>
    </section>
  );
};

export default AboutSectionOne;
