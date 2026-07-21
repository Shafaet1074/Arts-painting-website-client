import { Link } from "react-router-dom";

const AllPainting = ({ painting }) => {
  const {
    paintingname,
    SubcategoryName,
    price,
    Rating,
    Customization,
    ProcessingTime,
    photo,
    ShortDescription,
    _id,
  } = painting;

  return (
    <Link to={`/allPaintings/${_id}`} className="group block w-full h-full">
      <div className="relative h-full flex flex-col bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-200/50 dark:hover:shadow-black/50">
        
        {/* Image Container with Elegant Hover Zoom */}
        <div className="relative h-72 w-full overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
            src={photo}
            alt={paintingname}
            loading="lazy"
          />
          {/* Subtle overlay gradient so the image blends smoothly into the card */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Card Content */}
        <div className="p-6 flex flex-col flex-grow">
          
          {/* Top Section: Category & Title */}
          <div className="mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {SubcategoryName}
            </span>
            <h3 className="text-2xl font-serif text-zinc-900 dark:text-zinc-50 mt-1 line-clamp-1">
              {paintingname}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm font-light text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
            {ShortDescription}
          </p>

          {/* Extra Gallery Metadata (Processing & Customization) */}
          <div className="flex items-center gap-3 mt-auto mb-6 text-[10px] uppercase tracking-widest text-zinc-500 dark:text-zinc-500 font-medium">
            <span>{ProcessingTime}</span>
            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
            {/* If Customization is "yes", display "Customizable", else just render the text */}
            <span className="truncate">
              {Customization?.toLowerCase() === "yes" ? "Customizable" : Customization}
            </span>
          </div>

          {/* Footer Section: Price, Rating, and Action */}
          <div className="pt-5 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
            
            {/* Price & Rating */}
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {price} <span className="text-xs text-zinc-500 font-normal">BDT</span>
              </span>
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                {/* Minimalist Star Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
                <span>{Rating}</span>
              </div>
            </div>

            {/* Subtle Action Link */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors duration-300">
              <span>Explore</span>
              {/* Arrow that slides to the right on hover */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
};

export default AllPainting;