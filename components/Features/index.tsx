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
            paragraph=""
          />
          {/* Grid */}
          <div className="flex flex-col gap-5 pt-10 lg:flex-row">
            <div className="flex h-auto items-end justify-center rounded bg-dark px-12 lg:h-[500px] lg:w-[700px]">
              <div className="container mb-12 flex h-[80px] w-[400px] flex-col items-start justify-center rounded bg-primary">
                <h2 className="text-center text-lg font-light text-white">
                  We are located at:
                </h2>
                <Link
                  href="/"
                  className="text-md mt-2 font-semibold text-white"
                >
                  400 S. I Rd, S Veterans Blvd, Pharr, TX 78577
                </Link>
              </div>
            </div>
            <div className="flex h-auto w-full items-end justify-center rounded bg-dark px-12 lg:h-[500px]">
              <div className="container mb-12 flex items-center justify-center rounded bg-primary py-5">
                <h2 className="text-center text-xl font-medium text-white">
                  Our Service Times
                </h2>
                <div className="mt-2 mb-4 h-full w-1 rounded bg-white" />
                <p className="text-lg font-light text-white">
                  <span className="font-medium">Wednesdays</span> at{" "}
                  <span className="font-medium">7pm</span> <br />
                  <span className="font-medium">Sundays</span> at{" "}
                  <span className="font-medium">10am</span> &{" "}
                  <span className="font-medium">5pm</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

/* 
<div className="flex justify-between gap-5 pt-10">
            <div className="flex h-[500px] w-[700px] items-end justify-center rounded bg-dark px-12">
              <div className="container mb-12 flex h-[80px] w-[400px] flex-col justify-center rounded bg-primary">
                <h2 className="text-lg font-light text-white">
                  We are located at:
                </h2>
                <Link href="/" className="text-md font-semibold text-white">
                  400 S. I Rd, S Veterans Blvd, Pharr, TX 78577
                </Link>
              </div>
            </div>
            <div className="flex h-[500px] w-full items-end justify-center rounded bg-dark px-12">
              <div className="container mb-12 flex h-[80px] w-full items-center justify-evenly rounded bg-primary py-5">
                <h2 className="text-xl font-medium text-white">
                  Our Service Times
                </h2>
                <div className="h-full w-1 rounded  border-r-2" />
                <p className="text-lg font-light text-white">
                  <span className="font-medium">Wednesdays</span> at{" "}
                  <span className="font-medium">7pm</span> <br />
                  <span className="font-medium">Sundays</span> at{" "}
                  <span className="font-medium">10am</span> &{" "}
                  <span className="font-medium">5pm</span>
                </p>
              </div>
            </div>
          </div>
*/
