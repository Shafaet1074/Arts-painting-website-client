import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllPainting = ({ painting }) => {
  const {
    paintingname,
    SubcategoryName,
    price,
    Rating,
    Customization,
    ProcessingTime,
    photo,
    ShortDescription,
    _id,
  } = painting;

  return (
    <div className="p-4  ">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group">
        {/* Image Section */}
        <div className="relative">
          <img
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            src={photo}
            alt={paintingname}
          />
          <div className="absolute top-3 left-3 bg-violet-600 text-white px-3 py-1 text-xs font-bold rounded-lg">
            {SubcategoryName}
          </div>
          <div className="absolute bottom-3 right-3 bg-white text-gray-800 px-3 py-1 text-xs font-bold rounded-lg shadow">
            <RiMoneyDollarBoxLine className="inline-block text-violet-600" /> ৳
            {price}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h2 className="text-lg font-bold text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
            {paintingname}
          </h2>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {ShortDescription}
          </p>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-1 text-yellow-500">
              <FaRegStar />
              <span className="text-sm font-medium text-gray-800">
                {Rating}
              </span>
            </div>
            <Link
              to={`/allPaintings/${_id}`}
              className="px-4 py-2 bg-violet-600 text-white text-sm font-bold rounded-lg hover:bg-violet-700 transition-colors duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPainting;
