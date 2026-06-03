import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="fixed top-5 z-50 w-full flex justify-center px-4">
      <header
        className={`header-principal flex flex-col w-full md:w-4/6 bg-[#73bb71ce] rounded-3xl [box-shadow:0_4px_30px_rgba(0,_0,_0,_0.1)] backdrop-filter backdrop-blur-[15.5px] border border-[rgba(115,187,113,0.68)] drop-shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[350px] pb-6" : "max-h-20"
        }`}
      >
        {/* Top Bar */}
        <div className="w-full h-20 min-h-20 flex justify-between items-center px-6 md:px-10">
          <div className="logo flex justify-center items-center">
            <a href="/" className="text-2xl font-black tracking-wider text-white">
              SEI
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="header-nav hidden md:flex items-center text-white font-semibold gap-6">
            <a href="/eventos" className="hover:text-stone-200 transition-colors">
              Eventos
            </a>
            <a href="/cadastro" className="hover:text-stone-200 transition-colors">
              Cadastro
            </a>
            <a
              href="/login"
              className="bg-white text-dark-green w-25 h-11 rounded-xl flex items-center justify-center hover:bg-stone-200 duration-300 font-bold"
            >
              Entrar
            </a>
            <div className="search-button bg-white w-10 h-10 flex justify-center items-center rounded-full">
              <button
                type="button"
                className="button-search cursor-pointer w-10 h-10 hover:bg-gray-200 duration-300 rounded-full flex items-center justify-center"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="lupa-icon text-dark-green"
                />
              </button>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="text-white flex md:hidden cursor-pointer hover:opacity-85 transition-opacity"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} size="2x" />
          </button>
        </div>

        {/* Mobile Dropdown Nav */}
        <nav
          className={`flex flex-col md:hidden px-8 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <ul className="flex flex-col gap-4 text-white font-semibold text-lg pb-2">
            <li className="border-b border-white/20 pb-2">
              <a
                href="/eventos"
                className="block w-full hover:text-stone-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Eventos
              </a>
            </li>
            <li className="border-b border-white/20 pb-2">
              <a
                href="/cadastro"
                className="block w-full hover:text-stone-200 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cadastro
              </a>
            </li>
            <li className="pt-2">
              <a
                href="/login"
                className="bg-white text-dark-green w-full h-12 rounded-xl flex items-center justify-center hover:bg-stone-200 duration-300 font-bold"
                onClick={() => setIsOpen(false)}
              >
                Entrar
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
