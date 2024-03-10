"use client"

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const items = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "Bee Raw",
        desc: "S new start up business named bee raw having vision and mission to seel the product all over Bangladesh. That start up business needed a e-commarce web application to make the business more organizable and controlled. There a person can choose the product order that and the Bee Raw organization will hand over the product to the customer. There is no authentication system implemented. User need to give their details when they are ready to purchase the product.",
        img: "https://i.ibb.co/JnPx8WY/Screenshot-115.png",
        link: "https://bee-raw-izqn.vercel.app/products",
    },
    {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "PC Builder",
        desc: "This web application is made for personal practice to explore more about the latest technology. By this application user will be able to assume the configarations which will be best suit.",
        img: "https://i.ibb.co/JnPx8WY/Screenshot-115.png",
        link: "https://pc-builder-frontend-app.vercel.app/",
    },
    {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "Hire Shelton Tool",
        desc: "This is a practice project but paid. A client I got from upwork having an assignment. So as per the requirement and documentation I have made this project.",
        img: "https://i.ibb.co/64wCmDx/Screenshot-105.png",
        link: "https://shelton-tool-application.onrender.com/products",
    },
    {
        id: 4,
        color: "from-purple-300 to-red-300",
        title: "Room GPT",
        desc: "If someone has a house and there a lot of object in that house. So with room GPT application we can rearrange the object best fit for our house. Actually the required data and information will be fetched by the help of AI. This was a paid project by the way.",
        img: "https://i.ibb.co/7zcWm8W/Screenshot-107.png",
        link: "https://room-gpt-xi-lemon.vercel.app/",
    },
    {
        id: 5,
        color: "from-purple-300 to-orange-300",
        title: "Ommrito Restaurant",
        desc: "This web application is made to organize the restaurant daily activity and management. User can make them authenticate for the restaurant. Can order the food from home, booking the table at the particular time is also done in this web application.",
        img: "https://i.ibb.co/yPr9FDM/Screenshot-109.png",
        link: "https://restaurant-app-flame.vercel.app/",
    },
    {
        id: 6,
        color: "from-orange-300 to-red-300",
        title: "Authentication Implementation Practice",
        desc: "Authentication implementation with JWT, Google authentication, Github authentication and Facebook authentication are implemented there. This is a practice peoject.",
        img: "https://i.ibb.co/LdQKQQn/Screenshot-110.png",
        link: "https://user-authentication-livid.vercel.app/",
    },
    {
        id: 7,
        color: "from-purple-300 to-red-300",
        title: "Online Trading",
        desc: "This is a paid project. As per the documentation and requirement I have developed this web application. Feel free to visit this.",
        img: "https://i.ibb.co/QJJvgGH/Screenshot-111.png",
        link: "https://online-site.vercel.app/",
    },
    {
        id: 8,
        color: "from-purple-300 to-slate-300",
        title: "Odriyo",
        desc: "When I was in the Translense Pvt Ltd I was a contributor to develop this application with the designing team and backend team. By this application user can find the restaurant and hotel for the particular place in India. This is a production web application with some latest technology like GraphQL, PostgressQL and many more.",
        img: "https://i.ibb.co/XFvM9zc/Screenshot-114.png",
        link: "https://partner-site.vercel.app/",
    },
];

const Portfolio = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            <div className="h-[600vh] relative" ref={ref}>
                <div className='w-screen flex justify-center items-center h-[calc(100vh-96px)] '>
                    <div className=''>
                    <h1 className='text-9xl'>My Works</h1> 
                    <p className="text-red-600">Scroll to bottom</p>                   
                    </div>
                   </div>

                {/* The project showing container */}
                <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
                    <motion.div style={{ x }} className='flex items-center'>
                        <div className='h-screen w-screen flex items-center justify-center bg-black'/>

                        {items.map((item, index) => (
                            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`} key={index}>
                                <div className='flex flex-col gap-8 text-white'>
                                    <h1 className='text-xl font-bold md:text-4xl lg:tex-6xl xl:text-8xl'> {item.title}</h1>
                                    <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                                        <Image src={item.img} alt="" fill />
                                    </div>
                                    {/* The description */}
                                    <p className='w-80 md:w-96 lg:w-[500px]  xl:w-[600px] lg:text-lg'>{item.desc}</p>
                                    <Link target='_blank' className='flex justify-end' href={item.link}><button className='p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>Visit Application</button></Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-black'>
                        <h1 className='text-8xl'>Do you have you project?</h1>
                        <div className='relative'>
                            <motion.svg
                                animate={{ rotate: 360 }}
                                transition={{ duration: 9, ease: "linear", repeat: Infinity }}
                                viewBox="0 0 300 300"
                                className="w-64 h-64 md:w-[500px] md:h-[500px] "
                            >
                                <defs>
                                    <path
                                        id="circlePath"
                                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                                    />
                                </defs>
                                <text fill="white">
                                    <textPath xlinkHref="#circlePath" className="text-xl">
                                        Full stack developer | Front-end Developer
                                    </textPath>
                                </text>
                            </motion.svg>

                            <Link href="/contact" className='w-16 h-16 md:w-28 md:h-28 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center m-auto bg-black text-white rounded-full border border-white'><span className='hover:cursor-pointer'>Hire Me</span></Link>
                        </div>
                    </div>
        </motion.div>
    )
}
export default Portfolio;




// h-[calc(100hv-6rem)]