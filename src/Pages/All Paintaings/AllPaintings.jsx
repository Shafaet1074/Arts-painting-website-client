import { useLoaderData } from "react-router-dom";
import AllPainting from "../../Components/AllPaintings/AllPainting";


const AllPaintings = () => {
  const paintings =useLoaderData();
  return (

  <div>
    <div className=" md:p-10 md:mt-5 space-y-5">
        <h1 className="text-center text-4xl font-light text-gray-950 "> Artistic Odyssey: Where Every Stroke Tells a Story</h1>
        <p className="text-center  text-2xl text-gray-950 font-bold">Step into our gallery and embark on an artistic journey through a myriad of mediums and styles. </p>

      </div>
    
     <div className="md:grid md:grid-cols-2">
    {
      paintings?.map(painting=><AllPainting
      key={painting._id}
      painting={painting}
      
      ></AllPainting>)
    }
   </div>
  </div>
    
  
  );
};

export default AllPaintings;