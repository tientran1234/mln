"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { StartSteps, TitleText, TypingText } from "@/components";
import anh2 from "@/public/anh2.png";
import anh3 from "@/public/anh3.png";
import { startingFeatures, startingFeatures2 } from "@/constant";
import Image from "next/image";

export default function GetStarted() {
  return (
    <section className={`paddings relative z-10`}>
      <TitleText
        title={
          <>
            | II. Nội dung tư tưởng Hồ Chí Minh về mối quan hệ giữa Đảng, Nhà
            nước và nhân dân
          </>
        }
        textStyles={"text-center"}
      />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`inner-width mx-auto flex lg:flex-row flex-col gap-8 mt-20`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 flex-center`}
        >
          <Image
            src={anh2}
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 1, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText
            title={" 1. Đảng là người lãnh đạo, không phải là người cai trị"}
          />
          <motion.p className="text-white mt-10"></motion.p>
          <div className="mt-[31px] flex flex-col max-w-[380px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`inner-width mx-auto flex lg:flex-row flex-col gap-8 mt-20`}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`flex-1 flex-center`}
        >
          <Image
            src={anh2}
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 1, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={"2. Nhà nước là công cụ của nhân dân"} />
          <motion.p className="text-white mt-10"></motion.p>
          <div className="mt-[31px] flex flex-col max-w-[380px] gap-[24px]">
            {startingFeatures2.map((feature, index) => (
              <StartSteps key={feature} number={index + 1} text={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
