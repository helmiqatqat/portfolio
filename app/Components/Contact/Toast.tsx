'use client'
import React from 'react'
type TProps = {
  show: boolean
}
export default function Toast(props: TProps) {
  return (
    <div className={`toast toast-center ${props.show ? 'block' : 'hidden'}`}>
      <div className="alert alert-success">
        <span>Message sent successfully.</span>
      </div>
    </div>
  )
}
