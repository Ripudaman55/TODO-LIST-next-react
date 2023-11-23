"use client"
import React, { useState } from 'react'
const page = () => {

  const [title, settitle] =  useState("")
  const [desc, setdesc] =  useState("")
  const [mainTask, setMainTask] = useState([
    {
      title: "helo",
      desc: "kush in "
    }
  ])
  const handlesubmit=(e)=>{
    e.preventDefault()
    setMainTask([...mainTask, {title, desc}])
    console.log(mainTask);
    console.log(title)
    console.log(desc)
    settitle("")
    setdesc("") 
  }
  const deletehandler=(i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask);
  }
  let renderTask = <h2> No Task Available</h2>
  if(mainTask.length > 0)
  {

    renderTask = mainTask.map((t,i)=>{
      return(
        <li key={i} className='flex items-center justify-between mb-8'>
        <div className="flex items-center justify-between mb-5 w-2/3">
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <h5 className='text-lg font-medium'>{t.desc}</h5>
        </div>
        <button className='bg-red-400 text-white px-4 ' onClick={()=>{deletehandler(i)}}>DELETE </button>
        </li>
          )
      
  })
  } 
  return (
    <>
      <div className='bg-black bg-center text-white text-center text-4xl font-bold p-10 '>
        <h2>MY Todo List</h2>
      </div>
      <form onSubmit={handlesubmit}>

      <input
        className='text-2xl border-zinc-300 border-4 m-4 px-4 py-2 '
        placeholder='Enter the tasks here....'
        value= {title}
        onChange={(e)=>{  
        settitle(e.target.value)
        }}
        />      
      <input
        className='text-2xl boorder-2 border-zinc-300 border-4 m-4 px-4 py-2 '   
        placeholder='Enter the Description here....'
        value={desc}
        onChange={(e)=>{
        setdesc(e.target.value)
        }}
        />
      <button  className='bg-black text-white p-3 m-5 font-bold rounded'>ADD TASK</button>

      <hr/>
      <div className='p-10 bg-slate-400' >
        <ul> 
          {renderTask}
        </ul>
      </div>
        </form>
    </>
  )
}
export default page
