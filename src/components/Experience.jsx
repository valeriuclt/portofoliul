import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { TitleText } from './index';
import {   TypingText } from './index';
import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
 
const ExperienceCard = ({ experience }) => {
  return (
    
    <VerticalTimelineElement
      contentStyle={{
         background: "#1d1836",
      //  background:"black", 
        color: "#ffff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[20px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary xl:text-[13px] text-[10px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-4 list-disc ml-4 space-y-1'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100  xl:text-[14px] text-[10px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


const Experience = () => {
  return (
   <>
  <motion.div variants={textVariant()}>
        {/* <p className={`${styles.sectionSubText} text-center `}>
          What I have done so far
        </p> */}
        <TypingText title="| What I have done so far" textStyles="text-center" />
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience<span className='text-[#4dee60]'>:</span>
        </h2>
      </motion.div>
   
      <div className='lg:mt-20  mt-12 flex flex-col'>
        <VerticalTimeline >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            
            />
          ))}
        </VerticalTimeline>
      </div>
      
   </>
   
  )
}

export default SectionWrapper(Experience, "work");