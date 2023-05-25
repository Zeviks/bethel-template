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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
