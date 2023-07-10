import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function HeroCarousel() {
  return (
    <Carousel 

    autoPlay={false}
    autoFocus={true}
    emulateTouch={true}
    transitionTime={1000}
    showThumbs={false}
    showStatus={false}
    infiniteLoop={true}
    swipeAnimationHandler={true}
    swipeable={true}
    interval={6000}
    

    className="z-0   bg-contain relative  object-conatin w-full  -top-32 "
    
    >
                <div className='h-[60vw] object-cover items-center '>
                    <img src="https://cdn.discordapp.com/attachments/800718490750418967/1052378998312800257/pexels-porapak-apichodilok-373639.jpg" />
                   <div className=" absolute md:pr-[50px] flex-col items-center  top-20  z-10 text-white w-full justify-between lg:pl-[800px] pt-[200px] text-[30px] pr-0">
                     <h2 className='font-Arvo'> COUNTRYSIDE CHARM</h2>
                     <p className='text-[22px] font-thin text-[#FFFFFF] pl-11'>Rooms from $99 / night</p>
                     

                    </div>
                </div>
                <div className='h-[60vw] object-cover'>
                    <img src="https://cdn.discordapp.com/attachments/800718490750418967/1052378274040401960/pexels-rolandas-augutis-3258665.jpg" />
                    <div className=" absolute md:pr-[600px] flex-col items-center  top-20  z-10 text-white w-full justify-between lg:pl-0.5  pt-[200px] text-[30px] pr-0">
                     <h2 className='font-Arvo'> COUNTRYSIDE CHARM</h2>
                     <p className='text-[22px] font-thin text-[#FFFFFF] pl-11'>Rooms from $99 / night</p>

                    </div>
                </div>
                <div className='h-[60vw] object-cover justify-start'>
                    <img src="https://cdn.discordapp.com/attachments/800718490750418967/1052361700793389136/pexels-jonathan-petersson-1198507.jpg" />
                    <div className=" absolute md:pr-[50px] font-bold flex-col items-center  top-0  z-10 text-white opacity-100 w-full justify-between lg:pl-0.5  pt-[200px] text-[30px] pr-0">
                     <h2 className='font-Arvo'> COUNTRYSIDE CHARM</h2>
                     <p className='text-[22px] font-thin text-[#FFFFFF] pl-11'>Rooms from $99 / night</p>

                    </div>
                </div>
               
                
    </Carousel>
  )
}

export default HeroCarousel