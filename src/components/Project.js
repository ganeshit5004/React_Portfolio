import React from 'react'
import crudapp from '../assets/crudapp.png'
import food from '../assets/food.png'
import weather from '../assets/weather_dashboard.png'
import todo from '../assets/todo.png'

const Project = () => {
  return (
    <div name='Project' className="h-full w-full px-20 py-20 bg-gradient-to-b from-black to-gray-800" id="photos">
      <h2 className="text-white py-2 text-4xl font-bold border-b-4 border-gray-500 inline my-5">Project</h2>



      <div className="flex flex-wrap my-4 py-10">
        <div className="w-full sm:w-1/2 p-4">
           <a href="../" target="_blank" rel="noopener noreferrer">
              <img src={food} className="w-full  hover:scale-105 duration-300 aspect-ratio: 1 / 1" alt='profile'/>
          </a>
          

          <h3 className="text-xl text-white mt-2">Food delivery website with WhatsApp billing</h3>
          <h6 className="text-gray-400">Programming language: HTML, CSS, PHP, Python, and SQL</h6>
        
        </div>

        <div className="w-full sm:w-1/2 p-4">
        <a href="https://marvelous-pixie-e898a1.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img src={weather} className="w-full  hover:scale-105  duration-300" alt='profile' sizes={30} />
          </a>
          <h3 className="text-xl text-white mt-2">Static Weather Dashboard</h3>
          <h6 className="text-gray-400">Programming language: HTML, CSS, and JavaScript</h6>
        </div>
        <div className="w-full sm:w-1/2 p-4">
        <a href="../" target="_blank" rel="noopener noreferrer">
          <img src={crudapp} className="w-full  hover:scale-105  duration-300" alt='profile'  sizes={30} />
          </a>
          <h3 className="text-xl text-white mt-2">CRUD APP By Python Django</h3>
          <h6 className="text-gray-400">Programming language: Python - Django, HTML, CSS, and Bootstrap</h6>
          </div>
          <div className="w-full sm:w-1/2 p-4">
          <img src={todo} className="w-full  hover:scale-105  duration-300" alt='profile'  sizes={30}/>
          <h3 className="text-xl text-white mt-2">TODO APP</h3>
          <h6 className="text-gray-400">Programming language: React</h6>
          </div>
      </div>
</div>

  )
}

export default Project
