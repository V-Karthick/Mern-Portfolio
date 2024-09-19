
import React from 'react'

const Profile = () => {
  return (
    <div className='h-[100%]  w-screen bg-black flex  flex-col items-center'>
      <div className='h-[80%] w-[80%] flex justify-center items-center'>
            <div className='h-full w-full flex flex-col justify-center ml-6'>
                <div className='  text-white w-[60%] h-[10%] text-5xl my-5 flex  items-center'>Hi I'am Karthick!</div>
                <div className=' w-[90%] h-[20%] text-white text-lg'>I’m a full-stack developer specializing in the MERN stack and Java. With strong skills in React for frontend development and Node.js/Java for backend services, I build efficient, scalable web applications. My experience includes working with MongoDB and MySQL for data management, and I've developed projects like e-commerce platforms and blogging websites, emphasizing performance, security, and seamless user experience.</div>
            </div>
            <div className='h-[90%] w-[80%] flex justify-center items-center '>
                <div className='h-[40%] w-[30%] border-2 border-white rounded-full'></div>
            </div>
      </div>
        
    </div>
  )
}

export default Profile