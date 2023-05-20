import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
const Features = () => {
  return (
    <>
      <div className="pt-10">
        <SectionHeading heading="Our Church" />
      </div>
      <section
        id="features"
        className="lg:py-25 bg-primary/[.03] py-16 md:py-20"
      >
        <div className="container">
          <SectionTitle
            title="We are a congregation firmly grounded in the love of God, devoted to serving him under any circumstance."
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          />
          {/* Grid */}

          <div className="container mt-10">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[550px] text-center lg:m-0"
                  data-wow-delay=".15s"
                >
                  <Image
                    src="/images/visit.jpg"
                    alt="about image"
                    fill
                    className="rounded object-cover"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp max-w-[470px]"
                  data-wow-delay=".2s"
                >
                  <div className="mb-9">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Service Times
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      Wednesdays starting @ 7pm (CST)
                      <br /> Sundays starting @ 10am (CST)
                    </p>
                  </div>
                  <div className="mb-9">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      Come visit us, we are located at:{" "}
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      <Link href="/">400 S Veterans Blvd, Pharr, TX 78577</Link>
                      <br />
                      <span>* Click for navigation *</span>
                    </p>
                  </div>
                  <div className="mb-1">
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      If you have any question please reach out to us during
                      office hours
                    </h3>
                    <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      <span className="text-xl font-bold text-dark">
                        Phone :
                      </span>{" "}
                      (956) 787-1737
                      <br />
                      Monday to Fridays from 9am to 3:30pm
                      <br />
                      Weekends - Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
