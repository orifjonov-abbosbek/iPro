import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";

const NavbarDefault = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/">
          <a href="#" className="flex items-center">
            Home
          </a>
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/social">
          <a href="#" className="flex items-center">
            Social
          </a>
        </Link>
      </Typography>

      <Link to="/price">
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <a href="#" className="flex items-center">
            Price
          </a>
        </Typography>
      </Link>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 bg-transparent  max-w-full rounded-none py-2 px-4 ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img className="w-[200px]  h-[60px]" src={logo} alt="" />
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <Link to="/register">
          <Button
            variant="gradient"
            size="sm"
            color="green"
            className="hidden lg:inline-block  capitalize text-xs"
          >
            <span className="">Register/Login</span>
          </Button>
        </Link>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav} className="flex">
        <div className="container flex flex-col items-center mx-auto">
          {navList}

          <Link to="/register">
            <Button variant="gradient" size="sm" fullWidth className="mb-2 ">
              <span>Register/Login</span>
            </Button>
          </Link>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarDefault;
