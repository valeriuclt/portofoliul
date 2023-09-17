import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { TitleText } from './index';
import {   TypingText } from './index';
import { styles } from "../style";
import { useState } from 'react';
import { ExploreCard } from "./index";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant,staggerContainer } from "../utils/motion";
import { exploreWorlds } from "../constants";

const Works2 = () => {
    const [active, setActive] = useState('world-2');
    return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Work" textStyles="text-center" />
        <TitleText
          title={<>Choose the site you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-3">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
  
  export default Works2;