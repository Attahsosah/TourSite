import React from 'react'

function Cards({title,text,image}) {
  return (
    <div className='flex'>
        <div className="bg-[#d4d0d037] w-1/2 h-[50px] ">
          <div className='mt-2'>
            <h1>{title}</h1>
            <p>{text}</p>
            <button className="bg-black text-white rounded-3xl p-3">More info</button>
          </div>
        </div>
        <img  className="w-1/2 " src={image} />




    </div>
  )
}

export default Cards