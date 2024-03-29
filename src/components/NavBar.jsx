import { useState } from 'react';
import logo from '../assets/img/Logo_menu.png';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full mt-2">
      <div className="flex flex-col justify-between mx-auto p-4 md:flex-row">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                className="w-[70%] h-[100%] md:max-w-[100%] md:h-[100%] mr-3"
                alt="IDT Logo"
              />
            </a>
          </div>
          <div>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isNavOpen}
              onClick={handleNavToggle}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${
            isNavOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}
          id="navbar-default"
        >
          <ul className="text-sm font-medium flex flex-col md:flex-row md:space-x-8">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white bg-green-200 rounded md:bg-transparent md:text-green-100 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                SOBRE NOSOTROS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-green-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                SERVICIOS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-green-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                CONTACTO
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-green-300 rounded md:rounded-full md:text-white hover:bg-gray-200 md:hover:bg-green-300 md:border-0 md:bg-green-200 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                AGENDA UNA LLAMADA
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
