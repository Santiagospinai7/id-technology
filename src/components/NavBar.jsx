import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/img/Logo_menu.png';

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const handleServiciosClick = () => {
    // hidde  dorpdown after click
    setIsDropdownOpen(false);

    if (location.pathname === "/") {
      // Scroll to #servicios section if on the root path
      document.getElementById("servicios").scrollIntoView({ behavior: "smooth" });
    } else {
      // Toggle dropdown if not on root path
      setIsDropdownOpen(!isDropdownOpen);
    }
    setIsNavOpen(false); // Close mobile menu if open
  };


  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className='flex lg:w-auto w-full justify-between'>
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="w-[50%] h-[50%] md:w-[70%] md:max-w-[100%] md:h-[100%]" alt="Logo" />
          </a>
          <button
            onClick={handleNavToggle} // Toggle main menu visibility
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded={isNavOpen}
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        {/* Main Menu */}
        <div className={`${isNavOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li className="text-center w-full md:w-auto md:text-left">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 pl-3 pr-4 text-white bg-green-200 rounded md:bg-transparent md:text-green-100 dark:text-white md:dark:text-blue-500'
                    : 'block py-2 pl-3 pr-4 text-green-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-100 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                }
              >
                Sobre Nosotros
              </NavLink>
            </li>
            <li className="relative text-center w-full md:w-auto md:text-left">
              <button
                onClick={handleServiciosClick}
                className="flex items-center justify-center md:justify-start w-full md:w-auto py-2 px-3 text-green-300 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-100 dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Servicios
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                id="dropdownNavbar"
                className={`${
                  isDropdownOpen ? '' : 'hidden'
                } absolute left-1/2 transform -translate-x-1/2 mt-2 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <NavLink
                      to="/servicios/desarrollo-de-software"
                      onClick={() => setIsDropdownOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? 'block px-4 py-2 text-green-100 bg-gray-100 dark:bg-gray-600 dark:text-white'
                          : 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      }
                    >
                      Desarrollo de Software
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/servicios/soporte-tecnico"
                      onClick={() => setIsDropdownOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? 'block px-4 py-2 text-green-100 bg-gray-100 dark:bg-gray-600 dark:text-white'
                          : 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      }
                    >
                      Soporte Técnico
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/servicios/distribucion-de-hardware-y-software"
                      onClick={() => setIsDropdownOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? 'block px-4 py-2 text-green-100 bg-gray-100 dark:bg-gray-600 dark:text-white'
                          : 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      }
                    >
                      Distribución de Hardware y Software
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/servicios/automatizacion-de-procesos"
                      onClick={() => setIsDropdownOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? 'block px-4 py-2 text-green-100 bg-gray-100 dark:bg-gray-600 dark:text-white'
                          : 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                      }
                    >
                      Automatización de Procesos
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li className="text-center w-full md:w-auto md:text-left">
            <a
              href="https://wa.me/+573159266621?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
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