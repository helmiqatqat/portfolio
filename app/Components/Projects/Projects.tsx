import React from 'react'
import { projects } from '@/public/Assets/Projects/Images'
import Card from './Card'

const Projects: React.FC = () => {
  return (
    <div className='grid-parent py-[58px] relative overflow-clip' id='projects'>
      <div className='contact-bg w-[200%] h-[200%] absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
      <div className='section'>
        <div className='section-title'>
          <h2 className='text-[#A6ADBA]'>Projects</h2>
        </div>
        <div className='section-content grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-center'>
          {projects.map((project, i) => (
            <Card {...project} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects