import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container ">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-[75%]">
            <div
              className="wow fadeInUp mb-12 w-full rounded-md bg-primary/[70%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-6xl">
                Have any questions?
              </h2>
              <p className="mb-12 text-2xl font-medium">
                <span className="text-dark/[85%]"> Please react out. </span>
                <span className="border-b-2 border-dark/[75%] text-dark/[85%]">
                  Or give us a visit
                </span>
                .
              </p>

              <div className="flex justify-between">
                <div className="flex flex-col justify-between gap-5">
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-2 h-10 w-10 fill-current"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <p>(956) 787-1737</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      aria-hidden="true"
                      className="mr-2 h-10 w-10 fill-current"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
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
                      className="mr-2 h-10 w-10 fill-current"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    EMAIL
                  </div>
                </div>
                <div>
                  <p>Our Service Times</p>
                  <div className="bg-dar flex h-[150px] w-[400px] flex-col items-center justify-center rounded-sm bg-dark text-2xl text-white">
                    <p>Wednesdays at 7pm</p>
                    <p>Sundays from 10am & 5pm</p>
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
