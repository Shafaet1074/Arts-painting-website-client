import { useLoaderData } from "react-router-dom";
import AllPainting from "../../Components/AllPaintings/AllPainting";

const AllPaintings = () => {
  const paintings = useLoaderData();

  return (
    <div className="px-4 py-8 md:px-10 md:py-16 space-y-8 ">
      {/* Heading Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold  leading-tight">
          Artistic Odyssey: Where Every Stroke Tells a Story
        </h1>
        <p className="text-lg md:text-2xl  font-medium">
          Step into our gallery and embark on an artistic journey through a
          myriad of mediums and styles.
        </p>
      </div>

      {/* Paintings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-6">
        {paintings?.map((painting) => (
          <AllPainting key={painting._id} painting={painting}></AllPainting>
        ))}
      </div>
    </div>
  );
};

export default AllPaintings;
