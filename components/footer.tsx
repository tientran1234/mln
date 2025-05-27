"use client";

import { motion } from "framer-motion";

import { socials } from "@/constant";
import { footerVariants } from "@/utils/motion";

export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView={"show"}
      className={`paddings py-8 relative`}
    >
      <div className="footer-gradient" />

      <div className={`inner-width mx-auto flex flex-col gap-8`}>
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Kết thúc
          </h4>
          <button
            type="button"
            className="flex items-center px-6 py-4 h-fit  bg-[#25618b] rounded-[32px] gap-[12px]"
          >
            <p className="w-[24px] h-[24px] object-contain">❤️</p>
            <span className="font-normal text-[16px] text-white uppercase">
              Cảm ơn vì đã nghe phần trình bài của nhóm mình :33
            </span>
          </button>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h4 className="font-extrabold text-[24px] text-white">Nhóm 4</h4>
            <p className="font-normal text-[14px] text-white opacity-50"></p>
            <div className="flex gap-6"></div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
