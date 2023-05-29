import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="wow fadeInUp yearly-gradient mb-12 w-full rounded-md py-11 px-8 dark:bg-dark">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Have any questions?
              </h2>
              <p className="mb-12 text-3xl font-medium">
                <span className="text-dark/[85%]">Please reach out.</span>
                <span className="border-b-2 border-dark/[75%] text-dark/[85%]">
                  Or give us a visit
                </span>
                .
              </p>

              <div className="flex flex-col justify-between lg:flex-row">
                <div className="flex flex-col gap-5 text-lg">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-2 h-8 w-8 fill-current"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p>(956) 787-1737</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-2 h-8 w-8 fill-current"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p>
                      <span className="font-semibold">Office hours:</span>{" "}
                      <br />
                      Monday - Fridays from 9am to 3:30pm
                      <br /> Weekends - Closed
                    </p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-2 h-8 w-8 fill-current"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    EMAIL
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xl">Our Service Times</p>
                  <div className="flex h-[150px] w-full items-center justify-center rounded-sm bg-dark py-4 px-8 text-2xl text-white">
                    <div className="text-center">
                      <p>Wednesdays at 7pm</p>
                      <p>Sundays from 10am & 5pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
