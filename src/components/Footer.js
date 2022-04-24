import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="max-w-7xl mx-auto py-12 pb-20  shadow dark:bg-gray-800 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="mb-4 flex items-center sm:mb-0">
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              Harisenin FSD
            </span>

          </a>
          <ul className="mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0">
            <li>
              <Link to="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2022{" "}
          <a href="https://flowbite.com" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
          <Link
                    to="/"
                    className=" undefined   bg-[linear-gradient(180deg,_#C8102E_50%,_#FFF_50%)] m-2 px-8 py-1 outline outline-1 outline-black "
                  ></Link>
        </span>
      </footer>
    </>
  );
};

export default Footer;
