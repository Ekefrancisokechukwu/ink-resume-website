import { motion, useSpring, useTransform } from "motion/react";
import { useScroll } from "motion/react";
import React from "react";

export const VideoSection = () => {
  const containerRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const videoScale = useTransform(smoothProgress, [0.2, 0.9], [1.1, 0.8]);
  const shadowBox = useTransform(
    smoothProgress,
    [0, 0.4, 0.5, 1],
    [
      "0 4px 6px -1px rgb(0 ,0 ,0 ,0.1), 0 2px 4px -2px rgb(0 ,0, 0 ,0.1)",
      "0 10px 15px -3px rgb(0 ,0, 0 ,0.1), 0 4px 6px -4px rgb(0, 0, 0 ,0.1)",
      "0 20px 25px -5px rgb(0 ,0, 0 , 0.1), 0 8px 10px -6px rgb(0, 0 ,0 , 0.1)",
      "0px 6px 69px -1px rgba(0,0,0,0.29)",
    ]
  );

  return (
    <div ref={containerRef} className="py-20 ">
      <motion.div
        style={{ scale: videoScale, boxShadow: shadowBox }}
        className=" 2xl:max-w-[90rem] xl:max-w-[75rem]  rounded-xl mx-auto px-8"
      >
        <motion.div className="rounded-xl">
          <video
            className="w-full aspect-video rounded-xl"
            autoPlay
            muted
            loop
            preload="none"
            poster="/placeholder.svg?height=720&width=1280"
          >
            <source src="/dashboard-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </div>
  );
};
