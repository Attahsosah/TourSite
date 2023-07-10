import React, { useState } from 'react'
import FifthTab from './FifthTab'
import FourthTab from './FourthTab'
import SecondTab from './SecondTab'
import SixthTab from './SixthTab'
import ThirdTab from './ThirdTab'


function FirstTab() {
  const[images, setImages] = useState(['https://bellevuetheme-3c99.kxcdn.com/demo/countryside/wp-content/uploads/sites/7/2017/12/cabin_demo_5-605x605.jpg','https://bellevuetheme.com/demo/countryside/wp-content/uploads/sites/7/2017/12/cabin_demo_81-605x605.jpg','']);

  return (
    <div className='grid  grid-cols-3   '>
        {/* <SecondTab />
        <ThirdTab />
        <FourthTab />
        <FifthTab />
        <SixthTab /> */}
      {/* { images.map((img) => (0
        <img src={img} />
      ))} */}
      
       <img src="https://cdn.discordapp.com/attachments/800718490750418967/1083355238523748402/pexels-donald-tong-189333.jpg"/>


      

      <img className="max-h-56 max-w-2xl "  src="https://cdn.discordapp.com/attachments/800718490750418967/1083355239039639562/pexels-pixabay-164595.jpg" />
      <img className="max-h-56 max-w-2xl " src="https://cdn.discordapp.com/attachments/800718490750418967/1083355239752663110/pexels-pixabay-271619.jpg" />
      <img className="max-h-56 max-w-2xl " src="https://cdn.discordapp.com/attachments/800718490750418967/1083355240075640944/pexels-pixabay-279746.jpg" />
      <img className="max-h-56 max-w-2xl " src="https://cdn.discordapp.com/attachments/800718490750418967/1083357747799654530/pexels-pixabay-210265.jpg" />
      <img className="max-h-56 max-w-2xl " src="https://cdn.discordapp.com/attachments/800718490750418967/1083357748395253840/pexels-pixabay-271643.jpg" />

      

        {/* <img className="h-[240px] w-[240px]" src="https://bellevuetheme-3c99.kxcdn.com/demo/countryside/wp-content/uploads/sites/7/2017/12/cabin_demo_5-605x605.jpg" />
        <img src="https://bellevuetheme-3c99.kxcdn.com/demo/countryside/wp-content/uploads/sites/7/2017/12/cabin_demo_4-605x605.jpg" />
        <img src="https://bellevuetheme-3c99.kxcdn.com/demo/countryside/wp-content/uploads/sites/7/2017/12/cabin_demo_8-605x605.jpg" />
        <img src="https://bellevuetheme-3c99.kxcdn.com/demo/countryside/wp-content/uploads/sites/7/2017/12/cabin_demo_27-605x605.jpg" />
        <img src="https://bellevuetheme-3c99.kxcdn.com/demo/countryside/wp-content/uploads/sites/7/2017/12/cabin_demo_3-605x605.jpg" />
        <img src="https://bellevuetheme-3c99.kxcdn.com/demo/countryside/wp-content/uploads/sites/7/2017/12/cabin_demo_81-605x605.jpg" /> */}
        




    </div>
  )
}

export default FirstTab