import Container from "./Container.jsx";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { PiShoppingCartThin } from "react-icons/pi";

const Header = () => {
  const { data } = useSelector((store) => store.card);
  const totalProducts = data.reduce((a, b) => a + b.amount, 0);

  return (
    <div className="header">
      <Container>
        <div className="flex justify-between items-center">
          <Link
            to={"/"}
            className="text-gray-800 font-[600] text-2xl font-mono flex items-center hover:scale-105 "
          >
            <span className="max-sm:hidden">Food</span>
            <img
              className="food-logo w-[70px]"
              src="../../public/foodLogo.svg"
              alt=""
            />
            <span className="max-sm:hidden">Basket</span>
          </Link>

          <div className="flex gap-3 me-3  relative">
            {data.length > 0 && totalProducts && (
              <Link
                to="/cart"
                className="flex justify-center items-center w-14 text-center h-14 hover:bg-amber-700 transition duration-300 p-3 hover:bg-opacity-15 rounded-full"
              >
                <PiShoppingCartThin className="text-4xl mt-1" />
                <span className="absolute rounded-full bg-stone-300 place-items-center w-4 h-4 text-center text-sm top-3 left-[22px] text-red-700 font-semibold">
                  {totalProducts}
                </span>
              </Link>
            )}

            <Link
              className=" flex justify-center items-center w-14 text-center h-14 hover:bg-amber-700 text-2xl transition duration-300 hover:bg-opacity-15 rounded-full"
              to={"/"}
            >
              <FaRegUser />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
