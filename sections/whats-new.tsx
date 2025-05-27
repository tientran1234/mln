"use client";

import { motion } from "framer-motion";
import anh4 from "@/public/anh4.png";
import anh5 from "@/public/anh5.png";
import { staggerContainer, fadeIn, planetVariants } from "@/utils/motion";
import { NewFeatures, TitleText, TypingText } from "@/components";

import { newFeatures } from "@/constant";
import Image from "next/image";

export default function WhatsNew() {
  return (
    <section className={`paddings relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`inner-width mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title={"| What's New?"} />
          <TitleText
            title={<>3. Nhân dân là nền tảng, là gốc của cách mạng</>}
          />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants("right")}
          className={`flex-1 flex-center`}
        >
          <Image
            src={anh4}
            alt="whats new image"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
      <Image
        src={anh5}
        alt="whats new image"
        className="w-[100%] h-[100%] object-contain"
      />
    </section>
  );
}
