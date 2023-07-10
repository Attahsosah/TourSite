import React from 'react'

function Reverse({title,text,image}) {
  return (
    <div className='flex'>
     <img  className="w-1/2" src={image} />
    <div className="bg-[#d4d0d037] w-1/2  ">
      <div className='mt-10'>
        <h1 className='font-Arvo font-bold text-3xl'>{title}</h1>
        <p>{text}</p>
        <button className="bg-black text-white rounded-3xl p-3">More info</button>
        </div>

    </div>
   




</div>
  )
}

export default Reverse