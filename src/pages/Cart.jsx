import Container from "../components/Container.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error.jsx";
import CartItem from "../components/CartItem.jsx";
import { deleteItem } from "../redux/actions/basketAction.js";
import { TiShoppingCart } from "react-icons/ti";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.card);

  const totalProducts = cart.data.reduce((a, b) => a + b.amount, 0);

  const totalBasketPrice = cart.data
    .reduce((a, b) => a + b.amount * b.price, 0)
    .toFixed(2);

  const handleConfirmClick = () => {
    cart.data.forEach((item) => {
      dispatch(deleteItem(item.id));
    });

    navigate("/");
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold mt-10 my-5 text-center mx-auto">
        SEPETINIZ
      </h1>
      <div>
        {cart.isLoading ? (
          <Loading />
        ) : cart.error ? (
          <Error />
        ) : cart.data.length === 0 ? (
          <p className="flex flex-col mt-10 items-center gap-6">
            <TiShoppingCart className="text-6xl text-green-600" />
            Sepette herhangi bir ürün yok
            <Link
              className="border p-2 px-4 shadow rounded bg-blue-300 hover:bg-blue-400"
              to={"/"}
            >
              Ürün Ekle
            </Link>
          </p>
        ) : (
          cart.data.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>

      {cart.data.length !== 0 && (
        <div className=" max-w-[1280px] bg-white m-auto rounded-md border-t border-b-gray-400 p-4 flex flex-col gap-3 ">
          <div className="border-b border-gray-200 py-3 flex justify-between">
            <span className="text-gray-600">Number of items in the cart</span>
            <span className="font-bold">{totalProducts}</span>
          </div>

          <div className="border-b border-gray-200 py-3 flex justify-between ">
            <span className="font-bold text-gray-600 text-xl">
              Total basket price
            </span>

            <span className="font-bold text-xl">
              {totalBasketPrice}
              <span className=" ms-1 text-gray-700 font-semibold">TL</span>
            </span>
          </div>

          <div className="w-full max-w-[1200px] pe-10 mt-5 mb-2 m-auto text-end">
            <span
              onClick={handleConfirmClick}
              className="py-2 px-5 bg-amber-200 rounded-full border border-amber-700 hover:bg-amber-400"
            >
              Confirm order
            </span>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Cart;
