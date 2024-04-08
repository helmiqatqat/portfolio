'use client'
import React, { useState } from 'react'
import { sendEmail } from '@/public/sendEmail'
import Toast from './Toast'
import submitIcon from '@/public/Assets/SVG/message.svg'
import Image from 'next/image'
import { TFormData } from '@/app/Datatypes/types'



const Form: React.FC = () => {
  const [show, setShow] = useState<boolean>(false)
  const [formData, setFormData] = useState<TFormData>({
    name: '',
    email: '',
    msg: ''
  })
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value });
  }
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await sendEmail(formData);
    setFormData({
      name: '',
      email: '',
      msg: ''
    })
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }
  return (
    <>
      <form onSubmit={submitHandler} className='w-full md:w-1/2 flex flex-col gap-5 col-span-1 row-span-2 justify-center'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' name='name' placeholder='John Doe'
            onChange={changeHandler} value={formData.name} required={true}
            className='p-4 rounded-lg bg-gray-50 focus-visible:outline-[1px] focus-visible:outline-sky-600'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' name='email' placeholder='John@example.com'
            onChange={changeHandler} value={formData.email} required={true}
            className='p-4 rounded-lg bg-gray-50 focus-visible:outline-[1px] focus-visible:outline-sky-600'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='message'>Message</label>
          <textarea name="msg" required={true} value={formData.msg} onChange={changeHandler} id="message" cols={30} rows={10} placeholder='Write your message here'
            className='p-4 rounded-lg bg-gray-50 focus-visible:outline-[1px] focus-visible:outline-sky-600 resize-none'
          />
        </div>
        <button type='submit' className='btn w-fit py-3 px-6 self-end bg-sky-700 hover:bg-sky-900 uppercase text-white bold'>
          <span>send</span>
          <Image src={submitIcon} alt='submit' className={`${show && 'animate-submit'}`} />
        </button>
      </form>
      <Toast show={show} />
    </>
  )
}

export default Form