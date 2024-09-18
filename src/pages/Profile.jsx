import { Github, Linkedin, LinkedinIcon, LucideLinkedin, Mail, Phone } from 'lucide-react'
import React from 'react'

const Profile = () => {
  return (
    <div className='h-screen w-screen bg-black flex  flex-col items-center'>
      <div className='h-[80%] w-screen flex justify-center'>
            <div className='h-screen w-screen flex flex-col justify-center ml-6'>
                <div className='border-2 border-white  text-white w-[60%] h-[10%] my-5'></div>
                <div className='border-2 border-white w-[80%] h-[20%]'></div>
            </div>
            <div className='h-screen w-screen flex justify-center items-center'>
                <div className='h-[40%] w-[40%] border-2 border-white rounded-full'></div>
            </div>
      </div>
        <div className='h-screen w-[40%]  flex justify-around items-center'>
          <div><Mail className='text-white h-10 w-10' /></div>
          <div><Linkedin className='text-white h-10 w-10'/></div>
          <div><Github className='text-white h-10 w-10'/></div>
          <div><Phone className='text-white h-10 w-10'/></div>
        </div>
    </div>
  )
}

export default Profile