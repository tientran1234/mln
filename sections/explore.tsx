"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";
import { ExploreCard, TitleText, TypingText } from "@/components";
import anh1 from "@/public/anh1.png";
import { exploreWorlds } from "@/constant";
import Image from "next/image";

export default function Explore() {
  const [active, setActive] = useState("world-1");

  return (
    <section className={`paddings`} id="explore">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className={`inner-width mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex  min-h-[70vh] justify-center">
          <Image src={anh1} alt="" />
        </div>
      </motion.div>
    </section>
  );
}
