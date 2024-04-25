import React, { useState } from 'react'


const Contact = ({sendEmail}) => {
  
    const [value,setvalue] = useState('')
    const [mail,setmail] = useState('')
    const [message,setmessage] = useState('')
    const valueChange = () =>{
            setvalue('')
            setmail('')
            setmessage(' ')
    }
   return (
    <div name='Contact' className=' h-full w-full bg-gradient-to-b from-black to-gray-800 text-white'>
        <div  className='flex flex-col p-4 justify-center  max-w-screen-lg mx-20 h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p  className='py-6'> Submit the form below to get in touch with me</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <form  className='flex flex-col w-full md:w-1/2' onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Enter your name' required 
                    className='p-2 bg-transparent border-2  rounded-md text-white focus:outline-none' value={value} onChange={(e)=>setvalue(e.target.value) } />
                    <input type="text" name='mail' placeholder='Enter your mail' required
                    className='my-4 p-2 bg-transparent border-2  rounded-md text-white focus:outline-none'  value={mail} onChange={(e)=>setmail(e.target.value) } />
                    <textarea name="message" placeholder='Enter the message' id="" cols="30" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' value={message} onChange={(e)=>setmessage(e.target.value)} required></textarea>
                    <button className={'text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex itexm-center rounded-md hover:scale-110 duration-300 '} onClick={()=>valueChange()}>Let's talk</button>
                   
                </form>
            </div>
         </div>
        <div>

        </div>
    </div>
    
  )
}

export default Contact
