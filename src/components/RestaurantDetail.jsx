import { PiSortAscendingThin } from "react-icons/pi";
import { BsClockHistory } from "react-icons/bs";
import { IoStar } from "react-icons/io5";
import { MdOutlineDeliveryDining } from "react-icons/md";

const RestaurantDetail = ({ data }) => {
  return (
    <div className="flex p-5 rounded-md max-sm:flex-col gap-6 mt-8">
      <img
        src={data.photo}
        alt={data.name}
        className="img-fluid max-sm:w-full max-md:w-[350px] w-[400px] h-[250px] object-cover rounded-md shadow"
      />

      <div className="flex flex-col gap-3 justify-between">
        <h1 className="text-3xl max-md:text-2xl font-semibold">{data.name}</h1>

        <p className="flex flex-col gap-6">
          <span className="flex items-center gap-2">
            <PiSortAscendingThin className="text-red-800 font-bold text-2xl" />
            min {data.minPrice} TL
          </span>

          <span className="flex items-center gap-2">
            <BsClockHistory className="text-amber-700 font-bold text-xl" />
            {data.estimatedDelivery} dak.
          </span>

          {data.isDeliveryFree && (
            <span className="flex items-center gap-2 text-sm font-semibold  text-red-700">
              <MdOutlineDeliveryDining className="text-amber-700 text-xl" />
              Ucretsiz Teslimat
            </span>
          )}
        </p>

        <p className="flex items-center gap-6 font-semibold text-gray-600">
          <span className="flex items-center gap-2 font-semibold text-gray-600">
            {" "}
            <IoStar className="text-amber-600 text-xl" /> {data.rating}{" "}
          </span>
          <span className="flex items-center gap-2 font-semibold text-amber-500">
            <a
              href="#"
              className="p-1 px-3 rounded hover:bg-amber-400 hover:text-gray-600 transition "
            >
              Yorumlar
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RestaurantDetail;
