import React, { useEffect } from "react";
import { StarIcon, ClockIcon } from "@heroicons/react/solid";
import { doRestoShopRequest } from "../../redux/actions/restoshop";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"

const RestoShop = () => {
  const dispatch = useDispatch();

  const restoshop = useSelector((state) => state.restoShopState.restoshop);

  useEffect(() => {
    const payload = {};
    try {
      dispatch(doRestoShopRequest(payload));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div>
        {restoshop ? (
          <div className="lg:m-8 m-2 mt-10">
            <h1 className="text-2xl font-bold">
              Resto yang menyediakan menu favorit anda!
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {restoshop &&
                restoshop.map((shop, index) => (
                  <Link to={`/resto/${shop.reto_id}`}>
                  <div
                    className="m-4 bg-white shadow-lg p-4 rounded-lg"
                    key={index}
                  >
                    <h1 className="truncate text-md mb-2 font-bold">
                      {shop.reto_name}
                    </h1>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <ClockIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      {shop.reto_open_hours}
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <StarIcon
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                      {shop.reto_rating}
                    </div>
                  </div>
                  </Link>
                ))}
            </div>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default RestoShop;
