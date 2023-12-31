import React from 'react'
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import{TypingText} from'./index';


const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
     
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[13px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );

const About = () => {
  return (
    <>
        <div  >
          
<div className="absolute -left-72 -bottom-8 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
    <img src={'/bulb.png'} width={260} height={200} className="w-full h-full" alt="" />
  </div>
</div>
    
           <motion.div variants={textVariant()}>
           <TypingText title="| Introduction" />
            {/* <p className={styles.sectionSubText}>Introduction</p> */}
            <h2 className={styles.sectionHeadText}>Overview<span className='text-[#4dee60]'>.</span></h2>
         </motion.div>
    
       <motion.p
             variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary xl:text-[18px]  text-[12px] max-w-3xl xl:leading-[26px]'
          >
             I'm a skilled software developer with experience in TypeScript and
             JavaScript, and expertise in frameworks like React, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients to
             create efficient, scalable, and user-friendly solutions that solve
             real-world problems. Let's work together to bring your ideas to life!
         </motion.p>
    
         <div className='mt-14 flex flex-wrap gap-8'>
            {services.map((service, index) => (
               <ServiceCard key={service.title} index={index} {...service} /> 
            ))}
         </div>
         </>
  )
}


 export default SectionWrapper(About, "about");