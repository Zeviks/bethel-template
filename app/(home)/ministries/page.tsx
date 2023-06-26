import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar/index";

import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";

import { urlForImage } from "@/sanity/lib/image";

const ministriesQuery = groq`*[_type == 'ministries']`;

const Page = async () => {
  const ministries = await client.fetch(ministriesQuery);
  return (
    <>
      <NavigationBar />
      <div className="ministry-header relative h-full">
        <img
          alt="Ministries Header"
          className="block h-[700px] w-full"
          src="/images/pre-final/testBG.jpg"
          style={{ filter: "brightness(0.7)" }}
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-center text-7xl font-bold text-white">
          Our Ministries
        </h1>
      </div>

      <div className="container mx-auto px-4 pt-[1rem] pb-[8rem] md:px-12">
        <div className="h-full py-8">
          <h2 className="font-base text-4xl text-dark">
            God's house always has room for everyone.{" "}
            <span className="border-b-2 border-primary font-semibold">
              Discover where you fit in best.
            </span>
          </h2>
          <p className="text-lg font-thin">
            Browse through our minstries below
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {ministries.map((ministry) => (
            <article className="overflow-hidden shadow-lg" key={ministry._id}>
              <div
                className="relative h-[300px] overflow-hidden rounded bg-cover bg-center p-4 shadow-lg"
                style={{
                  backgroundImage: `linear-gradient(
                    180deg, rgba(0, 10, 26, 0) 35.38%, #15192A 100%
                  ),url("${urlForImage(ministry.mainImage).url()}")`,
                }}
              >
                <div className="flex h-[100%] flex-col justify-end">
                  <div>
                    <h5 className="text-neutral-800 mb-2 text-xl font-medium leading-tight text-white">
                      {ministry.name}
                    </h5>
                    <p className="text-neutral-600 mb-4 text-base font-light text-white">
                      {ministry.desc}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
