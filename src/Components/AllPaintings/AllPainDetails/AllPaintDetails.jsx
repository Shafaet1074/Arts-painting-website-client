import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllPaintDetails = () => {
  const{id}=useParams();
  console.log(id);
  const [paints,setPaints] = useState ({});

  useEffect(() => {
    fetch(`http://localhost:5003/addpaintings/${id}`)
    .then(res=> res.json())
    .then(data => {
      setPaints(data)
      console.log(data);
    })
  },[id])

  return (
    <div>
      <h1>Details</h1>
    </div>
  );
};

export default AllPaintDetails;