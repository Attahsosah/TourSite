import React from 'react'

function Package({pic, offer, name, description}) {
  return (
    <div className='block px-4  border-spacing-4   rounded-xl '>
        <div  className=' h-[281.97px] justify-center border-transparent  '>
            <img   src={pic} />

        </div>
        <div className=' bg-[#F1F1F1] w-[366.66px] justify-center '>
            <p>{offer}</p>
            <h1>{name}</h1>
            <p>{description}</p>
            

        </div>



    </div>
  )
}

export default Package