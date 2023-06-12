import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container static flex flex-wrap items-center text-4xl font-semibold text-white">
        <span className="mb-5 w-full border-b-2 border-primary sm:mx-4 sm:mb-0 sm:w-auto">
          Love God.
        </span>
        <span className="mb-5 w-full border-b-2 border-primary sm:mx-4 sm:mb-0 sm:w-auto">
          Discover the Truth.
        </span>
        <span className="mb-5 w-full border-b-2 border-primary sm:mx-4 sm:mb-0 sm:w-auto">
          Show Compassion.
        </span>
        <span className="mb-5 w-full border-b-2 border-primary sm:mx-4 sm:mb-0 sm:w-auto">
          Learn Your Purpose.
        </span>
      </div>

      <div className="flex h-[90vh] w-full flex-col justify-evenly">
        <div className="container flex flex-col text-white">
          <h2 className="mb-4 text-4xl">Example Title</h2>
          <p className="w-fit text-xl font-light leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Sapien
            <br className="sm:hidden" /> montes turpis pellentesque quis mus.
            Nisl diam nibh <br className="sm:hidden" /> pulvinar scelerisque
            integer eget scelerisque <br className="sm:hidden" /> fermentum
            fames. Ut fermentum eu nullam <br className="sm:hidden" />
            pellentesque a mus viverra sit.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
