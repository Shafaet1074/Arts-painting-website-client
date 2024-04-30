
import slide1 from '../../assets/pexels-rahulp9800-1251265.jpg'
import slide2 from '../../assets/pexels-thatguycraig000-1767016.jpg'
import slide3 from '../../assets/pexels-nietjuh-697673.jpg'
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import PaintingCard from '../../Components/PaintingCard/PaintingCard';

const Home = () => {
  const loadedpaintings =useLoaderData();
  const [paintings,setPaintings] =useState(loadedpaintings);
  return (
    <div className='md:px-20 md:py-10 px-5 py-4  '>
      <div className="carousel   rounded-2xl">
    
    
    <div id="slide1" className="carousel-item relative w-full  ">
      <img src={slide1} className="w-full opacity-4"  />
      
      <div className='text-center text-2xl  md:text-4xl font-bold  text-white absolute z-index  md:top-40 md:right-10 md:left-10 '>
        <div className='text-center md:text-xl font-extralight text-slate-200 '>
        <p>ArtisanHaven: "Where Creativity Blossoms"</p>
        </div>
        <p>Dive into the world of Painting and Drawing, <br />where every stroke tells a story. </p>
        <button className='md:text-xl md:mt-5 mt-2 px-6 py-2  bg-slate-100 rounded-lg hover:bg-slate-700 text-black text-center'>Contact Us </button> 
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
        <p>ArtisanHaven: "Where Creativity Blossoms"</p>
        </div>
        <p>Immerse  Yourself in the World of Painting & Drawing</p>
        <button className='md:text-xl md:mt-5 mt-2 px-6 py-2  bg-slate-100 rounded-lg hover:bg-slate-700 text-black text-center'>Contact Us </button> 
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

        <p>Embrace Your Creativity: Explore Painting and Drawing Galore</p>
        
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
        <h1 className="text-center md:text-4xl text-xl font-light text-gray-950 "> ArtisticHaven: Where Every Stroke Tells a Story</h1>
        <p className="text-center  md:text-4xl text-xl text-gray-950 font-bold">Step into our gallery and embark on an artistic journey through a myriad of mediums and styles.:{paintings.length}</p>

        {
           paintings.slice(0,6).map(painting=><PaintingCard
            key={painting._id}
           painting={painting}

            
           
           ></PaintingCard>)
        }

      </div>
     
     
    </div>
  );
};

export default Home;