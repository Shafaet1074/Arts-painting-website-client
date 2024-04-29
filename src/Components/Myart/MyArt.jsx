

const MyArt = ({item}) => {
  const {paintingname,SubcategoryName,price,Rating,Customization,ProcessingTime,photo,ShortDescription} =item;
  return (
      <div>
         
         


        <div className="md:px-20 md:py-10  p-2 mt-2 md:flex ">
    {/* className="md:h-64 md:w-full" */}

    <div className="md:w-2/5  ">
    <img   src={photo} alt="" />

    </div>
    
    <div className="  md:px-10 md:py-6 px-5 py-3 rounded-lg shadow-sm dark:bg-violet-300 md:w-3/5 rounded-tr-3xl rounded-br-3xl  ">
      <div className="flex items-center justify-between">
        <span className="text-xl dark:text-violet-800 font-bold">Price:{price}</span>
        <p className="px-2 py-1 font-bold rounded dark:bg-violet-800 dark:text-gray-50">Rating: {Rating}</p>
      </div>
      <div className="mt-3 space-y-3">
        <h1 className="text-5xl font-light pb-5">{SubcategoryName}</h1>
        <a rel="noopener noreferrer" href="#" className="text-3xl font-bold hover:underline">{paintingname}</a>
        <p className="mt-2 text-2xl">{ShortDescription}</p>
      </div>
      <div className="md:flex md:items-center md:justify-between md:mt-4 mt-4">
        <p  className=" text-violet-800 text-2xl font-bold">Customization: {Customization}</p>
        <div>
          <a rel="noopener noreferrer" href="#" className="flex items-center">
             
          <p  className=" text-violet-800 text-2xl font-bold">ProcessingTime : {ProcessingTime}</p> 
            
          </a>
        </div >

      
      </div>
      <div className=" md:space-y-5 space-y-5 pt-2 text-white">
         
         <button className="px-6 py-2 rounded-lg bg-violet-600 hover:bg-violet-800 w-full">Update</button>
         <button className="px-6 py-2 rounded-lg bg-violet-600 hover:bg-violet-800 w-full">Delete</button>
        
          
        </div>
    </div>
  
   </div>
      </div>
  );
};

export default MyArt;