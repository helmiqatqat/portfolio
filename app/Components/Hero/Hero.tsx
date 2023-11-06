'use client'
import React from 'react'
import { Fade, Slide } from "react-awesome-reveal";
import Image from 'next/image'
import Link from 'next/link';
import laptop from '@/public/Assets/SVG/laptop.svg'
import Wave from '@/public/Background/Wave';

export default function Hero() {
  return (
    <div className="grid-hero relative" >
      <div className='grid-hero-child w-full h-full items-center'>
        <div className='flex justify-center md:justify-start col-span-12 md:col-span-8'>
          <div className='flex flex-col items-center gap-6 lg:gap-8'>
            <Slide className="text-4xl lg:text-4xl xl:text-5xl font-bold text-center inline-block">
              Welcome to my Portfolio!
            </Slide >
            <Fade className="inline-block self-center text-md md:text-lg lg:text-xl xl:text-2xl" delay={1e3} cascade damping={1e-1} >
              I am Helmi Qatqat, Fullstack Web Developer!
            </Fade>
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
