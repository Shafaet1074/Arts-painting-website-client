import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { Tooltip } from "react-tooltip";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const PaintingCard = ({ painting }) => {
  const {
    paintingname,
    SubcategoryName,
    price,
    Rating,
    photo,
    ShortDescription,
    _id,
  } = painting;

  return (
    <Link to={`/allPaintings/${_id}`} className="group">
      <div
        data-tooltip-id={`tooltip-${_id}`}
        data-tooltip-content="Click to view details"
        className="w-full p-4 h-full"
      >
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 h-full flex flex-col">
          <figure>
            <img
              className="w-full h-72 object-cover rounded-t-lg"
              src={photo}
              alt={paintingname}
            />
          </figure>

          <div className="p-6 flex flex-col justify-between flex-1">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {SubcategoryName}
              </h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {paintingname}
              </h3>

              <div className="flex items-center gap-3 text-lg text-gray-700 mb-5">
                <div className="flex items-center gap-1">
                  <RiMoneyDollarBoxLine className="text-2xl text-violet-600" />
                  <p className="font-semibold">{price} BDT</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaRegStar className="text-2xl text-yellow-500" />
                  <p className="font-semibold">{Rating}</p>
                </div>
              </div>

              <div className="text-gray-600 text-base">
                <p>{ShortDescription.slice(0, 120)}...</p>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full py-2 px-4 text-white bg-violet-600 rounded-lg transition-all duration-300 hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-opacity-50">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
      <Tooltip id={`tooltip-${_id}`} />
    </Link>
  );
};

export default PaintingCard;
