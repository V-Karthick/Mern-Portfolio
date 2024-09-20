import React from 'react'
import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className='h-screen w-screen flex justify-center bg-black text-white'>
      <div className='h-[100%] w-[30%]  flex flex-col justify-center items-center'>
        <div className='h-[50%] w-[100%]  flex flex-col justify-between items-center'>
          <div className='h-[15%] w-[100%] border-2 border-white flex items-center text-2xl font-bold'>Contact Me!</div>
          <div className='h-[10%] w-[80%] border-2 border-white'></div>
          <div className='h-[60%] w-[100%] border-2 border-white'>
          <div className='h-full w-full flex justify-around items-center'>
            <div><Mail className='text-white h-10 w-10' /></div>
            <div><Linkedin className='text-white h-10 w-10'/></div>
            <div><Github className='text-white h-10 w-10'/></div>
            <div><Phone className='text-white h-10 w-10'/></div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact