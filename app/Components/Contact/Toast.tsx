'use client'
import { IToastProps } from '@/app/Datatypes/interfaces'
import React from 'react'

const Toast: React.FC<IToastProps> = ({ show }) => {
  return (
    <div className={`toast toast-center ${show ? 'block' : 'hidden'}`}>
      <div className="alert alert-success">
        <span>Message sent successfully.</span>
      </div>
    </div>
  )
}

export default Toast