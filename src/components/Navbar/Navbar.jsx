import React, { useState } from "react";

// @React Router Dom
import { NavLink } from "react-router-dom";

// @Material UI
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [openMenuVertical, setOpenMenuVertical] = useState(false);

  const handleMenuVertical = () => {
    if (!openMenuVertical) {
      setOpenMenuVertical(true);
    } else {
      setOpenMenuVertical(false);
    }
  };

  return (
    <>
      <nav className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between h-16">
            {/* ---logo--- */}
            <div className="bg-red-300 flex-shrink-0 flex items-center">
              <div className="hidden lg:block h-8 w-auto">LOGO</div>
            </div>
            {/* ---End logo--- */}
            {/* -----------------------------Begin Menu horizontal--------------------------------- */}
            <div className="flex-1 flex justify-between sm:justify-center">
              <div className="sm:block">
                <div className="flex space-x-4 hidden sm:block">
                  <NavLink
                    to="/"
                    className="bg-black text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    INICIO
                  </NavLink>

                  <NavLink
                    to="women-section"
                    className="font-bold text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    MUJER
                  </NavLink>

                  <NavLink
                    to="men-section"
                    className="font-bold text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    HOMBRE
                  </NavLink>
                </div>
              </div>
              <button
                aria-controls="mobile-menu"
                aria-expanded="false"
                className="w-10 h-10 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white md:hidden"
                onClick={handleMenuVertical}
                type="button"
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <NavLink
              to="shopping-car"
              className="hidden cursor-pointer sm:block"
            >
              <Badge color="secondary" badgeContent={5}>
                <ShoppingCartIcon />
              </Badge>
            </NavLink>
          </div>
          {/* ------------------------------Ended Menu horizontal---------------------------------- */}
        </div>

        {/* <---menu vertical ----> */}
        <div
          className={
            openMenuVertical
              ? "w-10/12 float-right z-40 opacity-100 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              : "w-10/12 float-right opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-2 pb-6 px-5">
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <NavLink
                    onClick={handleMenuVertical}
                    to="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <i className="fas fa-home"></i>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Inicio
                    </span>
                  </NavLink>
                  <NavLink
                    onClick={handleMenuVertical}
                    to="men-section"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <i className="fas fa-male"></i>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Hombre
                    </span>
                  </NavLink>
                  <NavLink
                    onClick={handleMenuVertical}
                    to="women-section"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    <i className="fas fa-female"></i>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Mujer
                    </span>
                  </NavLink>
                  <NavLink
                    to="shopping-car"
                    className="cursor-pointer"
                    onClick={handleMenuVertical}
                  >
                    <Badge color="secondary" badgeContent={5}>
                      <ShoppingCartIcon />
                    </Badge>
                  </NavLink>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <---end menu vertical ----> */}
      </nav>
    </>
  );
};

export default Navbar;
