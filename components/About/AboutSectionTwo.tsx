import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="static flex flex-wrap items-center justify-evenly text-4xl font-semibold text-white">
        <span className="mb-4 w-full border-b-2 border-primary sm:mx-4 sm:mb-0 sm:w-auto">
          Love God.
        </span>
        <span className="mb-4 w-full border-b-2 border-primary sm:mx-4 sm:mb-0 sm:w-auto">
          Discover the Truth.
        </span>
        <span className="mb-4 w-full border-b-2 border-primary sm:mx-4 sm:mb-0 sm:w-auto">
          Show Compassion.
        </span>
        <span className="mb-4 w-full border-b-2 border-primary sm:mx-4 sm:mb-0 sm:w-auto">
          Learn Your Purpose.
        </span>
      </div>
      <div className="flex h-[90vh] w-full flex-col justify-evenly">
        <div className="container flex flex-col text-white">
          <h2 className="mb-4 text-4xl">Example Title</h2>
          <p className="w-fit text-xl font-light leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Sapien
            <br /> montes turpis pellentesque quis mus. Nisl diam nibh <br />{" "}
            pulvinar scelerisque integer eget scelerisque <br /> fermentum
            fames. Ut fermentum eu nullam <br />
            pellentesque a mus viverra sit.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
