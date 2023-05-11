import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 h-[100vh] w-full overflow-hidden bg-bethelHero bg-cover bg-center pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center xl:max-w-[900px]"
                data-wow-delay=".2s"
              >
                <h1 className="m mb-5 font-['Bellefair'] text-5xl leading-tight text-white dark:text-white sm:text-xl sm:leading-tight md:mt-2  md:text-8xl md:leading-tight  xl:text-9xl">
                  SERVING GOD
                  <br />
                  <span>
                    WITH{" "}
                    <span className="-py-5 rounded-md bg-primary text-dark">
                      LOVE
                    </span>
                  </span>
                </h1>
                <p className="mb-12 text-center text-2xl font-light text-white sm:text-lg md:text-xl">
                  Experience God’s presence with us at Bethel in Pharr,
                  <br /> on Sundays & Wednesdays.
                </p>
                <div className="px-auto flex items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://nextjstemplates.com/templates/startup"
                    className="rounded-md bg-primary py-3 px-6 text-base font-semibold text-dark duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Join in Person
                  </Link>
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="rounded-md bg-black/20 py-3 px-6 text-base font-semibold text-lightPrimary duration-300 ease-in-out hover:bg-black/30"
                  >
                    Watch Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
