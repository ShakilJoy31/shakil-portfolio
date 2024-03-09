"use client"

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import HomeComponentCss from '../../style/Home.module.css';

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const form = useRef<HTMLFormElement | null>(null);
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(form.current);
        e.preventDefault();
        if (!form.current) {
            console.error("Form reference is null");
            return;
        }

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID as string, process.env.NEXT_PUBLIC_TEMPLATE_ID as string, form.current, {publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY as string,})
          .then(res => {
                setSuccess(true);
            },
            (error) => {
                setError(error.text);
            },
          );
      };

    const text = "Say Hello 😍 😊";

    return (
        <motion.div className="h-full" initial={{y: "-200vh"}} animate={{y: "0%"}} transition={{duration: 1}}>
        <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* Text container */}
            <div className='h-full lg:w-1/2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white flex justify-center items-center'>
                <div>
                {text.split("").map((letter, index) => (
                    <motion.span key={index} initial={{opacity: 1}} animate={{opacity: 0}} transition={{duration: 3, repeat: Infinity, delay: index * 0.1}} className=''>
                        {letter}
                    </motion.span>
                ))}
                </div>
            </div>

            {/* Form container */}
            <form ref={form} onSubmit={sendEmail} action="" className={`h-full lg:w-1/2 rounded-xl text-xl flex flex-col gap-8 justify-center xl:p-24 lg:p-20 md:p-16 p-4 ${HomeComponentCss.contactFormBackgroundColor}`}>
                <span>Dear Developer, </span>
                <textarea rows={6} className='bg-transparent border-b-2 border-b-white outline-none resize-none' name="user_message" />

                <span>My mail address is: </span>
                <input className='bg-transparent border-b-2 bborder-b-white outline-none' type="text" name="user_email" />
                <span>Regards</span>
                <button className={`font-semibold p-4 ${HomeComponentCss.blogButton}`}>Send</button>

                {success && <span className='text-green-700 flex justify-center'>Your message is sent successfully! Thank you.</span>}

                {error && <span className='text-red-600 flex justify-center'>Failed to send your message. <motion.span initial={{opacity: 1}} animate={{opacity: 0}} transition={{duration: 3, repeat: Infinity, delay: 0.1}} className=''>
                Try again
                    </motion.span></span>}
            </form>
        </div>
        </motion.div>
    )
}
export default Contact; 