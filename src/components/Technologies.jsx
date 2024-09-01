import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { motion } from "framer-motion"
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandKotlin } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        },
    },
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Technologies
        </motion.h2>
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 1, x: -100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>


            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className='text-7xl text-yellow-300'/>
            </motion.div>


            <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssLine className='text-7xl text-blue-400'/>
            </motion.div>

            <motion.div 
             variants={iconVariants(2)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className='text-7xl text-blue-500'/>
            </motion.div>

            <motion.div
             variants={iconVariants(6)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandKotlin className='text-7xl text-purple-500'/>
            </motion.div>
            <motion.div 
             variants={iconVariants(4)}
             initial="initial"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className='text-7xl text-red-500'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies