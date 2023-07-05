import { motion, Variants } from "framer-motion";
import { fadeIn, staggerContainer } from "@/utils/motion";

interface Mission {
  mission: {
    missionTitle: string;
    missionDescription: string;
  };
}

const MissionBody: React.FC<Mission> = (mission) => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="flex h-[90vh] w-full flex-col justify-evenly">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          className="container flex flex-col text-white"
        >
          <motion.h2
            variants={fadeIn("right", "tween", 0.2, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="mb-4 text-4xl"
          >
            {mission.mission.missionTitle}
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="text-xl font-light leading-relaxed"
          >
            {mission.mission.missionDescription}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionBody;
