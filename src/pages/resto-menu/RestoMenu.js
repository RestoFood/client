import React, { useEffect } from "react";
import { doRestoMenuRequest } from "../../redux/actions/resto-menu";
import { useDispatch, useSelector } from "react-redux";
import { formatRp } from "../../utils/formatRp";

const RestoMenu = () => {
  const dispatch = useDispatch();

  const restomenu = useSelector((state) => state.restoMenuState.restomenu);

  useEffect(() => {
    const payload = {};
    try {
      dispatch(doRestoMenuRequest(payload));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <div>
        {restomenu ? (
          <div className="lg:m-8 m-2 mt-10">
            <h1 className="text-2xl font-bold">
              Pasti ada sesuatu buat tiap orang!
            </h1>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {restomenu &&
                restomenu.map((menu, index) => (
                  <div
                    className="m-4 bg-white shadow-lg p-4 rounded-lg"
                    key={index}
                  >
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

export default RestoMenu;
