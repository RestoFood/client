import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doSignupRequest } from "../redux/actions/user";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import AppBarWithBackButton from "../layout/common/AppBarWithBackButton";
import registerUser from "../assets/auth/fastfood.png";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const dispatch = useDispatch();
  const history = useHistory();
  const status = useSelector((state) => state.userState.status);

  const [values, setValues] = useState({
    username: undefined,
    email: "",
    user_password: "",
    user_handphone: "",
    user_roles: "",
    pin: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username: values.username,
      email: values.email,
      user_password: values.user_password,
      user_handphone: values.user_handphone,
      user_roles: values.user_roles,
      pin: values.pin,
    };

    dispatch(doSignupRequest(payload));
  };

  if (status) {
    history.push("/signin");
  }

  return (
    <div>
      <AppBarWithBackButton />
      <div className="flex lg:w-2/4 w-full p-4 mt-10 mx-auto">
        <div
          className="hero hidden lg:block rounded-l-md"
          style={{ backgroundImage: `url(${registerUser})`, width: "50%" }}
        ></div>

        <div className="py-6 px-8 w-full rounded-r-xl bg-white shadow-lg lg:w-2/4">
          <h1 className="text-center text-green-600 font-bold text-lg">
            Buat akun untuk menikmati layanan kami
          </h1>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  type="text"
                  value={values.username}
                  onChange={handleChange("username")}
                  autoComplete
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User Name"
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  value={values.user_password}
                  onChange={handleChange("user_password")}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  value={values.email}
                  onChange={handleChange("email")}
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Phone
                </label>
                <input
                  id="phone"
                  value={values.user_handphone}
                  onChange={handleChange("user_handphone")}
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Phone"
                />
              </div>
              <div>
                <label htmlFor="pin" className="sr-only">
                  Pin
                </label>
                <input
                  id="pin"
                  value={values.pin}
                  onChange={handleChange("pin")}
                  type="number"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Pin"
                />
              </div>
              <select
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                defaultValue="User"
                value={values.user_roles}
                onChange={handleChange("user_roles")}
              >
                <option value="user">User</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                onClick={onSubmit}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Daftar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
