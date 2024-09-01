import React, {useEffect} from 'react';
import Container from "../components/Container.jsx";
import RestaurantCard from "../components/RestaurantCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getRestaurants} from "../redux/actions/restorantAction.js";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error.jsx";


const Home = () => {

    const {isLoading, error, restaurants} = useSelector((store) => store.restaurants);

    const dispatch = useDispatch()

    const getData = () => {
        dispatch(getRestaurants() )
    }

    useEffect(() => {
        getData()
    },[])

    return (
       <Container>
           <div className='py-5 px-1 xl:px-0 mt-5 '>

               <h1 className="text-center text-yellow-700 mb-8 font-semibold text-xl " >Tum Restaurantlar</h1>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                   {
                       isLoading ? <Loading/> : error ?  <Error /> : (
                           restaurants.length > 0 && restaurants.map((item) => <RestaurantCard key={item.id} item={item}/>) )
                   }
               </div>

           </div>

       </Container>
    );
};

export default Home;

