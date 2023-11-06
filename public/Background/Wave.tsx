import React from 'react'
import wave from '../Assets/SVG/wave.svg'
import Image from 'next/image'

export default function Wave() {
  return (
    <div
    className='row-span-1'
    style={{width: '100%', position: 'absolute', bottom: '0', zIndex: '-1', overflow: 'hidden'}}>
      <Image className='w-full h-full' src={wave} alt={'wave'}/>
    </div>
  )
}
