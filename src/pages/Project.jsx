import React from 'react'

const Project = () => {
  const data = [
    {
      img:"1",
      name:"1",
      des:"1",
    },
    {
      img:"2",
      name:"2",
      des:"2",
    },{
      img:"3",
      name:"3",
      des:"3",
    },
    
    
  ]
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-black text-white'>
      <div className='h-[90%] w-[90%] flex flex-col justify-around'>
        <div className='h-[10%] w-[40%] border-2 border-white'></div>
        <div className='h-[70%] w-[100%] border-2 border-black flex flex-wrap justify-between'>
          {
            data.map((item, index)=>(
              <div className='h-[80%] w-[30%] border-2 border-white flex flex-col justify-center items-center' key={index}>
                <div className='h-[90%] w-[90%] border-2 border-black flex flex-col justify-between'>
                  <div className='h-[50%] border-2 border-white'></div>
                  <div className='h-[10%] border-2 border-white'></div>
                  <div className='h-[30%] border-2 border-white'></div>
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