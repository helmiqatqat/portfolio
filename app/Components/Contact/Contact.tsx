import React from 'react'
import Envelope from './Envelope'
import Form from './Form'

export default function Contact() {
  return (
    <div className='grid-parent py-16 relative overflow-clip' id='contact'>
      <div className='contact-section rounded-xl'>
        <div className='section-title'>
          <h2>Contact</h2>
        </div>
        <div className='section-content flex gap-8 md:gap-16 flex-col md:flex-row items-center'>
          <Envelope/>
          <Form />
        </div>
      </div>
    </div>
  )
}
