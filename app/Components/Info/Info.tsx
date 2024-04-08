import React from 'react'
import About from './About'
import Skills from './Skills'

const Info: React.FC = () => {
  return (
    <div className='py-[58px]' id='about'>
      <About />
      <Skills />
    </div>
  )
}

export default Info