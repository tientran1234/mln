"use client";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "@/utils/motion";
import { InsightCard, TitleText, TypingText } from "@/components";
import anh11 from "@/public/anh11.png";
import { insights } from "@/constant";
import Image from "next/image";

export default function Insight() {
  return (
    <section className={`paddings relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`inner-width mx-auto flex flex-col`}
      >
        <TitleText
          title={<>IV. Liên hệ thực tiễn tại địa phương / quốc gia</>}
          textStyles={"text-center"}
        />

        <div className="mt-[50px] flex flex-col gap-[30px]">
          {insights.map((item, index) => (
            <InsightCard key={`insight-${index}`} {...item} index={index + 1} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[750px] justify-center"
      >
        <Image src={anh11} alt="" />
      </motion.div>
    </section>
  );
}
