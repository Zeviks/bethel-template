import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16">
      <motion.section
        variants={fadeIn("up", "tween", 0.2, 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto"
      >
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="wow fadeInUp yearly-gradient mb-12 w-full rounded-md px-8 py-11 dark:bg-dark">
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
                    <p>
                      <span className="font-semibold">Office hours:</span>{" "}
                      <br />
                      Monday - Fridays from 9am to 3:30pm
                      <br /> Weekends - Closed
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div>
                      <span className="font-semibold">Contact Info:</span>{" "}
                      <br />
                      <a
                        href="mailto:bethelpharr.church@gmail.com"
                        className="text-medium text-medium hover:text-dark/70  font-base inline-block text-dark transition-all"
                      >
                        bethelpharr.church@gmail.com
                      </a>
                      <br />
                      <span>(956) 787-1737</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 lg:mt-0">
                  <p className="text-xl">Our Service Times</p>
                  <div className="flex h-[150px] w-full items-center justify-center rounded-sm bg-dark px-8 py-4 text-2xl text-white">
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
      </motion.section>
    </section>
  );
};

export default Contact;
