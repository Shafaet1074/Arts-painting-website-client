import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/effect-fade"; 
import "swiper/css/pagination";

import slide1 from "../../assets/pexels-rahulp9800-1251265.jpg";
import slide2 from "../../assets/pexels-thatguycraig000-1767016.jpg";
import slide3 from "../../assets/pexels-nietjuh-697673.jpg";
import PaintingCard from "../../Components/PaintingCard/PaintingCard";

const Home = () => {
  const loadedPaintings = useLoaderData();
  const [paintings] = useState(loadedPaintings);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] dark:bg-[#0F1014] text-[#2D2B2A] dark:text-[#EAE9E5] transition-colors duration-500 overflow-hidden font-sans">
      
      {/* --- Ambient Creative Background (Aurora Glow) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none hidden md:block">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-amber-400/20 dark:bg-amber-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      {/* Main Content Wrapper (z-10 to stay above the glow) */}
      <div className="relative z-10">
        
        {/* 1. Creative Hero Section (Responsive Fixes Applied) */}
        <div className="w-full h-[60vh] min-h-[450px] md:min-h-[600px] md:h-[85vh] relative px-4 sm:px-6 lg:px-10 pt-4 lg:pt-6">
          <div className="w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl relative">
            <Swiper
              modules={[Autoplay, Pagination, EffectFade]}
              effect="fade"
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="w-full h-full"
            >
              {[slide1, slide2, slide3].map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={slide}
                    alt={`Art Slide ${index + 1}`}
                    className="w-full h-full object-cover transform scale-105 transition-transform duration-[10000ms] ease-linear"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Frosted Glass Overlay Content */}
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center p-4 sm:p-6 pointer-events-none">
              <Fade direction="up" triggerOnce>
                <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 border border-white/20 p-6 sm:p-10 md:p-16 rounded-2xl md:rounded-3xl text-center pointer-events-auto shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] w-[95%] max-w-3xl mx-auto">
                  <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-3 md:mb-4 drop-shadow-lg">
                    Where Creativity <span className="text-amber-300 italic block sm:inline">Blossoms</span>
                  </h1>
                  <p className="text-sm sm:text-base md:text-xl text-gray-100 font-light mb-6 md:mb-8 drop-shadow-md px-2">
                    Immerse yourself in a curated sanctuary of color, emotion, and imagination.
                  </p>
                  <a
                    href="#gallery"
                    className="inline-block bg-white/20 hover:bg-white/40 border border-white/50 text-white font-medium py-3 px-8 md:px-10 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 text-sm md:text-base"
                  >
                    Explore Collection
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 space-y-24 md:space-y-32">
          
          {/* 2. Asymmetrical About Section (Collage Responsive Fix) */}
          <section>
            <Fade direction="up" triggerOnce>
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative">
                
                {/* Image Collage */}
                <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] w-full mt-6 lg:mt-0 order-2 lg:order-1">
                  <img
                    src="https://i.ibb.co.com/5jr05VM/ARVA34-Hero.jpg"
                    alt="Gallery Wall"
                    className="absolute top-0 left-0 w-[75%] h-[220px] sm:h-[300px] md:h-[400px] object-cover rounded-2xl shadow-xl z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                  <img
                    src={slide2} 
                    alt="Artist at work"
                    className="absolute bottom-0 right-0 w-[65%] h-[180px] sm:h-[220px] md:h-[300px] object-cover rounded-2xl shadow-2xl z-20 border-4 border-[#FAF9F6] dark:border-[#0F1014] transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
                
                {/* Text Content */}
                <div className="lg:w-1/2 space-y-6 md:space-y-8 order-1 lg:order-2 text-center lg:text-left">
                  <div className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs md:text-sm font-semibold tracking-widest uppercase">
                    Our Vision
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight">
                    More than a gallery. <br className="hidden sm:block"/> A <span className="italic text-purple-600 dark:text-purple-400">living canvas.</span>
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed opacity-80">
                    At ArtisanHaven, we believe art is an experience, not just an object. Our platform bridges the gap between visionary creators and passionate collectors, offering a dynamic space where stories are told through every brushstroke.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed opacity-80 pb-4">
                    Whether you're discovering your first piece or exhibiting your masterpiece, you belong in our vibrant community.
                  </p>
                </div>
              </div>
            </Fade>
          </section>

          {/* 3. Featured Artworks (Glassmorphic Cards) */}
          <section id="gallery">
            <Fade direction="up" triggerOnce>
              <div className="text-center mb-12 md:mb-16 space-y-4">
                <h2 className="text-4xl md:text-5xl font-serif">Featured Works</h2>
                <div className="h-1 w-16 md:w-24 bg-gradient-to-r from-purple-500 to-amber-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {paintings?.slice(0, 6).map((painting) => (
                  <div key={painting._id} className="transform hover:-translate-y-2 transition-transform duration-300 h-full">
                     <PaintingCard painting={painting} />
                  </div>
                ))}
              </div>
              
              <div className="mt-12 md:mt-16 text-center">
                <a href="/allPaintings" className="inline-block px-6 md:px-8 py-3 rounded-full bg-[#2D2B2A] text-white dark:bg-[#EAE9E5] dark:text-black font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-shadow duration-300 text-sm md:text-base">
                  View Full Exhibition
                </a>
              </div>
            </Fade>
          </section>

          {/* 4. Upcoming Events (Creative Cards) */}
          <section>
            <Fade direction="up" triggerOnce>
              <h2 className="text-4xl md:text-5xl font-serif mb-12 md:mb-16 text-center">Join The Experience</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[
                  { name: "Abstract Horizons", date: "Jan 20, 2025", venue: "Grand Gallery, Dhaka", color: "from-blue-500/20 to-purple-500/20" },
                  { name: "Mastering Textures", date: "Feb 10, 2025", venue: "Studio A, Chittagong", color: "from-amber-500/20 to-orange-500/20" },
                  { name: "The Artisan Collective", date: "Mar 05, 2025", venue: "Gallery 9, Sylhet", color: "from-emerald-500/20 to-teal-500/20" },
                ].map((event, index) => (
                  <div
                    key={index}
                    className={`relative p-6 md:p-8 rounded-2xl md:rounded-3xl backdrop-blur-sm bg-white/40 dark:bg-black/40 border border-white/20 dark:border-white/10 shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative z-10 space-y-3 md:space-y-4 text-center md:text-left flex flex-col items-center md:items-start">
                      <div className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 flex items-center justify-center shadow-md text-xl">
                        📅
                      </div>
                      <h3 className="text-xl md:text-2xl font-serif">{event.name}</h3>
                      <p className="text-xs md:text-sm font-bold text-amber-600 dark:text-amber-400">{event.date}</p>
                      <p className="text-xs md:text-sm opacity-70">{event.venue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </section>

          {/* 5. Contact Section (Floating Glass Form) */}
          <section id="contact" className="pb-12 md:pb-20">
            <Fade direction="up" triggerOnce>
              <div className="relative p-6 sm:p-10 md:p-16 rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                {/* Background image for contact section */}
                <div className="absolute inset-0 z-0">
                   <img src={slide3} alt="Contact bg" className="w-full h-full object-cover blur-sm brightness-50 dark:brightness-25" />
                </div>
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
                  
                  <div className="lg:w-1/2 text-white space-y-4 md:space-y-6 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif">Let's Create Together</h2>
                    <p className="text-sm md:text-lg text-gray-200">
                      Looking to exhibit your work or acquire a new masterpiece? Reach out to our curation team.
                    </p>
                    <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 opacity-90 inline-block text-left">
                      <p className="flex items-center gap-3 md:gap-4 text-sm md:text-lg">
                        <span className="bg-white/20 p-2 md:p-3 rounded-full text-sm md:text-base">📍</span> Dhanmondi, Dhaka
                      </p>
                      <p className="flex items-center gap-3 md:gap-4 text-sm md:text-lg">
                        <span className="bg-white/20 p-2 md:p-3 rounded-full text-sm md:text-base">📞</span> +880 123-456-789
                      </p>
                    </div>
                  </div>

                  <div className="lg:w-1/2 w-full">
                    <form className="backdrop-blur-md bg-white/10 border border-white/20 p-6 md:p-8 rounded-2xl md:rounded-3xl space-y-4 md:space-y-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-white/10 text-white placeholder-gray-300 px-4 md:px-6 py-3 md:py-4 rounded-xl border border-white/20 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-sm md:text-base"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full bg-white/10 text-white placeholder-gray-300 px-4 md:px-6 py-3 md:py-4 rounded-xl border border-white/20 focus:outline-none focus:border-white focus:bg-white/20 transition-all text-sm md:text-base"
                      />
                      <textarea
                        placeholder="Your Message..."
                        rows="4"
                        className="w-full bg-white/10 text-white placeholder-gray-300 px-4 md:px-6 py-3 md:py-4 rounded-xl border border-white/20 focus:outline-none focus:border-white focus:bg-white/20 transition-all resize-none text-sm md:text-base"
                      ></textarea>
                      <button
                        type="submit"
                        className="w-full py-3 md:py-4 bg-gradient-to-r from-purple-500 to-amber-500 text-white font-bold text-base md:text-lg rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transform hover:-translate-y-1 transition-all duration-300"
                      >
                        Send Inquiry
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </Fade>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Home;