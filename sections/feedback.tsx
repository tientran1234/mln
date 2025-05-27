"use client";

import { motion } from "framer-motion";

import { fadeIn, staggerContainer, zoomIn } from "@/utils/motion";
import Image from "next/image";
import anh12 from "@/public/anh12.png";
export default function Feedback() {
  return (
    <section className={`paddings relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`inner-width mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
        >
          <div className="feedback-gradient"></div>
          <div>
            <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
              V. Kết luận
            </h4>
          </div>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            Mối quan hệ giữa Đảng, Nhà nước và nhân dân là cốt lõi trong tư
            tưởng Hồ Chí Minh.
          </p>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            Việc xây dựng Nhà nước của dân, do dân, vì dân phải bắt đầu từ: Đảng
            lãnh đạo đúng đắn, Chính quyền hành động hiệu quả, Và nhân dân làm
            chủ thực sự.
          </p>
          <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
            Học tập tư tưởng Hồ Chí Minh chính là học cách phục vụ nhân dân một
            cách chân thành, hiệu quả và bền vững.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="relative flex items-center justify-center flex-1"
        >
          <Image src={anh12} alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
}
