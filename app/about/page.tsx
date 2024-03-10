"use client"

import Brain from '@/components/Brain';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { useRef } from 'react';
import HomeComponentCss from '../../style/Home.module.css';
import CertificateSlider from '@/components/CertificateCaurosel';
import Link from 'next/link';

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
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
                    {/* biography container */}
                    <div className='flex flex-col gap-12 justify-center'>
                        <h1 className='font-bold text-2xl '>Biography</h1>
                        <CertificateSlider></CertificateSlider>
                        <p className='text-lg'>Hi there! I'm Shakidul Islam Shakil, a web developer on a mission to craft unforgettable digital experiences. My journey began as an intern at Kylo Apps, where I delved deep into the world of full-stack development, soaking up knowledge like a sponge. Transitioning to Translanse Pvt Ltd, I found my niche as a front-end developer, where I could truly let my creativity shine. Currently, I'm in my fourth year at GUB, balancing my studies with real-world projects, constantly pushing the boundaries of what's possible in web development. I thrive in fast-paced environments, always eager to tackle new challenges head-on. Staying updated on the latest web technologies is my passion, as I believe it's crucial to stay ahead of the curve in this ever-evolving field. With each project, I strive to bring fresh ideas to the table, making sure every digital experience I create leaves a lasting impression. Join me on this exciting journey as we push the boundaries of web development together!</p>

                        <p className='self-end italic'>Scroll to bottom</p>
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
                        <motion.div initial={{ x: "300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='flex justify-between h-56'>
                            {/* Job title */}
                            <div className='w-1/3 flex flex-col justify-between mt-4'>
                                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Full stact developer</div>

                                <p className='text-sm font-semibold text-red-600'>6 July - 6 September 2022</p>

                                <div className='flex justify-between items-center'>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Kylo Apps</div>
                                    <Link target="_blank" href="https://drive.google.com/file/d/1BAqo0qdvZ7rs9pVxnUXgRSE_NBvRdJkh/view" className='p-1 rounded bg-white text-sm font-semibold w-fit text-black hover:cursor-pointer'>Display Certificate</Link>
                                </div>

                            </div>

                            <div className='w-1/6'>
                                <div className='w-1 h-full bg-gray-600 rounded relative'>
                                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-600 bg-white -left-2'></div>
                                </div>
                            </div>

                            <div className='w-1/3 mt-4'>
                                <div className='flex flex-col gap-y-2'>
                                    <p className='text-red-600 text-lg italic'>My responsibility was: </p>
                                    <p className=' text-sm italic'>Responsible for the development team.</p>
                                    <p className=' text-sm italic'>Responsible for building pixel perfect and responsive web pages.</p>
                                    <p className=' text-sm italic'>Expert to make reusable components.</p>
                                    <p className=' text-sm italic'>Responsible for the backend development.</p>
                                </div>
                            </div>

                        </motion.div>



                        <motion.div initial={{ x: "300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='flex justify-between h-56'>
                            {/* Job title */}
                            <div className='w-1/3 flex flex-col justify-between mt-4'>
                                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Front-end developer</div>
                                <p className='p-3 text-sm font-semibold text-red-600'>2020 - present</p>
                                <div className='flex justify-between items-center'>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Translense Pvt Ltd</div>

                                    <Link target="_blank" href="https://drive.google.com/file/d/1yqqhCftvIIgZcU2ACOfa3sMwfmRu0lV5/view?usp=sharing" className='p-1 rounded bg-white text-sm font-semibold w-fit text-black hover:cursor-pointer'>Display Certificate</Link>

                                </div>
                            </div>


                            

                            <div className='w-1/6'>
                                <div className='w-1 h-full bg-gray-600 rounded relative'>
                                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-600 bg-white -left-2'></div>
                                </div>
                            </div>

                            <div className='w-1/3 mt-4'>
                                <div className='flex flex-col gap-y-2 w-full'>
                                    <p className='text-red-600 text-lg italic'>My responsibility was: </p>
                                    <p className=' text-sm italic'>Leadership in Development Team Management.</p>
                                    <p className=' text-sm italic'>Precision in Crafting Pixel-Perfect and Responsive Web Pages.</p>
                                    <p className=' text-sm italic'>Mastery in Creating Reusable Components.</p>
                                    <p className=' text-sm italic'>Proficiency in API integrations collaborating with the backend team.</p>
                                </div>
                            </div>

                            

                        </motion.div>



                        <motion.div initial={{ x: "300px" }} animate={isExperienceRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className='flex justify-between h-56'>
                            {/* Job title */}
                            <div className='w-1/3 flex flex-col justify-between mt-4'>
                                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Programming Hero</div>
                                <p className='p-3 text-sm font-semibold text-red-600'>_Learner</p>
                                <div className='flex justify-between items-center'>
                                    <Link href="https://drive.google.com/file/d/1U75QfEEOF50lhVkz8bX6OFtorygqhCWF/view" target='_blank' className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Display Certificate</Link>
                                </div>
                            </div>

                            <div className='w-1/6'>
                                <div className='w-1 h-full bg-gray-600 rounded relative'>
                                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-600 bg-white -left-2'></div>
                                </div>
                            </div>

                            <div className='w-1/3 mt-4'>
                                <div className='flex flex-col gap-y-2 w-full'>
                                    <p className='text-red-600 text-lg italic'>My responsibility was: </p>
                                    <p className=' text-sm italic'>Proficiency in JavaScript Fundamentals and Beyond.</p>
                                    <p className=' text-sm italic'>Expertise in React and Next.js Development.</p>
                                    <p className=' text-sm italic'>Mastery in Advanced Web Development Technologies.</p>
                                    <p className=' text-sm italic'>Team working experience.</p>
                                </div>
                            </div>

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
                                    {letter === ' ' ? '\u00A0' : letter}
                                </motion.span>
                            ))}
                        </div>

                        <div className='p-6'>

                            <Link target='_blank' href="https://www.astronexaspace.com">
                                <button className={`w-full hover:cursor-pointer mb-6 py-[10px] ${HomeComponentCss.blogButton} italic font-semibold text-xl`}>Read Blog</button>
                            </Link>


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