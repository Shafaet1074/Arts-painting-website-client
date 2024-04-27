import img from '../../assets/note-png-file.png'

const Add_Paintings = () => {
  return (
    // <div className="flex gap-5">
    //   <div className="w-2/6 p-10 my-auto">
    //     <img src={img} alt="" />
    //   </div>

    //   <div className='w-4/6 p-10'>
     <div className='p-20'>
       <div className="bg-[#c2beec] shadow-lg rounded-lg p-24 space-y-4 ">
      <h2 className="text-3xl font-extrabold">Add Paintings</h2>
      <form>
      {/* form name and quantity row */}
       <div className="md:flex md:gap-5 mb-8">
       <div className="md:w-1/2">
        <label className="label">
        <span className="label-text text-xl">Painting Name </span>
        </label>
       <label className="flex items-center gap-2">
  
  <input type="text" name="painting name" className="input input-bordered w-full " placeholder="PaintingName" />
</label>
       </div>
       <div className="md:w-1/2">
        <label className="label">
        <span className="label-text text-xl">Subcategory Name </span>
        </label>
       <label className="flex items-center gap-2">
  
  <input type="text" name="SubcategoryName " className="input input-bordered w-full " placeholder="Subcategory Name" />
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
  
  <input type="text" name="price" className="input input-bordered w-full " placeholder="Price" />
</label>
       </div>
       <div className="md:w-1/2">
        <label className="label">
        <span className="label-text text-xl">Rating</span>
        </label>
       <label className="flex items-center gap-2">
  
  <input type="text" name="Rating" className="input input-bordered w-full " placeholder="Rating" />
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
      

  
  <input list="Customization" name="Customization" className="input input-bordered w-full " placeholder="Customization" />
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
  
  <input type="text" name="ProcessingTime" className="input input-bordered w-full " placeholder="Processing Time" />
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
  
  <input type="text" name="photo" className="input input-bordered w-full " placeholder="Photo URL" />
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
  <textarea name="ShortDescription" id="" cols="70" rows="5"></textarea>
</label>
       </div>
      
       </div>
       
       
       <input type="submit" value="Add Coffee"  className="btn btn-block hover:bg-slate-700 hover:text-white mt-5"/>

      </form>
    </div>
     </div>

      
    
  );
};

export default Add_Paintings;