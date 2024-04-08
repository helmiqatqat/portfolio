'use client'
import React from 'react'
import Image from 'next/image'
import sun from '@/public/Assets/SVG/sun.svg'
import moon from '@/public/Assets/SVG/moon.svg'
import { useTheme } from '@/app/Context/Theme'

export default function ThemeButton() {
  const context = useTheme()
  return (
    <label className="btn btn-ghost btn-circle" id='themebutton' onClick={context?.toggleTheme}>
      {
        context?.theme === 'light' ?
          <Image src={sun} alt="light" className="animate-sunSpin" />
          :
          <Image src={moon} alt="dark" className="animate-moonSpin" />
      }
    </label>
  )
}
