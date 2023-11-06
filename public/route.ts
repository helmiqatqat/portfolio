'use server'

import { Resend } from 'resend';

const resend = new Resend('re_V3oMznx7_5yczn7H3LcneYGgPNm8Dzv3f');
type TFormData = {
  name: string,
  email: string,
  msg: string
}  
export const sendEmail = async (formData: TFormData) => {
  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'hilmyqutqut@gmail.com',
    subject: `Portfolio Message`,
    html: `
    <h1>Porfolio Messsage</h1>
    <h3>From: ${formData.name}</h3>
    <hr/>
    <h3>Message:</h3>
    <p>${formData.msg}</p>
    `
  });
}