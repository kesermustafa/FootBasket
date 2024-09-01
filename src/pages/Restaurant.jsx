import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/actions/productAction.js";
import { getRestaurants } from "../redux/actions/restorantAction.js";
import Container from "../components/Container.jsx";
import Loading from "../components/Loading.jsx";
import RestaurantDetail from "../components/RestaurantDetail.jsx";
import { FaDumpsterFire } from "react-icons/fa";
import Error from "../components/Error.jsx";
import ProductCard from "../components/ProductCard.jsx";
import {
  addToBasket,
  updateItem,
  deleteItem,
} from "../redux/actions/basketAction.js";

const Restaurant = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.products);

  const { isLoading, error, restaurants } = useSelector(
    (state) => state.restaurants,
  );

  useEffect(() => {
    dispatch(getProducts(id));
    dispatch(getRestaurants(id));
  }, []);

  const handleAdd = (product, found) => {
    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : dispatch(addToBasket(product, restaurants));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <div>
        <Container>
          <h1>
            {isLoading ? (
              <Loading />
            ) : (
              !error && <RestaurantDetail data={restaurants} />
            )}
          </h1>
        </Container>
      </div>

      <Container>
        <div className="my-10 ">
          <div className="flex flex-col gap-2 mt-5 items-center text-xl font-semibold">
            <div className="w-full items-center gap-6 flex justify-center">
              <span className="w-[40%] h-[10px] ">
                <hr className="border-gray-200" />
              </span>
              <FaDumpsterFire className="text-4xl text-red-600" />
              <span className="w-[40%]">
                <hr className="border-gray-200" />
              </span>
            </div>

            <p>Populer</p>

            <p className="text-gray-600 font-semibold">
              Restorantin en cok tercih edilen yemekleri
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          {productState.isLoading ? (
            <Loading />
          ) : productState.error ? (
            <Error />
          ) : (
            productState.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
              />
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Restaurant;
