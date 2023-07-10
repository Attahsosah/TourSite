import React from 'react'

function Questions() {
  return (
    <div className='p-10 bg-white'>
        <div className='justify-center font-Arvo text-[#f24747] text-[40px] px-8  border-[#f24747] pb-9'> Questions?</div>
        <div className='flex justify-evenly'> 

            <div className='border-r-4 justify-start'>
                <input placeholder="Name"   type="text" />

            </div>


                

            <div className='border-solid justify-center'>
                 <input placeholder="Email Address"   type="email" />

            </div>

            <div className='border-r-4  justify-end'>
                  <input placeholder="Question/Comment"   type="text" />

            </div>

            
        </div>
    </div>
  )
}

export default Questions