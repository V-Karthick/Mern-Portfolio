import React from 'react'
import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <div className='h-full w-full flex justify-center bg-black text-white'>
      <div className='h-[100%] w-[30%]  flex flex-col justify-center items-center'>
        <div className='h-[60%] w-[100%]  flex flex-col justify-between items-center'>
          <div className='h-[15%] w-[100%] flex justify-center items-center text-2xl font-bold'>Contact Me!</div>
          
          <div className='h-[70%] w-[100%] flex justify-center items-center'>
          <div className='h-[90%] w-[90%] flex justify-center items-center flex-wrap'>
            <div className='transition transform h-[50%] w-[50%] rounded-md hover:shadow-lg hover:shadow-white   flex justify-center items-center'><Mail className='text-white h-10 w-10' /></div>
            <div className='transition transform rounded-md hover:shadow-lg hover:shadow-white h-[50%] w-[50%] flex justify-center items-center'><Linkedin className='text-white h-10 w-10 '/></div>
            <div className='transition transform rounded-md hover:shadow-lg hover:shadow-white h-[50%] w-[50%] flex justify-center items-center'><Github className='text-white h-10 w-10'/></div>
            <div className='transition transform rounded-md hover:shadow-lg hover:shadow-white h-[50%] w-[50%] flex justify-center items-center'><Phone className='text-white h-10 w-10'/></div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact