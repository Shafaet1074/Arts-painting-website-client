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
    <div>
      <h1>Update Carts</h1>
    </div>
  );
};

export default UpdateCart;