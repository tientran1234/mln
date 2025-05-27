"use client";

import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "@/utils/motion";
import { TitleText, TypingText } from "@/components";
import Image from "next/image";
import anh6 from "@/public/anh6.png";
import anh7 from "@/public/anh7.png";
import anh8 from "@/public/anh8.png";
import anh9 from "@/public/anh9.png";
import anh10 from "@/public/anh10.png";

export default function Worlds() {
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
          title={
            <>
              III. Vận dụng tư tưởng vào việc xây dựng chính quyền gần dân, thân
              dân
            </>
          }
          textStyles={"text-center"}
        />
        <TypingText
          title={"1. Thực hiện dân chủ thực chất, không hình thức"}
          textStyles={"text-center"}
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px] justify-center"
        >
          <Image src={anh6} alt="" />
        </motion.div>
        <TypingText
          title={"2. Cải cách hành chính, giảm phiền hà cho dân"}
          textStyles={"text-center"}
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px] justify-center"
        >
          <Image src={anh7} alt="" />
        </motion.div>
        <TypingText
          title={
            " 3. Rèn luyện cán bộ, công chức theo chuẩn mực đạo đức cách mạng"
          }
          textStyles={"text-center"}
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[650px] justify-center"
        >
          <Image src={anh8} alt="" />
        </motion.div>
        <TypingText
          title={"4. Tăng cường giám sát của nhân dân đối với chính quyền"}
          textStyles={"text-center"}
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[750px] justify-center"
        >
          <Image src={anh9} alt="" />
        </motion.div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[750px] justify-center"
      >
        <Image src={anh10} alt="" />
      </motion.div>
    </section>
  );
}
