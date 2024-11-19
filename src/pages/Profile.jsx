
import React, { useEffect, useState } from 'react'
import myImg from "../assets/img/myimg.jpg"
import { viewProfile } from '../services/api'

const Profile = () => {
  const[profile, setProfile] = useState([])
  const fetchData = async()=>{
    try {
      const {data} = await viewProfile()
      if(data)
      {
        setProfile(data)
      }
      // console.log(data)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(()=>{
    fetchData();
  
  },[])
  return (
    <div className='h-[100%]  w-screen bg-black flex  flex-col items-center'>
      <div className='h-[80%] w-[80%] flex justify-center items-center'>
            <div className='h-full w-full flex flex-col justify-center ml-6'>
                <div className='  text-white w-[60%] h-[10%] text-5xl my-5 flex  items-center'>Hi I'm {profile.name}!</div>
                <div className=' w-[90%] h-[20%] text-white text-lg'>{profile.content}</div>
            </div>
            <div className='h-[90%] w-[80%] flex justify-center items-center '>
                <div className='h-[50%] w-[50%]  rounded-full'><img src={myImg} className='h-100 w-120 rounded-full border-2 border-white'></img></div>
            </div>
      </div>
        
    </div>
  )
}

export default Profile