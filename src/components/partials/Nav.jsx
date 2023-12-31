import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import userUrl from "../../assets/images/user-icon.png";

const Nav = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Service", path: "/service" },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow-md w-full sticky top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-20 px-7">
        <div className="text-4xl font-semibold">Sandbox</div>

        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-3xl absolute right-8 top-4 cursor-pointer md:hidden"
        >
          {isMenuOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

        <div
          className={`cursor-pointer md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
          ${isMenuOpen ? "top-12 opacity-100" : "top-[-490px]"} md:opacity-100`}
        >
          {navItems.map((v, key) => (
            <div
              key={key}
              className="md:ml-8 text-xl font-semibold md:my-0 my-7"
            >
              <div className="text-black-dark hover:text-black-light duration-500 text-center">
                <Link to={v.path}>{v.label}</Link>
              </div>
            </div>
          ))}

          <div className="ml-3 mt-5 sm:mb-5 hidden md:block">
            <AiOutlineSearch size={32} />
          </div>
          <div className="md:ml-2 text-center">
            <Link to="/sign-in">
              {isMenuOpen ? (
                <button className="text-black px-6 py-2 text-2xl font-bold">
                  Sign In
                </button>
              ) : (
                <motion.img
                  src={userUrl}
                  whileHover={{ scale: 0.9 }}
                  width="54px"
                  className="mx-4"
                  alt=""
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
