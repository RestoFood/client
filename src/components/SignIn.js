import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { doSigninRequest } from "../redux/actions/user";
import { Link, Redirect } from "react-router-dom";
import loginUserHero from "../assets/auth/loginUser.jpg";
import AppBarWithBackButton from "../layout/common/AppBarWithBackButton";

export default function SignIn() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.userState.status);

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      username: values.username,
      password: values.password,
    };
    dispatch(doSigninRequest(payload));
  };

  if (status) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <AppBarWithBackButton />
      <div className="flex lg:w-2/4 w-full p-4 mt-20 mx-auto">
        <div
          className="hero hidden lg:block rounded-l-md"
          style={{ backgroundImage: `url(${loginUserHero})`, width: "50%" }}
        ></div>

        <div className="py-6 px-8 rounded-r-xl bg-white shadow-lg w-full lg:w-2/4">
          <h1 className="text-center text-green-600 font-bold text-lg">
            Masuk
          </h1>
          <form className="text-center text-sm" onSubmit={onSubmit}>
            <div className="mt-4">
              <h1>Username</h1>
              <input
                className="p-2 bg-green-100 focus:border-blue-400 w-full"
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <h1>Password</h1>
              <input
                className="p-2 bg-green-100  w-full"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="text-center my-5">
              <input
                type="submit"
                className="text-white bg-green-500 px-3 py-1 rounded-lg"
              />
            </div>
            <p className="mt-3 text-center">
              Belum punya akun?
              <button>
                <Link to="/restofood/signup">
                  <h1 className="text-green-700 font-bold">Mendaftar</h1>
                </Link>
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
