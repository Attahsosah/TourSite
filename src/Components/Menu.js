import { Tab, Tabs } from '@mui/material';

import React, { useState } from 'react'
import FifthTab from './FifthTab';
import FirstTab from './FirstTab';
import FourthTab from './FourthTab';
import SecondTab from './SecondTab';
import SixthTab from './SixthTab';
import ThirdTab from './ThirdTab';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';

// import { Box, Tab, TabList, TabContext, TabPanel } from "@mui/material";

// import TabPanel from '@mui/lab/TabPanel';
function Menu() {
  const [activated, setActivated] = useState('first');
 

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };
  return (
    <div className='grid'>
        
        <div className='absolute bg-white block  w-full top-auto pt-0 justify-between items-center'>
            <h1 className='text-[#f24747] font-Arvo text-[40px] pt-0 top-0 font-extrabold   '>ROOMS & SUITES</h1>
            <div className='relative bg-[#f24747] w-[54px] mr-[5px] ml[5px] mb-[18px] h-[2px] ml-[620px] ' />
            <div className='text-[16px] text-[#151515] font-OpenSans font-extralight'>
                <p className='text-[16px]  '>
                    Choose from a variety of sizes and styles.
                </p>
               
            </div>



<div className='absolute items-center  flex top-auto justify-between px-56  pb-10'>  
    <p className=" mr-[15px] text-[16px]  font-bold font-OpenSans">Sort:</p>
    <Tabs
      // value={value}
      // onChange={handleChange}
      className=""
      textColor="secondary"
      indicatorColor="secondary"
      aria-label="secondary tabs example"
    >
      <Tab value="one" label="All"  onClick={() => setActivated("first")}/>
      <Tab value="two" label="King" onClick={() => setActivated("second")} />
      <Tab value="three" label="Kitchenette" onClick={() => setActivated('third')} />
      <Tab value="four" label="Queen" onClick={() => setActivated('fourth')} />
      <Tab value="five" label="Single Bed" onClick={() => setActivated('fifth')} />
      <Tab value="six" label="Under $99" onClick={() => setActivated('sixth')} />
    </Tabs>

   

</div> 
<div className='pt-10 pb-0' >

{activated === "first" ? <FirstTab  />  : activated === "second" ?  <SecondTab /> : activated === "third" ? <ThirdTab /> : activated === "fourth" ? <FourthTab /> : activated === "fifth" ? <FifthTab /> : activated === "sixth" ? <SixthTab />  : ''}


</div>


<div>

</div>


    
  


            
             


        </div>
    </div>
  )
}

export default Menu