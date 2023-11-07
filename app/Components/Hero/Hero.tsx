'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { motion } from "framer-motion";
import laptop from '@/public/Assets/SVG/laptop.svg'
import Wave from '@/public/Background/Wave';

const h1 = "Welcome To My Porfolio"
const p = "I am Helmi Qatqat, Fullstack Web Developer!"
export default function Hero() {
  return (
    <div className="grid-hero relative" >
      <div className='grid-hero-child w-full h-full items-center'>
        <div className='flex justify-center md:justify-start col-span-12 md:col-span-8'>
          <div className='flex flex-col items-center gap-6 lg:gap-8'>
            {/*  */}
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl lg:text-4xl xl:text-5xl font-bold text-center inline-block"
            >
              {h1}
            </motion.h1>
            <motion.p
              className="inline-block self-center text-md md:text-lg lg:text-xl xl:text-2xl"
            >
              {p.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.p>
            <Link
              href="/Assets/PDF/HelmiQatqatCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type='button' className='btn self-center bg-sky-700 hover:bg-sky-900 text-white border-0'
              >
                Download CV
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-4 animate-float mb-16 lg:mb-0 hidden md:block" >
          <Image src={laptop} alt='hero' className='w-full' />
        </div>
      </div>
      <Wave />
    </div>
  )
}
