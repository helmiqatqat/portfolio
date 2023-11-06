'use client'
import React from 'react'
import skills from '@/public/Assets/Skills/Skills'
import Image from 'next/image'

export default function Skills() {
  return (
    <div className='grid-parent pt-[58px]' id='skills'>
      <div className='section'>
        <div className='section-title'>
          <h2>Skills</h2>
        </div>
        <div className='section-content flex flex-wrap gap-8 justify-center'>
            {skills.map((skill, i) => (
              <div key={i} className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 hover:-translate-y-4 hover:scale-110 transition-all duration-300">
                <Image src={skill.icon} alt={skill.title} className='w-full h-full' />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}