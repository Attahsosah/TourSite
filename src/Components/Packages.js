// import React from 'react'
// import Package from './Package'

// function Packages() {
//   return (
//     <div className='bg-white block'>
//         <h1 className='font-Arvo text-[40px] text-[#F24747] justify-center'>PACKAGES</h1>
//         <p className='font-OpenSans text-[16px] justify-center text-[#151515]'>Choose from some of the most popular vacation packages</p>
        



//          <div className='flex mx-auto pl-20 justify-center '>

//          {/* <div class="card" style="width: 18rem;">
//             <img src="https://media.discordapp.net/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg" class="card-img-top" alt="..." />
//             <div class="card-body">
//                 <h5 class="card-title">Card title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//             </div> */}

       
//              <Package pic='https://media.discordapp.net/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg'  offer='BUY 1 GET 1 FREE' name='Wedding Packages'  description='Nulla at mauris accumsan eros ullamcorper tincidunt at nec ipsum. In iaculis est ut sapien ultrices,'/>
//              <Package pic='https://media.discordapp.net/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg'  offer='BUY 1 GET 1 FREE' name='Wedding Packages'  description='Nulla at mauris accumsan eros ullamcorper tincidunt at nec ipsum. In iaculis est ut sapien ultrices,'/>
//              <Package pic='https://media.discordapp.net/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg'  offer='BUY 1 GET 1 FREE' name='Wedding Packages'  description='Nulla at mauris accumsan eros ullamcorper tincidunt at nec ipsum. In iaculis est ut sapien ultrices,'/>
//         </div>

//     </div>
//   )
// }

// export default Packages
import React from "react";
import PackageCard from "./PackageCard";

const packages = [
  {
    image:"https://media.discordapp.net/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg",
    title: "Wedding  Package",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$9.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    image:"https://media.discordapp.net/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg",
    title: "Winery Tour  Package",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$19.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
  },
  {
    image:"https://media.discordapp.net/attachments/800718490750418967/1052533566136913920/pexels-burak-the-weekender-735869.jpg",
    title: "Take the scenic route",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$29.99/month",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
  },
];

const Packages = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        {packages.map((packag, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 px-4 mb-8">
            <PackageCard {...packag} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
