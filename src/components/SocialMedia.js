import React from 'react'
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsPersonLinesFill } from "react-icons/bs";

const SocialMedia = () => {
 const media  = [
    {
        id:1,
        child:(
            <>Gmail<SiGmail size={30}/></>
        ),
        href:"mailto:ganeshit5004@gmail.com",
        download:false
    },
    {
        id:2,
        child:(
            <>Github<FaGithub size={30}/></>
        ),
        href:"https://github.com/ganeshit5004/",
        download:false
    },
    {
        id:3,
        child:(
            <>Linkedin<FaLinkedin size={30}/></>
        ),
        href:"https://www.linkedin.com/in/ganesh-s26",
        download:false
    },
    {
        id:4,
        child:(
            <>Resume<BsPersonLinesFill size={30}/></>
        ),
        href:"/resume.pdf",
        download:true
    }
 ]
  return (
    <div id='social-media' className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {media.map(a => (
                <li   className='flex justify-between items-center w-40 h-10 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-cyan-500 to-blue-600' key={a.id}  ><a href={a.href} className='flex justify-between items-center w-full text-white' target='_blank' rel="noreferrer" download={a.download}  >{a.child}</a></li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialMedia