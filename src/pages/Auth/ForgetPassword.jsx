import React, { useState } from "react";
import { Link } from "react-router-dom";
import logImg from "../../assets/images/logImg.jpg"

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forget Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 lg:mr-10">
          <img
            src={logImg}
            alt="Key"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="lg:mr-10">
          <form
          //   onSubmit={onSubmit}
          >
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white outline-none border border-gray-300 rounded transition ease-in-out"
            />

            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-red hover:text-red transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue hover:text-blue transition duration-200 ease-in-out ml-1"
                >
                  Sign in instead
                </Link>
              </p>
            </div>

            <button
              className="w-full bg-blue text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              send reset password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
