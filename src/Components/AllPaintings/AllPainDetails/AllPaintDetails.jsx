import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllPaintDetails = () => {
  const{id}=useParams();
  console.log(id);
  const [painting,setPainting] = useState ({});


  useEffect(() => {
    fetch(`https://arts-painting-website-server.vercel.app/allpaintings/${id}`) 
    .then(res=> res.json())
    .then(data => {
      setPainting(data)
      console.log(data);
    })
  },[id])

  return (


    <section className="dark:text-gray-800 md:p-8 p-5 space-y-8 ">
      <h1 className="text-center text-5xl font-light text-gray-950 ">  Artwork Details
</h1>
    <div className=" rounded-lg  md:flex ">
    
      <div className="lg:w-1/2">
      <img src={painting.photo}  />
      </div>
        <div className="lg:w-1/2 p-6 space-y-4
         ">
          <h1  className="text-2xl font-light md:text-5xl group-hover:underline group-focus:underline text-violet-500 ">{painting.SubcategoryName} </h1>
           <hr className="h-1 text-black bg-black"></hr>
          <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline text-blue-400">{painting.paintingname}</h3>
         
          <p className="text-gray-900 text-2xl font-extralight">{painting.ShortDescription} </p>

         <div className="md:flex md:justify-between">
         <div className="">
         <p className="text-2xl"><span className="text-blue-400  ">Price:</span> {painting.price}</p>
         </div>
         <div>
         <p className="text-2xl"><span className="text-blue-400  ">Rating:</span> {painting.Rating}</p>
        
         </div>
         
         </div>
         <p className="px-4 py-1 bg-blue-200 border rounded-lg text-black font-semibold items-center">Processing Time: {painting.ProcessingTime}</p>
      <p className="px-4 py-1 bg-blue-200 border rounded-lg text-black items-center font-semibold ">Customization: {painting.Customization}</p>


        </div>
      
      
     
    </div>
  </section>
  );
};

export default AllPaintDetails;