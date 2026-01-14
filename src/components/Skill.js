import React from 'react'
import python from '../assets/python.png'
import react from '../assets/react.png'
import sql from '../assets/sql.png'
import pandas from '../assets/pandas.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import github from '../assets/github.svg'
import cypress from '../assets/Cypress.png'

const Skill = () => {
  const skill = [{
        id : 1,
        name: react,
        skill: "React",
        style: "shadow-blue-600"
        },
        {
            id:2,
            name : python,
            skill:"Python",
            style : "shadow-yellow-500"
        },
        {
            id:3,
            name:sql,
            skill : "SQl",
            style : "shadow-blue-200"
        },
        {
            id:4,
            skill:"Pandas",
            name: pandas,
            style : "shadow-blue-500"
        },
        {
            id: 5,
            skill : "HTML",
            name : html,
            style : "shadow-orange-500"
        },
        {
            id:6,
            skill: "CSS",
            name : css,
            style : "shadow-blue-500"
        },
        {
            id:7,
            skill:"Javascript",
            name:js,
            style : "shadow-yellow-500"
        },
        {
            id:8,
            skill:'Github',
            name:github,
            style : "shadow-gray-500"
        },
        {
            id:9,
            name:cypress,
            skill:"Cypress",
            style : "shadow-green-500"
        }
]
  return (
    <div name = 'Skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-full '>
        <div className=' mx-auto p-4 flex flex-col justify-center w-full  text-white '>
            <div className="mx-20">
                <p className='text-white text-4xl font-bold border-b-4 border-gray-500 inline mx-15 '>Prof. Skills</p>
            </div>
            <div className='w-2/3 grid grid-col-2  gap-20 text-center sm:grid-cols-3 px-12 sm:px-0 mx-auto my-10 '>
                {skill.map((a)=>(
                    <div  key={a.id} className={'shadow-md hover:scale-105 duration-300 rounded-lg '+a.style}  >
                    <img src={a.name} alt="profile" className='w-20 h-20 mx-auto text-white bg-transparent aspect-ratio: 1/1' />
                    <p className='mt-8'>{a.skill}</p>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skill