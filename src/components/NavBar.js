import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
const NavBar = () => {
  const [close,setclose] = useState(false)
  const nav = [
    {
      id:1,
      name:"Home"
    },
    {id:2,
      name:"About"
    },
    {
      id:3,
      name:"Project"
    },
    {
      id:4,
      name:"Skills"
    },
    {
      id:5,
      name:"Contact"
    }
  ]
  return (
    <div className='flex justify-between items-center  w-full h-20 px-4 py-4 text-white bg-black fixed'>
        <div  className='font-signature text-5xl ml-2'>
            <h1>Ganesh</h1>
        </div>
        <ul className='md:flex hidden '>
          { nav.map((a)=>(
            <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200' key={a.id}><Link to={a.name} smooth duration={500} >{a.name}</Link></li>
            ))
          }
        </ul>
        <div onClick={()=>setclose(!close)}className='cursor-pointer z-10 text-gray-500 md:hidden'>
          {close ? <FaTimes size={30}/>:<FaBars size={30}/>}
        </div>
        {close && (
          <ul className='md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
            { nav.map((a)=>(
            <li className='px-4 cursor-pointer capitalize py-6 text-4xl  hover:scale-105 duration-200' key={a.id}><Link to={a.name}  smooth duration={500} onClick={()=>{setclose(!close)}}>{a.name}</Link></li>
            ))
          } 
        </ul>
        )}
    </div>
  )
}

export default NavBar