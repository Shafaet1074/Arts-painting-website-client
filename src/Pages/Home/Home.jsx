
import slide1 from '../../assets/pexels-rahulp9800-1251265.jpg'
import slide2 from '../../assets/pexels-thatguycraig000-1767016.jpg'
import slide3 from '../../assets/pexels-nietjuh-697673.jpg'
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PaintingCard from '../../Components/PaintingCard/PaintingCard';
import Artist from '../../Components/Artist/Artist';
import { useTypewriter } from 'react-simple-typewriter';
import { Fade, Slide } from "react-awesome-reveal";
import { Tooltip } from 'react-tooltip'
import img from '../../assets/images.jpg'
const Home = () => {
  const loadedpaintings =useLoaderData();
  const [paintings,setPaintings] =useState(loadedpaintings);

  const[artists,setArtists] =useState([]);
  useEffect(() =>{
    fetch('Artist.json')
    .then(res=>res.json())
    .then(data=>setArtists(data))
  },[])

  const {text} =useTypewriter({
    words:['Landscape', 'Comic', 'Portrait', 'Oil painting'],
    loop:{},

  })

  return (
    <div className='md:px-20 md:py-10 px-5 py-4  '>
      <div className="carousel   rounded-2xl">
    
    
    <div id="slide1" className="carousel-item relative w-full  ">
      <img src={slide1} className="w-full opacity-4"  />
      
      <div className='text-center text-2xl  md:text-4xl font-bold  text-white absolute z-index  md:top-40 md:right-10 md:left-10 '>
        <div className='text-center md:text-xl font-extralight text-slate-200 '>
        <p>ArtisanHaven: "Where Creativity Blossoms"</p>
        </div>
        <Slide triggerOnce>
        <p>Dive into the world of Painting and Drawing, <br />where every stroke tells a story. </p>
</Slide>
       
        <a 
         data-tooltip-id="my-tooltip"
         data-tooltip-content="Hello world!"
         data-tooltip-place="top"
        
        ><button className='md:text-xl md:mt-5 mt-2 px-6 py-2  bg-slate-100 rounded-lg hover:bg-slate-700 text-black text-center'>Contact Us </button> </a>
      </div>

     
      <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 md:right-5 md:top-1/2 top-36 left-5 right-5 ">
        <a href="#slide4" className="btn btn-circle bg-slate-700 text-white">❮</a> 
        <a href="#slide2" className="btn btn-circle bg-slate-700 text-white">❯</a>
      </div>
    </div> 
    <div id="slide2" className="carousel-item relative  w-full">
      <img src={slide2} className="w-full  h-auto" />
      <div className='text-center text-2xl md:text-4xl font-bold  text-white absolute z-index  md:top-40 md:right-10 md:left-10'>
      <div className='text-center md:text-xl font-extralight text-slate-200'>
      <h1 className='m-2' >ArtisanHaven:  "Where Creativity Blossoms"</h1>
  
        </div>
        <Slide triggerOnce>
        <p>Immerse  Yourself in the World of Painting & Drawing</p>
</Slide>
        
      <a 
   data-tooltip-id="my-tooltip"
  data-tooltip-content="Hello world!"
  data-tooltip-place="top">  <button className='md:text-xl md:mt-5 mt-2 px-6 py-2  bg-slate-100 rounded-lg hover:bg-slate-700 text-black text-center'>Contact Us </button> </a>
   <Tooltip id="my-tooltip" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle bg-slate-700 text-white">❮</a> 
        <a href="#slide3" className="btn btn-circle bg-slate-700 text-white">❯</a>
      </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
      <img src={slide3}className="w-full  h-auto" />
      <div className='text-center text-2xl md:text-4xl font-extrabold  text-black absolute z-index  md:top-40 md:right-10 md:left-10 '>
      <div className='text-center md:text-xl font-bold text-white'>
        <p>ArtisanHaven: "Where Creativity Blossoms"</p>
        </div>

        
        <Slide triggerOnce>
        <p>Embrace Your Creativity: Explore Painting and Drawing Galore</p>
</Slide>
        
        <button className='md:text-xl md:mt-5 md:px-6 md:py-2 px-3 py-1 bg-slate-100 rounded-lg hover:bg-slate-700 text-black text-center'>Contact Us </button> 
        
      </div>
     
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle bg-slate-700 text-white">❮</a> 
        <a href="#slide4" className="btn btn-circle bg-slate-700 text-white">❯</a>
      </div>

     
    </div> 
    
  
  </div>
 
  <div className=" md:p-10 md:mt-5 md:space-y-10 space-y-8 mt-5 md:mb-10 mb-5">
  <hr className="h-1 text-black bg-black"></hr>
 
  <Fade cascade>
        <h1 className="text-center md:text-4xl text-xl font-light text-gray-950 "> ArtisticHaven: Where Every Stroke Tells a Story</h1>
        <p className="text-center  md:text-4xl text-xl text-gray-950 font-bold">Step into our gallery and embark on an artistic journey through a myriad of mediums and styles</p>
</Fade>
  <Fade cascade>
  <div className="md:grid md:grid-cols-2">

{
   paintings.slice(0,6).map(painting=><PaintingCard
    key={painting._id}
   painting={painting}

    
   
   ></PaintingCard>)
}
</div>
</Fade>



      

        <hr className="h-1 text-black bg-black"></hr>
        <Fade cascade>
<h1 className="text-center md:text-4xl text-xl font-light text-gray-950 "> Discover Diverse Artistry"</h1>
        <p className="text-center  md:text-4xl text-xl text-gray-950 font-bold">Our curated collection showcases the richness and breadth of artistic talent, inviting you to experience the beauty and inspiration each artist brings to the canvas.</p>
</Fade>

<Fade cascade>
<div className='md:grid md:grid-cols-3 md:gap-2 space-y-5'>
          {
            artists.map(artist=><Artist
            key={artist.name}
            artist={artist}
            ></Artist>)
          }
        </div>
</Fade>




      </div>
      <Fade cascade>
<section className="py-20 dark:bg-gray-200 dark:text-black ">
	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x rounded-lg">
		<div className="py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>Dhanmodi, Dhaka</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>123456789</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>shalif@gmail.com</span>
				</p>
			</div>
		</div>
	<img src={img} alt="" />
	</div>
</section>
</Fade>
     
     
    </div>
  );
};

export default Home;