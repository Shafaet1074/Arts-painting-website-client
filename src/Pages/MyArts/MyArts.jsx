import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Firebase/FirbeaseProvider/FirebaseProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";




const MyArts = () => {
  const {user} =useContext(AuthContext) || {};
  const [items,setItem] =useState();
  const [control,setControl] =useState(false);
  const [sortedYesItems,setSortedYesitems] =useState(items);
  const [sortedNoItems,setSortedNoitems] =useState(items);
  console.log(user.email);
  useEffect(()=>{
    fetch(`http://localhost:5003/addpaintings/${user?.email}`)
    .then(res =>res.json())
    .then(data=>{
      setItem(data);
    })
  
},[user,control])

const handleYes= () => {
  const newYesItems =items.filter((item) => item.Customization === 'Yes')
  
   setSortedYesitems(newYesItems);
   console.log(sortedYesItems);
   setItem(sortedYesItems);
   console.log(items);
  

}


const handleNo= () => {
  const newNoItems =items.filter((item) => item.Customization === 'No')
  
      setSortedNoitems(newNoItems);
      console.log(sortedNoItems);
      setItem(sortedNoItems);
console.log(items);
}
 
const handleDelete = (id) =>{

  
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
    
      fetch(`http://localhost:5003/delete/${id}`,{
    method:"DELETE",
  })
  .then((res)=> res.json())
  .then((data)=>{
    if(data.deletedCount> 0){
      Swal.fire(
        "Deleted!",
        "Your coffee has been deleted.",
        "success"
)
           setControl(!control)
    }
  })
      console.log('Delete Confirmed');
  
    }
  });






}



   

  return (
    <>
      <div className='flex justify-center  items-center mt-5'>
     <details className="dropdown">
  <summary className="m-1 btn btn-neutral text-white  ">Sort By Customization</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 justify-center">
    <button onClick={handleYes}><li><a>Yes</a></li></button>
    <button onClick={handleNo}><li><a>No</a></li></button>
   
  
  </ul>
</details>
   
 </div>
        {/* {
          items.map(item => <MyArt
          key={item.__id}
          item={item}
          handleRatings={handleRatings}
          
          ></MyArt>)
        } */}
       {
        items?.map(item =>
          
         
          (
          
          
          <div className="md:px-20 md:py-10  p-2 mt-2 md:flex ">
          {/* className="md:h-64 md:w-full" */}
      
          <div className="md:w-2/5  ">
          <img   src={item.photo} alt="" />
      
          </div>
          
          <div className="  md:px-10 md:py-6 px-5 py-3 rounded-lg shadow-sm dark:bg-violet-300 md:w-3/5 rounded-tr-3xl rounded-br-3xl  ">
            <div className="flex items-center justify-between">
              <span className="text-xl dark:text-violet-800 font-bold">Price:{item.price}</span>
              <p className="px-2 py-1 font-bold rounded dark:bg-violet-800 dark:text-gray-50">Rating: {item.Rating}</p>
            </div>
            <div className="mt-3 space-y-3">
              <h1 className="text-5xl font-light pb-5">{item.SubcategoryName}</h1>
              <a rel="noopener noreferrer" href="#" className="text-3xl font-bold hover:underline">{item.paintingname}</a>
              <p className="mt-2 text-2xl">{item.ShortDescription}</p>
            </div>
            <div className="md:flex md:items-center md:justify-between md:mt-4 mt-4">
              <p  className=" text-violet-800 text-2xl font-bold">Customization: {item.Customization}</p>
              <div>
                <a rel="noopener noreferrer" href="#" className="flex items-center">
                   
                <p  className=" text-violet-800 text-2xl font-bold">ProcessingTime : {item.ProcessingTime}</p> 
                  
                </a>
              </div >
      
            
            </div>
            <div className=" md:space-y-5 space-y-5 pt-2 text-white">
               
              <Link to={`/myArts/${item._id}`}> <button className="px-6 py-2 rounded-lg bg-violet-600 hover:bg-violet-800 w-full">Update</button></Link>
               <button onClick={()=>handleDelete(item._id)} className="px-6 py-2 rounded-lg bg-violet-600 hover:bg-violet-800 w-full">Delete</button>
              
                
              </div>
          </div>
        
         </div>
        ))
       }
          
         
     
    </>
  );
};

export default MyArts;