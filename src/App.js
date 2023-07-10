import './App.css';
import Accomodations from './Components/Accomodations';
import Atmosphere from './Components/Atmosphere';
import Banner from './Components/Banner';
import Features from './Components/Features';
import Gallery from './Components/Gallery';
import HeroCarousel from './Components/HeroCarousel';
import ImageCarousel from './Components/ImageCarousel';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar'; 
import Packages from './Components/Packages';
import Questions from './Components/Questions';
import Swiper from './Components/Swiper';
import Testimonials from './Components/Testimonials';
import VideoPlayer from './Components/VideoPlayer';
function App() {

  const images = [
    { src:"https://cdn.discordapp.com/attachments/800718490750418967/1083355239039639562/pexels-pixabay-164595.jpg", alt: 'Image 1', category:'Kitchenette' },
    { src:"https://cdn.discordapp.com/attachments/800718490750418967/1083355239752663110/pexels-pixabay-271619.jpg", alt: 'Image 2', category:'Kitchenette' },
    { src:"https://cdn.discordapp.com/attachments/800718490750418967/1083355240075640944/pexels-pixabay-279746.jpg", alt: 'Image 3', category:'Kitchenette' },
    { src:"https://cdn.discordapp.com/attachments/800718490750418967/1083355240075640944/pexels-pixabay-279746.jpg", alt: 'Image 4', category:'Kitchenette' },
    { src:"https://cdn.discordapp.com/attachments/800718490750418967/1083355240075640944/pexels-pixabay-279746.jpg", alt: 'Image 5', category: 'Under $99' }, 
    { src:"https://cdn.discordapp.com/attachments/800718490750418967/1083355239039639562/pexels-pixabay-164595.jpg", alt: 'Image 6',  category:'Under $99' },



    // ...
  ];
  return (
    <div className="App ">
      <Navbar />
      <HeroCarousel />
      <Swiper />
      <ImageCarousel />
      <Banner />
      <div className="container mx-auto pb-0">
      <Gallery images={images}  />
    </div>
      {/* <Menu /> */}
      {/* <Features /> */}
      <Atmosphere />
      <Testimonials />
      <Packages />
      <Accomodations />
      <VideoPlayer src='https://cdn.discordapp.com/attachments/800718490750418967/1126842099237654630/video_1080p.mp4'/>
       <Questions />
      
    </div>
  );
}

export default App;
