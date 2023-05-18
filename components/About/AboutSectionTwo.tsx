import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="static flex items-center justify-evenly text-4xl font-semibold text-white">
        <span className="border-b-2 border-primary">Love God.</span>
        <span className="border-b-2 border-primary">Discover the Truth.</span>
        <span className="border-b-2 border-primary">Show Compassion.</span>
        <span className="border-b-2 border-primary">Learn Your Purpose.</span>
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
