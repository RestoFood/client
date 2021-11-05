import React, { useEffect } from "react";
import { doRestoMenuByRestoRequest } from "../../redux/actions/resto-menu";
import { useDispatch, useSelector } from "react-redux";
import { formatRp } from "../../utils/formatRp";
import { useParams } from "react-router-dom";

const RestoMenuByResto = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const restomenu = useSelector((state) => state.restoMenuState.restomenu);

  useEffect(() => {
    try {
      dispatch(doRestoMenuByRestoRequest(id));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div>
        {restomenu ? (
          <div className="lg:m-8 m-2 mt-10">
            <h1 className="text-2xl font-bold">Menu Saat Ini</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {restomenu &&
                restomenu.map((menu, index) => (
                  <div
                    className="m-4 bg-white shadow-lg p-4 rounded-lg"
                    key={index}
                  >
                    <div>
                    <img src="" alt="gambar.jpg" />
                    </div>
                    <h1 className="truncate text-md mb-2 font-bold">
                      {menu.reme_name}
                    </h1>
                    <p className="text-xs text-gray-500">
                      {formatRp(menu.reme_price)}
                    </p>
                  </div>
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

export default RestoMenuByResto;
