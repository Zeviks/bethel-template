const YearlyTheme = () => {
  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="yearly-gradient h-fit w-full bg-primary/[50%]">
        <div className="container flex flex-col gap-4 py-10 md:justify-between lg:flex-row lg:items-center lg:py-0">
          <div className="w-[100%] pb-2 md:text-left lg:w-[70%]">
            <span className="mb-2 text-sm font-light md:text-lg">
              This Year's Theme
            </span>
            <h2 className="w-full text-3xl font-medium leading-tight md:w-[18ch] md:text-4xl">
              Let us love one another as he has loved us.
            </h2>
          </div>

          <div className="relative z-[999] mt-0 flex w-full flex-col justify-between rounded bg-dark p-6 md:h-[350px] md:p-12 lg:bottom-10 lg:w-[80%]">
            <span className="z-[999] w-fit rounded-full bg-primary py-2.5 px-6 text-dark md:px-9">
              2023
            </span>
            <p className="py-8 pl-0 text-lg font-bold text-white sm:text-2xl md:pl-6 md:text-2xl lg:text-xl">
              “{" "}
              <span className="font-light leading-6">
                Beloved, let us love one another, because love is from God;
                everyone who loves is born of God and knows God. Whoever does
                not love does not know God, for God is love.
              </span>{" "}
              ”
            </p>
            <span className="text-end text-lg font-bold text-white sm:text-xl md:text-xl">
              1 John 4:7-21
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearlyTheme;
