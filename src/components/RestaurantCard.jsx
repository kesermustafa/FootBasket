import React from 'react';
import {Link} from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { HiOutlineCreditCard } from "react-icons/hi2";


const RestaurantCard = ({item}) => {
    return (
        <Link to={`/restaurant/${item.id}`} className='overflow-hidden bg-white shadow rounded-lg mb-4' >
            <img className="w-full min-h-80 max-h-80 object-cover"  src={item.photo} alt={item.name}/>

            <div className="p-3 flex flex-col gap-3">
                <div className="flex justify-between mynpm run server-2">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className='flex items-center gap-2'>
                        <IoStar className="text-amber-500"/>
                        {item.rating}
                    </p>
                </div>
                <p className='flex items-center justify-between gap-4 text-sm  text-gray-600'>
                    <span className="flex items-center gap-2 text-sm text-gray-600">
                        <HiOutlineCreditCard
                            className="text-amber-700 text-lg"/><span> {item.minPrice} TL minimum</span>
                    </span>

                    <span>Kategori</span>
                </p>

                <div className="flex gap-5">
                    <p className='flex items-center gap-2 text-sm font-semibold text-gray-600'>
                        <BsClockHistory className="text-amber-700 text-lg"/>
                        <span>{item.estimatedDelivery} </span>
                    </p>

                    {
                    item.isDeliveryFree && (
                            <p className='flex items-center gap-2 text-sm font-semibold  text-red-700'>
                                <MdOutlineDeliveryDining className="text-amber-700 text-xl"/>
                                Ucretsiz Teslimat
                            </p>
                        )
                    }
                </div>
            </div>
        </Link>
    );
};

export default RestaurantCard;
