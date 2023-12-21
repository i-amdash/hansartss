'use client'

import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import WorkSlider from '@/components/WorkSlider';

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const PortfolioPage = () => {
  return (
  <div className="h-[100vh] bg-primary/30 flex items-center">
    {/* <Circles /> */}
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left md-4 xl:mb-0">
          <motion.h2
            variants={fadeIn ('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="h2 xl:mt-12"
          >
            Port<span className="text-accent">folio .</span>
          </motion.h2>
          <motion.p
            variants={fadeIn ('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
          >
            Some of my best works on display here
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn ('down', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="w-full xl:max-w-[55%]"
        >
          <WorkSlider />
        </motion.div>
      </div>
    </div>
    {/* <Bulb /> */}
  </div>
  );
};

export default PortfolioPage;
