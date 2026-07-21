import { useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import AllPainting from "../../Components/AllPaintings/AllPainting";

const AllPaintings = () => {
  const paintings = useLoaderData();

  return (
    <div className="min-h-screen bg-[#FAF9F6] dark:bg-[#0F1014] text-[#2D2B2A] dark:text-[#EAE9E5] transition-colors duration-500 font-sans pb-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 pt-16 md:pt-24">
        
        {/* Header Section */}
        <Fade direction="up" triggerOnce>
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 md:mb-24">
            <div className="inline-block px-4 py-1 rounded-full bg-zinc-200 dark:bg-zinc-800/50 text-xs font-semibold tracking-widest uppercase mb-2 text-zinc-600 dark:text-zinc-400">
              Full Exhibition
            </div>
            <h1 className="text-4xl md:text-6xl font-serif leading-tight">
              The <span className="italic text-amber-700 dark:text-amber-400">Masterpiece</span> Collection
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-light px-4">
              Step into our digital gallery and embark on an artistic journey through a myriad of curated mediums and styles.
            </p>
          </div>
        </Fade>

        {/* Minimalist Filter / Sort Bar (Professional UX Pattern) */}
        <Fade direction="up" triggerOnce delay={100}>
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-zinc-200 dark:border-zinc-800 pb-6 mb-12 gap-6">
            <p className="text-sm font-light text-zinc-500 uppercase tracking-widest">
              Showing <span className="font-semibold text-zinc-900 dark:text-white">{paintings?.length || 0}</span> Artworks
            </p>
            
            {/* Visual Filter Options - Can be wired up with state later */}
            <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-medium uppercase tracking-widest text-zinc-400">
              <span className="text-zinc-900 dark:text-white cursor-pointer border-b border-current pb-1">All Works</span>
              <span className="hover:text-amber-700 dark:hover:text-amber-400 cursor-pointer transition-colors">Oil Painting</span>
              <span className="hover:text-amber-700 dark:hover:text-amber-400 cursor-pointer transition-colors">Abstract</span>
              <span className="hover:text-amber-700 dark:hover:text-amber-400 cursor-pointer transition-colors">Portraits</span>
            </div>
          </div>
        </Fade>

        {/* Paintings Grid */}
        <Fade direction="up" triggerOnce delay={200}>
          {paintings && paintings.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {paintings.map((painting) => (
                <div key={painting._id} className="h-full">
                  <AllPainting painting={painting} />
                </div>
              ))}
            </div>
          ) : (
            /* Empty State Fallback */
            <div className="text-center py-20">
              <p className="text-xl font-serif text-zinc-500">No artworks are currently on display.</p>
            </div>
          )}
        </Fade>

      </div>
    </div>
  );
};

export default AllPaintings;