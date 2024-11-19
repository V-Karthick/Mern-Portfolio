import React from 'react'
import penImg from "../assets/img/pen2.jpg"
import chatImg from "../assets/img/chatApp.png"
import bloomsImg from "../assets/img/nillaBlooms.webp"
import { FolderKanban, Pencil, Trash2 } from 'lucide-react'
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
    {
      img:bloomsImg,
      name:"Nilla Blooms",
      des:"A Flower ecommerce website that cloned from official website \"Nilla Blooms\"",
    },
    
  ]
  return (
    <div className='h-full w-full flex justify-center items-center bg-black text-white'>
      <div className='h-[90%] w-[90%]  flex flex-col justify-around'>
        <div className='h-[10%] w-[40%]  flex justify-start items-center text-white text-4xl font-bold  '>My Projects!</div>
        <div className='h-[80%] w-[100%] p-4 overflow-y-auto no-scrollbar border-2 border-black flex justify-center items-center '>
        <div className='h-[95%] w-[90%] flex flex-wrap justify-around'>
          {
            data.map((item, index)=>(
              <div className='h-[85%] w-[30%]   flex flex-col justify-center items-center
              border-2 border-gray-700 transition transform hover:scale-110 hover:shadow-lg hover:shadow-white hover:border-white hover:border-2 m-3' key={index}>
                <div className='h-[90%] w-[90%]  flex flex-col justify-between'>
                  <div className='h-[50%] flex justify-center items-center'><FolderKanban className='h-[70%] w-[70%] text-gray-700' /></div>
                  <div className='h-[15%] flex justify-center items-center text-white text-2xl font-extrabold  text-center'>{item.name}</div>
                  <div className='h-[25%] text-center flex justify-center items-center'>{item.des}</div>
                  <div className=' flex justify-between items-center h-[15%]'>
                  <Pencil className='text-white' />
                  <Trash2 className='text-white'/>
                  </div>
                </div>
              </div>
            ))
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project