import Image from "next/image";

const YearlyTheme = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="yearly-gradient h-fit w-full bg-primary/[50%]">
        <div className="container flex flex-col items-center justify-center px-4 md:w-[100%] md:justify-between lg:flex-row">
          <div className="text-center md:text-left">
            <span className="mb-2 text-sm font-light">This Year's Theme</span>
            <h2 className="w-full text-3xl font-medium sm:text-4xl md:text-5xl">
              Let us love one another as <br />
              He has loved us.
            </h2>
          </div>

          <div className="relative z-[999] mt-10 flex flex-col justify-between rounded bg-dark p-6 md:mt-0 md:h-[450px] md:w-[770px] md:p-12">
            <span className="z-[999] w-fit rounded-full bg-primary py-2.5 px-6 text-dark md:px-9">
              2023
            </span>
            <p className="pl-0 text-lg font-bold text-white sm:text-2xl md:pl-6 md:text-4xl">
              “{" "}
              <span className="font-light leading-6">
                Beloved, let us love one another, because love is from God;
                everyone who loves is born of God and knows God. Whoever does
                not love does not know God, for God is love.
              </span>{" "}
              ”
            </p>
            <span className="text-lg font-bold text-white sm:text-xl md:text-xl">
              1 John 4:7-21
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearlyTheme;
