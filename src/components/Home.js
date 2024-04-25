import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import ganesh from '../assets/ganesh.jpeg'
import { Link } from 'react-scroll';
const Home = () => {
   
  return (
    <div name = 'Home' className='w-full bg-gradient-to-b from-black to-gray-800 via-black py-10 md:py-5'  >
        <div className='max-w-screen-lg mx-auto  py-10 flex flex-col items-center md:flex-row justify-center h-full px-4 '>
            <div className='flex  flex-col justify-center h-full '>
                <h2 className='text-5xl  text-white sm:text-7xl font-bold'>I'm a Front end Developer</h2>
                <p className='text-gray-500 py-4 max-w-md text-justify'>
                    As a budding software developer, I'm driven by a passion for crafting innovative solutions and exploring the vast possibilities of code. I eagerly embrace new technologies, thrive in dynamic environments, and am committed to continuous learning to contribute meaningfully to impactful projects in the field of software development.
                </p>
                <div>
                    <Link to={'Project'} smooth duration={500}><button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>Portfilo<span className='pl-3 group-hover:rotate-90 group-hover:mb-3 duration-300'><FaArrowRight /></span></button></Link>
                </div>
            </div>
            <div>
                <img src={ganesh} alt="profile"  className='rounded-2xl  mx-auto w-2/3 md:w-full mt-10 ' />
            </div>
        </div>
    </div>
  )
}

export default Home