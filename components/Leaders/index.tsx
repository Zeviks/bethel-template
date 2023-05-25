import SectionHeading from "../SectionHeading";
import LeaderCard from "./LeaderCard";

export default function Leaders() {
  return (
    <section className="py-10">
      <SectionHeading heading="Our Leaders" />

      <div className="container my-20 flex flex-col items-center justify-between">
        <h2 className="w-full text-center text-4xl font-semibold text-dark md:w-[30ch] md:text-5xl">
          Meet our leaders
        </h2>
        <p className="w-full pt-3 text-center text-xl font-light leading-tight md:w-[50ch]">
          Every believer was created to belong to a community. It was never
          God’s heart for us to do this life alone.
        </p>

        <div className="pt-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <div className="w-full">
              <LeaderCard />
            </div>
            <div className=" w-full">
              <LeaderCard />
            </div>
            <div className="w-full">
              <LeaderCard />
            </div>
            <div className="w-full">
              <LeaderCard />
            </div>
            <div className="w-full">
              <LeaderCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
