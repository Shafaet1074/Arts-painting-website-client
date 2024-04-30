
import { Typewriter } from 'react-simple-typewriter'

const Artist = ({artist}) => {
    
    
  

  
  
  return (
    <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-slate-300 dark:text-gray-800">
    <img src={artist.image_url}alt="" className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square" />
    <div className="space-y-4 text-center divide-y dark:divide-gray-300">
      <div className="my-2 space-y-1">
        <h2 className="text-xl font-semibold sm:text-2xl">{artist.name}</h2>
        <p className="px-5 text-xs sm:text-base dark:text-gray-600">{artist.description}</p>
      </div>
      
    </div>
  </div>
  );
};

export default Artist;