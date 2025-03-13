import { SpellCheck } from "lucide-react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import React from "react";

export const HowItWorks = () => {
  const headingTargetRef = React.useRef(null);
  const scrollContainerRef = React.useRef(null);

  // const { scrollYProgress } = useScroll({
  //   // target: spanTargetRef,
  //   // offset: ["start end", "end start"],
  // });
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  const spanTranslateL = useTransform(smoothProgress, [0.219, 1], [0, -1000]);
  const spanTranslateR = useTransform(smoothProgress, [0.219, 1], [0, 1000]);
  const opacityHeading = useTransform(smoothProgress, [0.219, 0.6], [1, 0]);

  // const x = useTransform()
  const viewportWidth =
    typeof window !== "undefined" ? window.innerWidth : 1300;
  const scrollDistance = 500 - viewportWidth + 100;

  const x = useTransform(smoothProgress, [0.26573, 1], [0, scrollDistance]);
  const scaleCardDown = useTransform(smoothProgress, [0.219, 0.4], [0.5, 1]);
  const rotateCard = useTransform(
    smoothProgress,
    [0.21, 0.4],
    ["70deg", "0deg"]
  );
  const opacityCard = useTransform(smoothProgress, [0.219, 0.4], ["0", "1"]);

  return (
    <section className="h-[800lvh]  bg-white relative ">
      <div className="h-[80vh] overflow-x-hidden  sticky top-[4.1rem] flex    items-center justify-evenly">
        <motion.div
          ref={scrollContainerRef}
          style={{
            perspective: "850px",
            perspectiveOrigin: "center",
            x: x,
          }}
          className="flex pl-[20vw] z-10 absolute inset-0  space-x-11 items-center justify-evenly "
        >
          <motion.div
            style={{
              scale: scaleCardDown,
              opacity: opacityCard,
              rotateY: rotateCard,
            }}
            className="w-[20rem] flex-shrink-0  aspect-[1/1.2] absolute "
          >
            <div className="rotate-6 h-[25rem] rounded-md relative overflow-hidden bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)] p-4">
              <p className="text-xl font-medium">
                Personalize your resume with a{" "}
                <span className="text-sky-600 italic">color</span> that
                represents you!
              </p>
              <div className="absolute -bottom-4 -right-5">
                <Image
                  alt="card-pic"
                  src={"/color.png"}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </motion.div>
          {/* <motion.div
            style={{ scale: scaleCardDown }}
            className=" w-[20rem] flex-shrink-0  aspect-[1/1.2] "
          >
            <div className="rotate-3 h-[25rem] flex flex-col justify-between rounded-md relative overflow-hidden bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)] p-4">
              <SpellCheck size={35} />

              <p className="text-xl font-medium">
                Catch typos and polish your content with{" "}
                <span className="text-sky-600 italic">spell check!</span>
              </p>
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scaleCardDown }}
            className="    w-[20rem] flex-shrink-0  aspect-[1/1.2] "
          >
            <div className="-rotate-6 h-[25rem] rounded-md relative overflow-hidden bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)] p-4">
              <p className="text-xl font-medium">
                Fine-tune{" "}
                <span className="text-sky-600 italic">
                  fonts, sizes, and spacing
                </span>{" "}
                to match your style!
              </p>
              <div className="absolute -bottom-[5rem] left-0">
                <Image
                  alt="card-pic"
                  src={"/text.png"}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scaleCardDown }}
            className="    w-[20rem] flex-shrink-0  aspect-[1/1.2] "
          >
            <div className="-rotate-2 h-[25rem] rounded-md relative overflow-hidden bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)] p-4">
              <p className="text-xl font-medium">
                Paste a job description &
                <span className="text-sky-600 italic">
                  generate a tailored resume!
                </span>
              </p>
              <div
                style={{
                  transform: `perspective(1000px) rotateX(55deg) rotateY(0deg) rotateZ(34deg)`,
                }}
                className="absolute  rotate-6 -bottom-[5rem] left-0"
              >
                <Image
                  alt="card-pic"
                  src={"/copy.png"}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            transition={{ duration: 1 }}
            className="   w-[20rem] flex-shrink-0  aspect-[1/1.2] "
          >
            <div className="rotate-0 h-[25rem] rounded-md relative overflow-hidden bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.1)] p-4">
              <p className="text-xl font-medium">
                Fine-tune{" "}
                <span className="text-sky-600 italic">
                  fonts, sizes, and spacing
                </span>{" "}
                to match your style!
              </p>
              <div className="absolute -bottom-[5rem] left-0">
                <Image
                  alt="card-pic"
                  src={"/text.png"}
                  width={300}
                  height={400}
                />
              </div>
            </div>
          </motion.div> */}
        </motion.div>
        <motion.h1
          style={{ opacity: opacityHeading }}
          className="text-[9rem]  font-bold text-center"
        >
          <motion.span
            style={{ translateX: spanTranslateL }}
            className="inline-block"
          >
            There&apos;s{" "}
          </motion.span>{" "}
          <motion.span
            style={{ translateX: spanTranslateR }}
            className="inline-block"
          >
            More
          </motion.span>
        </motion.h1>
      </div>
    </section>
  );
};
