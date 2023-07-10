import React from 'react'
import Slider from "react-slick";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCards, Autoplay, FreeMode, Navigation } from "swiper"

function ImageCarousel()  {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
            <Swiper
            
            spaceBetween={-198}
            slidesPerView={3}
            autoplay={{
              disableOnInteraction:false,
              pauseOnMouseEnter:false,
              waitForTransition:true,
              
              speed:1,
              delay:2000
            
            }}
            
            thumbs={true}
            parallax={{
              enabled:true,
            }}
            
           
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}

            freeMode={{
              minimumVelocity:0.02
            }}
                
            
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[EffectCards, Autoplay, FreeMode]}
            
            className='mt-48 scroll-mx-56 overflow-hidden  '
        > 

            <SwiperSlide ><img 
               src="https://cdn.discordapp.com/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg" /></SwiperSlide>
           <SwiperSlide>
                <img src="https://cdn.discordapp.com/attachments/800718490750418967/1052533565864300624/pexels-pixabay-326281.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img  src="https://cdn.discordapp.com/attachments/800718490750418967/1052533565646176277/pexels-clem-onojeghuo-175745.jpg" />
            </SwiperSlide>
             <SwiperSlide>
                <img src="https://cdn.discordapp.com/attachments/800718490750418967/1052533565436465232/pexels-sammsara-luxury-modern-home-1011195.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://cdn.discordapp.com/attachments/800718490750418967/1052533565218377748/pexels-chait-goli-1918291.jpg" />
            </SwiperSlide>
            
         </Swiper>
        
    
        // <Slider {...settings} className='  pt-44 flex  '>
        //     <div  className=''>
        //         <img 
        //         src="https://cdn.discordapp.com/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg"
                
                
        //         />
        //     </div>
        //     <div className=''>
        //         <img 
        //             src="https://cdn.discordapp.com/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg"
                    
                    
        //             />
                
        //     </div>

        //     <div className=''>
        //     <img 
        //         src="https://cdn.discordapp.com/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg"
                
                
        //         />
                
        //     </div>
        //     <div className=''>
        //     <img 
        //         src="https://cdn.discordapp.com/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg"
                
                
        //         />
                
        //     </div>
        //     <div className=''>
        //     <img 
        //         src="https://cdn.discordapp.com/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg"
                
                
        //         />
                
        //     </div>


    


        // </Slider>


    
  )
}

export default ImageCarousel 