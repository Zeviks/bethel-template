import SectionHeading from "../SectionHeading";

const AboutSectionOne = () => {
  return (
    <section id="about" className="my-20">
      <SectionHeading heading="Our Mission" />
      <div className="container mx-auto mt-10 flex flex-col items-center justify-between lg:flex-row">
        <h2 className="mb-6 text-center text-4xl font-semibold text-dark lg:mb-0 lg:text-left lg:text-5xl">
          A promise to teach the truth <br className="lg:hidden" /> and nothing
          but the truth.
        </h2>
        <p className="text-center text-xl font-light lg:text-left lg:text-2xl">
          Every believer was created to belong to a community.{" "}
          <br className="lg:hidden" />
          It was never God’s heart for us to do this life alone.
        </p>
      </div>
    </section>
  );
};

export default AboutSectionOne;
