import SectionHeading from "../SectionHeading";

const MissionHeading = () => {
  return (
    <section id="our-mission" className="my-10 sm:my-12 md:my-16 lg:my-20">
      <SectionHeading heading="Our Mission" />
      <div className="container mx-auto mt-8 sm:mt-10 md:mt-12">
        <div className="container static flex flex-wrap items-center justify-evenly text-4xl font-semibold text-white">
          <span className="mb-5 w-full border-b-2 border-primary text-dark sm:w-auto">
            Love God.
          </span>
          <span className="mb-5 w-full border-b-2 border-primary text-dark sm:w-auto">
            Discover the Truth.
          </span>
          <span className="mb-5 w-full border-b-2 border-primary text-dark sm:w-auto">
            Show Compassion.
          </span>
          <span className="mb-5 w-full border-b-2 border-primary text-dark sm:w-auto">
            Learn Your Purpose.
          </span>
        </div>
      </div>
    </section>
  );
};

export default MissionHeading;

{
  /* <div className="flex flex-col lg:flex-row">
  <h2 className="mb-4 text-center text-3xl font-semibold tracking-tight text-dark lg:mb-0 lg:text-left lg:text-4xl xl:text-3xl 2xl:text-4xl">
    A promise to teach the truth and nothing but the truth.
  </h2>
  <p className="mt-4 text-center text-base font-light lg:ml-6 lg:text-left lg:text-xl xl:text-lg 2xl:text-xl">
    Every believer was created to belong to a community. It was never
    God’s heart for us to do this life alone.
  </p>
</div> */
}
