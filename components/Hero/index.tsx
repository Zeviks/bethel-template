import Link from "next/link";
import HeroIcon from "../Icons/HeroIcon";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 h-[100vh] w-full overflow-hidden bg-bethelHero bg-cover bg-center pt-[100px] pb-12 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      >
        <div className="container flex h-full flex-col items-center">
          <div className="-mx-4 mt-8 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center xl:max-w-[900px]"
                data-wow-delay=".2s"
              >
                <h1 className="mb-10 font-['Bellefair'] text-5xl leading-tight text-white  sm:text-xl sm:leading-tight md:mt-2  md:text-8xl md:leading-tight xl:text-9xl">
                  SERVING GOD
                  <br />
                  <span>
                    WITH{" "}
                    <span className="rounded-md bg-primary text-dark">
                      LOVE
                    </span>
                  </span>
                </h1>
                <p className="text-md mb-12 text-sm font-light text-white sm:text-lg md:text-2xl">
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
                    className="anim-underline-fx py-3 px-6 text-base font-semibold text-lightPrimary duration-300 ease-in-out"
                  >
                    Watch Online
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <HeroIcon />
        </div>
      </section>
    </>
  );
};

export default Hero;
