import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from "../style"; 
import { fadeIn } from '../../variant';
import { ProjectsBtn } from './canvas';  

import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, } from 'react-icons/fa'

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


// counter 
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];


const Hero = () => {

  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <section className={`${styles.paddings}`} >

      <div className="h-full bg-primary/30 py-32 px-32 text-center xl:text-left ">

        {/* avatar img  */}
        {/* <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="hidden xl:flex absolute bottom-0 -left-[370px]">
        <Avatar />
</motion.div> */}
         
      
        <div className="container  h-full  flex flex-col items-center xl:flex-row  xl:px-32  gap-x-12  ">
         
          {/* textul  */}
          <div className="flex-1 flex flex-col justify-center ">
       
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#4dee60]'>Valeriu</span>
            </h1>
            <div>

              <p className={`${styles.heroSubText} mt-4 text-white-100`}>
                I develop 3D visuals, user <br className='sm:block hidden' />
                interfaces and web applications
              </p>
              <motion.div
                variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden'
                className={`${styles.heroSubText} mt-4 text-white-100 py-4`}>
              </motion.div></div>
            <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className="h2">
              Captivating <span className="text-accent">stories</span> birth magnificent designs.
            </motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)} initial='hidden' animate='show' exit='hidden'
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              10 years ago, I began freelancing as a developer . Since than, i 've done remote work for agencies, consulted for startups and collaborated on digital products for bussiness and consumer use. '
            </motion.p>


          </div>
          {/* info  */}
          <motion.div
            variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden'
            className="flex flex-col w-full pt-16 pl-12 xl:max-w-[48%] h-[480px] ">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-2 ">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={` ${index === itemIndex && 'text-[#4dee60] after:w-[100%] after:bg-[#4dee60] after:transition-all after:duration-300  '} 
        cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>)
              })}
            </div>
            <div className=" py-2 xl:py-2 flex flex-col gap-y-2 xl:gap-y-2 items-center xl:items-start ">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                    {/* titlul   */}
                    <div className=" ">{item.title}  </div>
                    <div className="hidden  mb-2  md:flex">-</div>
                    <div>{item.stage}</div>
                    <div className="flex gap-x-4">
                      {/* icons  */}
                      {item.icons?.map((icon, itemIndex) => {
                        return (
                          <div key={itemIndex} className="text-2xl ">{icon}</div>
                        )
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
             <div className="hidden xl:flex py-12 px-24 ">   
         
            <div className="flex justify-center xl:hidden relative">
             <ProjectsBtn />
            
             </div>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden' animate='show' exit='hidden' className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>  

</div>
          </motion.div>
        </div>


        {/* counters  */}
        <motion.div
          variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden'
          className="hidden md:flex md:max-w-xl xl:max-w-none  xl:px-32 mb-8">
          <div className="flex flex-1 xl:gap-x-6">
            {/* experienta  */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={10} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] max-w-[100px]">Years of experience</div>
            </div>
            {/* clienti */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={250} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] max-w-[100px]">Clienti multumiti</div>
            </div>
            {/* project */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={600} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] max-w-[100px]">Proiecte</div>
            </div>
            {/* awards */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                <CountUp start={0} end={8} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] max-w-[100px]">Premii</div>
            </div>
          </div>
        </motion.div>
      </div>
    

      {/* <ComputersCanvas />   */}

    </section>



  );
};

export default Hero