"use client"

import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRef } from 'react';
import HomeComponentCss from '../../style/Home.module.css';

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null); // Specify the type HTMLDivElement here
    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillsRef = useRef<HTMLDivElement>(null);
    const isSkillRefInView = useInView(skillsRef, { margin: "-100px" });

    const experienceRef = useRef<HTMLDivElement>(null);
    const isExperienceRefInView = useInView(experienceRef, { margin: "-200px" });

    const text = "If yes, click the blog button";
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            {/* Container */}
            <div className='h-full overflow-scroll lg:flex' ref={containerRef}>

                {/* Text container */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
                    {/* biography container */}
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1 className='font-bold text-2xl '>Biography</h1>

                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ipsam cumque reprehenderit itaque doloremque quibusdam totam beatae eaque reiciendis! Mollitia modi dolorum, repellendus id dolorem ipsum autem quam esse facere!</p>

                        <p className='italic'>My signature</p>
                        <p className='self-end'>The signature.</p>
                    </div>

                    {/* Skills container */}
                    <div className='flex flex-col gap-12 justify-center' ref={skillsRef}>
                        <motion.h1 initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='font-bold text-2xl '>Skills</motion.h1>

                        {/* Skill lists */}
                        <motion.div initial={{ x: "300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='flex gap-4 flex-wrap'>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>HTML5</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>CSS3</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Bootstrap</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Tailwind</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Javascript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>ES6</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>React.js</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Node.js (backend)</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Next.js</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Firebase</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>REST APIs</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Express.JS</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>MongoDB</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Mongoose</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>JWT (authentication and authorization)</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>C</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Stripe</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>TypeScript</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Redux.js (including RTK Query)</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Java (backend)</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Vercel</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Netlify</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Figma</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>Git</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '> VS Code</div>
                            <div className='rounded p-2 text-sm cursor-pointer bg-white hover:cursor-none hover:bg-black hover:text-white text-black '>AWS</div>
                        </motion.div>
                    </div>


                    {/* Experience container */}
                    <div className='flex flex-col gap-x-12 justify-center pb-48' ref={experienceRef}>
                        <motion.h1 initial={{ x: "-300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='font-bold text-2xl mb-[3rem]'>Experience</motion.h1>

                        {/* Experience list */}
                        <motion.div initial={{ x: "300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='flex justify-between h-48'>
                            {/* Job title */}
                            <div className='w-1/3'>
                                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Full stact developer</div>

                                <p className='p-3 text-sm italic'>I was working there as a full stack developer. </p>

                                <p className='p-3 text-sm font-semibold text-red-600'>2020 - present</p>

                                <div className='flex justify-between items-center'>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Kylo Apps</div>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Display Certificate</div>
                                </div>

                            </div>

                            <div className='w-1/6'>
                                <div className='w-1 h-full bg-gray-600 rounded relative'>
                                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-600 bg-white -left-2'></div>
                                </div>
                            </div>

                            <div className='w-1/3'></div>

                        </motion.div>



                        <motion.div initial={{ x: "300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='flex justify-between h-48'>
                            {/* Job title */}
                            <div className='w-1/3'></div>

                            <div className='w-1/6'>
                                <div className='w-1 h-full bg-gray-600 rounded relative'>
                                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-600 bg-white -left-2'></div>
                                </div>
                            </div>

                            <div className='w-1/3'>
                                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Front-end developer</div>

                                <p className='p-3 text-sm italic'>I was working there as a full stack developer. </p>

                                <p className='p-3 text-sm font-semibold text-red-600'>2020 - present</p>

                                <div className='flex justify-between items-center'>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Translense Pvt Ltd</div>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Display Certificate</div>
                                </div>
                            </div>

                        </motion.div>



                        <motion.div initial={{ x: "300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='flex justify-between h-48'>
                            {/* Job title */}
                            <div className='w-1/3'>
                                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Front-end developer</div>
                                <p className='p-3 text-sm italic'>I was working there as a full stack developer. </p>
                                <p className='p-3 text-sm font-semibold text-red-600'>2020 - present</p>
                                <div className='flex justify-between items-center'>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Translense Pvt Ltd</div>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Display Certificate</div>
                                </div>
                            </div>

                            <div className='w-1/6'>
                                <div className='w-1 h-full bg-gray-600 rounded relative'>
                                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-600 bg-white -left-2'></div>
                                </div>
                            </div>

                            <div className='w-1/3'></div>

                        </motion.div>

                    </div>

                </div>


                <div className='lg:block sticky top-0 z-30 lg:w-1/3 xl:w-1/3 w-full pb-4 md:w-1/3 xl:1/2 relative group'>
                <Image
            src="https://i.ibb.co/NZRKMfM/pexels-philippe-donn-1257860.jpg"
            alt=""
            fill
            className="w-full h-full rounded-sm"
          />


                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                        <h1 className='md:text-xl lg:text-2xl xl:text-3xl italic text-center'>Are you interested to know something amazing about space?</h1>

                        <div className='hidden group-hover:flex justify-center items-center py-6'>
                            {text.split("").map((letter, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: 0 }}
                                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                                    className='text-xl md:text-2xl lg:text-3xl xl:text-4xl italic'
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </div>

                        <div className='p-6'>
                            <button className={`w-full mb-6 py-[10px] ${HomeComponentCss.blogButton} italic font-semibold text-xl`}>Read Blog</button>


                            <p className="italic text-gray-300">
                                Explore our blog to learn fun facts about space and astronomy! From mysterious black holes to dazzling galaxies, uncover the wonders of the universe. Dive into the history of space exploration and discover how scientists study stars and planets. Whether you`&apos;`re a stargazer or just curious, our blog has something for you. Join us as we journey through the cosmos and ignite your curiosity about the beauty and mysteries of space!
                            </p>

                            <p className="italic text-white flex justify-end">
                               You will not be bore there. in sha Allah.
                            </p>



                        </div>
                    </div>
                </div>




            </div>
        </motion.div>
    )
}
export default About; 