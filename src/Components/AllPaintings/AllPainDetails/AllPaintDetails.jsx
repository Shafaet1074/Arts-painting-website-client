import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AllPaintDetails = () => {
  const { id } = useParams();
  const [painting, setPainting] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Scroll to top when component mounts for a fresh view
    window.scrollTo(0, 0);
    
    fetch(`https://arts-painting-website-server.vercel.app/allpaintings/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPainting(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch artwork", err);
        setIsLoading(false);
      });
  }, [id]);

  // Premium Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0F1014] flex justify-center items-center">
        <div className="flex flex-col items-center gap-4 text-zinc-500">
          <div className="w-10 h-10 border-[3px] border-zinc-300 border-t-zinc-800 dark:border-zinc-700 dark:border-t-zinc-200 rounded-full animate-spin"></div>
          <p className="text-xs uppercase tracking-[0.2em] font-semibold mt-4">Preparing Exhibition</p>
        </div>
      </div>
    );
  }

  if (!painting) return null;

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0F1014] text-[#2D2B2A] dark:text-[#EAE9E5] transition-colors duration-500 font-sans pb-24 relative overflow-hidden">
      
      {/* Background Ambient Glow (Optional, matches home page) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/10 dark:bg-amber-600/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-8 md:pt-16 relative z-10">
        
        {/* Subtle Back Navigation */}
        <Fade direction="down" triggerOnce>
          <Link 
            to="/allPaintings" 
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors mb-8 md:mb-12 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover:-translate-x-2 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Return to Gallery
          </Link>
        </Fade>

        {/* Editorial Overlap Layout */}
        <div className="flex flex-col lg:flex-row items-start relative max-w-[1400px] mx-auto">
          
          {/* Left: The Canvas Frame */}
          <div className="w-full lg:w-7/12 relative z-0">
            <Fade direction="up" triggerOnce>
              <div className="bg-white dark:bg-zinc-950 p-4 sm:p-8 md:p-12 shadow-xl rounded-sm border border-zinc-200 dark:border-zinc-900 pb-20 lg:pb-12">
                <img
                  src={painting.photo}
                  alt={painting.paintingname}
                  className="w-full h-auto max-h-[60vh] lg:max-h-[75vh] object-contain mx-auto transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
            </Fade>
          </div>

          {/* Right: The Frosted Glass Placard (Overlaps the image) */}
          <div className="w-[90%] sm:w-[85%] lg:w-5/12 relative z-10 mx-auto -mt-16 sm:-mt-24 lg:mt-24 lg:-ml-20">
            <Fade direction="up" triggerOnce delay={150}>
              
              <div className="backdrop-blur-xl bg-white/85 dark:bg-zinc-900/85 border border-white/40 dark:border-zinc-700/50 p-6 sm:p-10 lg:p-12 shadow-2xl rounded-2xl lg:rounded-3xl">
                
                {/* Header Info */}
                <div className="space-y-3 mb-8">
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                    {painting.SubcategoryName}
                  </p>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif leading-tight text-zinc-900 dark:text-white">
                    {painting.paintingname}
                  </h1>
                </div>

                <div className="h-px w-16 bg-gradient-to-r from-amber-700 to-transparent dark:from-amber-400 mb-8"></div>

                {/* Description */}
                <div className="space-y-4 mb-10">
                  <p className="text-sm sm:text-base font-light leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {painting.ShortDescription}
                  </p>
                </div>

                {/* Specifications Grid */}
                <div className="grid grid-cols-2 gap-y-8 gap-x-6 mb-10">
                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Value</p>
                    <p className="text-lg sm:text-xl font-medium text-zinc-900 dark:text-white">
                      {painting.price} <span className="text-xs text-zinc-500 font-normal">BDT</span>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Rating</p>
                    <div className="flex items-center gap-1.5 text-lg font-medium text-zinc-900 dark:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 dark:text-amber-400">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                      </svg>
                      {painting.Rating}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Processing</p>
                    <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300">
                      {painting.ProcessingTime}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500">Customization</p>
                    <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 capitalize">
                      {painting.Customization}
                    </p>
                  </div>
                </div>

                {/* Action Button */}
                <div>
                  <button className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black uppercase tracking-widest text-[10px] sm:text-xs font-bold py-4 sm:py-5 rounded-sm hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-zinc-900/20 dark:shadow-white/10 flex items-center justify-center gap-3 group">
                    <span>Acquire Artwork</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </button>
                </div>

              </div>
            </Fade>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllPaintDetails;