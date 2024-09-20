import { CircleUser, Cross } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [visible, setvisible] = useState(false)
  const emailref = useRef(null)
  const passwordref = useRef(null)
  return (
    <>
    <div className='h-full w-full  text-white bg-black  flex  justify-center items-center'>
      <div className='h-[90%] w-[90%] flex justify-between'>
          <div className='flex items-center text-xl font-bold'>Portfolio</div>
          <div className=' flex items-center justify-end z-50'>
            <Link className='ml-4 text-xl rounded-xl font-bold transition hover:shadow-inner hover:shadow-white px-2 py-2 active:shadow-md acitve:shadow-white' to="/">Profile</Link>
            <Link className='ml-4 rounded-xl text-xl font-bold transition hover:shadow-inner hover:shadow-white px-2 py-2 active:shadow-md acitve:shadow-white' to="/project">Project</Link>
            <Link className='ml-4 rounded-xl text-xl font-bold transition hover:shadow-inner hover:shadow-white px-2 py-2 active:shadow-md acitve:shadow-white' to="/contact">Contact</Link>
            <CircleUser className='ml-4 h-10 w-10 text-xl font-bold' onClick={()=>setvisible(!visible)} />
          </div>
      </div>
    </div>
    {
                visible && (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50 ">
                            <div className=" h-[40%] w-[30%] bg-red z-50 flex flex-col  bg-gray-900  shadow-lg ">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center  text-white bg-purple-900 text-xl font-bold ">
                                    <div className="w-1/2">
                                        Login
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <Cross onClick={() => setvisible(!visible)} />
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" >
                                        <input type="email" ref={emailref} name="" id="email" placeholder="email" className="p-3 bg-gray-900 w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required />
                                        <input type="password" ref={passwordref} name="" id="password" placeholder="password" className="p-3 bg-gray-900 w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required />
                                        {/* <input type="email" name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} />
                                        <input type="password" name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500" required onChange={handleChange} /> */}
                                        <button type="submit" className="bg-green-900 p-3 text-white w-full rounded-sm text-lg font-bold">   Login</button>
                                    </form>
                                </div>
                                {/* <div className="w-full h-[15%] flex flex-row justify-center items-center">
                                    <button onClick={() => setvisible(!visible)} className="bg-red-500 p-3 text-white w-full h-full rounded-sm text-lg font-bold"> Cancel </button>
                                </div> */}
                            </div>
                        </div>

                    </>
                )
            }
    </>
  )
}

export default Navbar