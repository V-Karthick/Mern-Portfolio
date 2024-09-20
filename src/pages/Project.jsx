import React from 'react'
import penImg from "../assets/img/pen2.jpg"
import chatImg from "../assets/img/chatApp.png"
import bloomsImg from "../assets/img/nillaBlooms.webp"
const Project = () => {
  const data = [
    {
      img:penImg,
      name:"Blog Ware",
      des:"A MERN blogging website that helps to share your ideas",
    },
    {
      img:chatImg,
      name:"Safe Chat",
      des:"A chat application that safeguards your chats from the organization",
    },{
      img:bloomsImg,
      name:"Nilla Blooms",
      des:"A Flower ecommerce website that cloned from official website \"Nilla Blooms\"",
    },
    
    
  ]
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-black text-white'>
      <div className='h-[90%] w-[90%] flex flex-col justify-around'>
        <div className='h-[10%] w-[40%]  flex justify-start items-center text-white text-4xl font-bold  '>My Projects!</div>
        <div className='h-[70%] w-[100%] border-2 border-black flex flex-wrap justify-between'>
          {
            data.map((item, index)=>(
              <div className='h-[80%] w-[30%]   flex flex-col justify-center items-center transition transform hover:scale-110 hover:shadow-lg hover:shadow-white hover:border-white hover:border-2' key={index}>
                <div className='h-[90%] w-[90%]  flex flex-col justify-between'>
                  <div className='h-[50%]'><img className='w-[100%] h-[100%]' src={item.img}></img></div>
                  <div className='h-[15%] flex justify-center items-center text-white text-2xl font-extrabold  text-center'>{item.name}</div>
                  <div className='h-[25%] text-center flex justify-center items-center'>{item.des}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project