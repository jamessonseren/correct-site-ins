import { Link } from "react-router-dom"
import logoCorrect from "../../assets/images/logo_correct.svg"

import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa";

import { useState } from "react";


const Navbar = ( ) => {
    const [open, setOpen] = useState<Boolean>(false);
    const [openSubmenuOptions, setOpenSubmenuOptions] = useState<Boolean>(false);
    const [openSubmenuCorrect, setOpenSubmenuCorrect] = useState<Boolean>(false);

  return (
    <header className="bg-white border-gray-200">
    <nav>
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={logoCorrect} alt="logo" className="md:cursor-pointer h-12 w-12" />
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                {open ? <IoIosClose className="text-4xl font-normal"/> : <IoMenu className="text-3xl font-normal"/>}
            </div>
        </div>
        <ul className=" md:flex hidden uppercase items-center gap-4 font-[Poppins] text-black">
          <li>
            <Link to="/" className="py-7 px-3 inline-block hover:text-gray-500 duration-300">
              Sobre nós
            </Link>
          </li>

          <div className="px-3 text-left md:cursor-pointer group">
            <p className="py-7 flex justify-between items-center md:pr-0 pr-5 group hover:text-gray-500 duration-300">
              Opções
              
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 mb-1 duration-300">
                <FaAngleUp/>
              </span>
            </p>
            
            <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-1 gap-8">
                      <div>
                          <li className="text-sm text-black-600 my-2.5">
                            <Link to="/voce" className="hover:text-gray-500 duration-300">
                              Para você
                            </Link>
                          </li>
                          <li className="text-sm text-black-600 my-2.5">
                            <Link to="/empresa" className="hover:text-gray-500 duration-300">
                              Para empresas
                            </Link>
                          </li>
                          <li className="text-sm text-black-600 my-2.5">
                            <Link to="/comercio" className="hover:text-gray-500 duration-300">
                              Parceiros comerciais
                            </Link>
                          </li>
                      </div>
                  </div>
                </div>
              </div>
          </div>
          <div className="px-3 text-left md:cursor-pointer group">
                <p className="py-7 flex justify-between items-center md:pr-0 pr-5 group hover:text-gray-500 duration-300">
                    Correct
                    
                    <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 mb-1 duration-300">
                      <FaAngleUp/>
                    </span>
                </p>
            
                <div>
                    <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                        <div className="py-3">
                            <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45" ></div>
                        </div>
                        <div className="bg-white p-5 grid grid-cols-1 gap-8">
                            <div>
                                <li className="text-sm text-black-600 my-2.5">
                                    <Link to="/correct_shop" className="hover:text-gray-500 duration-300">
                                        Correct shop
                                    </Link>
                                </li>
                                <li className="text-sm text-black-600 my-2.5">
                                    <Link to="correct_club" className="hover:text-gray-500 duration-300">
                                        Correct club
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
          </div>

          <li>
            <Link to="/rede_de_compras" className="py-7 px-3 inline-block hover:text-gray-500 duration-300">
                Rede de Compras
            </Link>
          </li>
          <li>
            <Link to="/contato" className="py-7 px-3 inline-block hover:text-gray-500 duration-300">
                Contato
            </Link>
          </li>
        </ul>
        <div className="py-5 md:flex hidden ">
            <button className="bg-[#00788c] hover:bg-[#2fa2b7] duration-300 text-white px-6 py-2 rounded-full duration-300">
                Entrar
            </button>
        </div>


        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Sobre nós
            </Link>
          </li>

          
            <div>
                <div>
                  <button className="pt-7 pb-4 px-3 flex justify-between items-center pr-5" onClick={() => setOpenSubmenuOptions(!openSubmenuOptions)}>
                    Opções

                    <span className={`text-xl block ${openSubmenuOptions ? 'rotate-180' : 'rotate-0'} ml-1 duration-300`}>
                      <FaAngleUp />
                    </span>
                  </button>
                  <div
                    className={`${openSubmenuOptions ? "md:hidden" : "hidden"}`}>
                      <li className="py-3 pl-7">
                        <Link to="/voce">Para você</Link>
                      </li>
                      <li className="py-3 pl-7">
                        <Link to="/empresa">Para empresas</Link>
                      </li>
                      <li className="py-3 pl-7">
                        <Link to="/comercio">Parceiros comerciais</Link>
                      </li>
                  </div>
                </div>
            </div>

            <div>
                <div>
                  <button className="pt-7 pb-4 px-3 flex justify-between items-center pr-5" onClick={() => setOpenSubmenuCorrect(!openSubmenuCorrect)}>
                    Correct
                    <span className={`text-xl block ${openSubmenuCorrect ? 'rotate-180' : 'rotate-0'} ml-1 duration-300`}>
                      <FaAngleUp/>
                    </span>
                  </button>
                  <div className={`${openSubmenuCorrect ? "md:hidden" : "hidden"}`}>
                      <li className="py-3 pl-7">
                        <Link to="/correct_shop">Correct shop</Link>
                      </li>
                      <li className="py-3 pl-7">
                        <Link to="/correct_club">Correct club</Link>
                      </li>
                  </div>
                </div>
            </div>

          <li>
            <Link to="/rede_de_compras" className="py-7 px-3 inline-block hover:text-gray-500 duration-300">
                Rede de Compras
            </Link>
          </li>

          <li>
            <Link to="/contato" className="py-7 px-3 inline-block hover:text-gray-500 duration-300">
                Contato
            </Link>
          </li>

          <div className="py-5">
            <button className="bg-[#00788c] duration-300 text-white  px-6 py-2 rounded-full">
                Entrar
            </button>
          </div>
        </ul>
      </div>
    </nav>
    </header>
  )
}

export default Navbar