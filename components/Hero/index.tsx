import Link from "next/link";
import HeroIcon from "../Icons/HeroIcon";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 h-[100vh] w-full overflow-hidden pt-[100px] pb-12 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
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

                <div className="px-auto flex flex-row items-center justify-center space-y-0 space-x-4">
                  <Link
                    href="/"
                    className="rounded bg-primary py-2 px-3 text-sm font-medium text-dark duration-300 ease-in-out hover:bg-primary/80 lg:text-base"
                  >
                    Join in Person
                  </Link>
                  <Link
                    href="/"
                    className="anim-underline-fx py-2 text-base font-medium text-lightPrimary duration-300 ease-in-out lg:text-sm"
                  >
                    <span className="flex items-center justify-between font-medium">
                      Watch Online
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="ml-2 h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-[5px] hidden h-full sm:block md:mt-[30px] xl:mt-[100px]">
          <HeroIcon />
        </div>
      </section>
    </>
  );
};

export default Hero;
