import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { Tooltip } from 'react-tooltip';

import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaintingCard = ({painting}) => {
  const {paintingname,SubcategoryName,price,Rating,Customization,ProcessingTime,photo,ShortDescription,_id} =painting;
  return (
    <div className=" md:p-8 p-2 ">
      
    <div className=" shadow-xl bg-violet-200 md:flex gap-5 p-2">
   <div className="lg:w-1/2">
   <figure><img  className="h-full" src={photo} alt="Movie"/></figure>
   </div>
    <div className="card-body lg:w-1/2 hover:bg-violet-400 hover:text-white hover:rounded-xl ">
    <h1 className="text-3xl font-light pb-5">{SubcategoryName}</h1>
      <h2 className="card-title ">{paintingname}</h2>
      <div className="space-y-3">
        <div className="flex items-center gap-2">
      <a   data-tooltip-id="my-tooltip"
  data-tooltip-content="Price" >  <RiMoneyDollarBoxLine /> </a>
  <Tooltip id="my-tooltip" />
        <p className="text-xl  font-bold">
        {price}</p>
        </div>
        <div className="flex items-center gap-2">
      <a data-tooltip-id="my-tooltip"
  data-tooltip-content="Rating" >  <FaRegStar /></a>
        <p className="text-xl  font-bold">
        {Rating}</p>
        </div>
        
    
      </div>
      <div className="card-actions mt-10">
       <Link to={`/allPaintings/${_id}`}> <button className="px-4 py-2 text-white bg-violet-600  w-full rounded-lg  hover:bg-violet-800">View Details</button></Link>
      </div>
    </div>
  </div>
      </div>
  );
};

export default PaintingCard;