"use client";

import { motion } from "framer-motion";

import { TypingText } from "@/components";
import { fadeIn, staggerContainer } from "@/utils/motion";

export default function About() {
  return (
    <section className={`paddings relative z-10`}>
      <div className="gradient-02" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`inner-width mx-auto flex-center flex-col`}
      >
        <TypingText title="| I. Mở đầu" textStyles="text-center" />

        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white leading-[54px]"
        >
          <span className="font-extrabold text-white">Hồ Chí Minh </span>
          luôn nhấn mạnh vai trò trung tâm của nhân dân trong sự nghiệp cách
          mạng. tiễn. Theo Người mối quan hệ giữa
          <span className="font-extrabold text-white">
            {" "}
            Đảng – Nhà nước – Nhân dân{" "}
          </span>
          là mối quan hệ máu thịt, quyết định sự tồn vong của chế độ. Việc xây
          dựng chính quyền
          <span className="font-extrabold text-white">
            {" "}
            “của dân, do dân, vì dân”
          </span>{" "}
          chính là cụ thể hóa tư tưởng đó trong thực tiễn
        </motion.p>

        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </section>
  );
}
