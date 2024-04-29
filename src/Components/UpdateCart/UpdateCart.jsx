import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const UpdateCart = () => {
  const {id} =useParams();
  console.log(id);
  const [product,setProduct] =useState({});
  
  useEffect(() => {
    fetch(`http://localhost:5003/myArts/${id}`)
    .then(res=> res.json())
    .then(data => {
      setProduct(data)
      console.log(data);
    })
  },[id])
  return (
    <div className='p-20'>
    <div className="bg-[#c2beec] shadow-lg rounded-lg p-24 space-y-6 ">
   <h2 className="text-3xl font-extrabold text-center">Update Paintings</h2>
   <form>
   {/* form name and quantity row */}
    <div className="md:flex md:gap-5 mb-8">
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Painting Name </span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="paintingname" className="input input-bordered w-full " placeholder="PaintingName" defaultValue={product.paintingname}/>
</label>
    </div>
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Subcategory Name </span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="SubcategoryName" className="input input-bordered w-full " placeholder="Subcategory Name" defaultValue={product.SubcategoryName} />
</label>
    </div>
    </div>

     {/* form supplier and taste row */}
     <div className="md:flex md:gap-5 mb-8">
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Price</span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="price" className="input input-bordered w-full " placeholder="Price" defaultValue={product.price} />
</label>
    </div>
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Rating</span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="Rating" className="input input-bordered w-full " placeholder="Rating" defaultValue={product.Rating} />
</label>
    </div>
    </div>

     {/* form category and details row */}
     <div className="md:flex md:gap-5 mb-8">
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Customizatin</span>
     </label>
    <label className="flex items-center gap-2">
   


<input list="Customization" name="Customization" className="input input-bordered w-full " placeholder="Customization" defaultValue={product.Customization} />
<datalist id="Customization">
<option value="Yes"></option>
<option value="No"></option>

</datalist>
</label>
    </div>
    <div className="md:w-1/2">
     <label className="label">
     <span className="label-text text-xl">Processing Time</span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="ProcessingTime" className="input input-bordered w-full " placeholder="Processing Time" defaultValue={product.ProcessingTime} />
</label>
    </div>
    </div>


     {/* form  photo url row */}
     <div className="mb-8">
    <div className="md:w-full">
     <label className="label">
     <span className="label-text text-xl">Photo URL </span>
     </label>
    <label className="flex items-center gap-2">

<input type="text" name="photo" className="input input-bordered w-full " placeholder="Photo URL" defaultValue={product.photo} />
</label>
    </div>
   
    </div>

    <div className="mb-8">
    <div className="md:w-full">
     <label className="label">
     <span className="label-text text-xl">Short Description</span>
     </label>
    <label className="flex items-center gap-2">

{/* <input type="text" name="ShortDescription" className="input input-bordered w-full " placeholder="Short Description" /> */}
<textarea name="ShortDescription" id="" cols="70" rows="5" defaultValue={product.ShortDescription}></textarea >
</label>
    </div>
   
    </div>
    
    
    <input type="submit" value="Update Paintings"  className="btn btn-block bg-gray-500 text-white hover:bg-slate-700 hover:text-white mt-5"/>

   </form>
 </div>
  </div>

  );
};

export default UpdateCart;