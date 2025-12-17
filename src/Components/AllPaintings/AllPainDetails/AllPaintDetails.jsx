import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllPaintDetails = () => {
  const { id } = useParams();
  const [painting, setPainting] = useState({});

  useEffect(() => {
    fetch(`https://arts-painting-website-server.vercel.app/allpaintings/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPainting(data);
      });
  }, [id]);

  return (
    <section className="md:p-8 p-5 space-y-8 ">
      <h1 className="text-center text-5xl font-bold ">Artwork Details</h1>
      <div className="rounded-lg md:flex shadow-lg  overflow-hidden">
        {/* Painting Image */}
        <div className="lg:w-1/2">
          <img
            src={painting.photo}
            alt={painting.paintingname}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Painting Details */}
        <div className="lg:w-1/2 p-6 space-y-6">
          <h1 className="text-2xl font-light md:text-5xl text-violet-500">
            {painting.SubcategoryName}
          </h1>
          <hr className="h-1 bg-black" />
          <h3 className="text-2xl font-semibold sm:text-4xl text-blue-400">
            {painting.paintingname}
          </h3>
          <p className="text-lg font-light ">{painting.ShortDescription}</p>
          <div className="md:flex md:justify-between ">
            <p className="text-xl">
              <span className="font-bold text-blue-400">Price:</span>{" "}
              {painting.price}
            </p>
            <p className="text-xl">
              <span className="font-bold text-blue-400">Rating:</span>{" "}
              {painting.Rating}
            </p>
          </div>
          <div className="space-y-3">
            <p className="px-4 py-2 bg-blue-200 border rounded-lg text-black font-semibold">
              Processing Time: {painting.ProcessingTime}
            </p>
            <p className="px-4 py-2 bg-blue-200 border rounded-lg text-black font-semibold">
              Customization: {painting.Customization}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPaintDetails;
