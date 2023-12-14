import { Link } from "react-router-dom"
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";

import iosDownload from "../../assets/images/iosDownload.png"
import androidDownload from "../../assets/images/androidDownload.png"

const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-[#252525] text-white py-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex justify-center items-center my-1">
            <nav className="text-center">
                <ul className="flex flex-col gap-2">
                    <li className="hover:text-gray-400 duration-200">
                        <Link to="/">
                            Sobre nós
                        </Link>
                    </li>
                    <li className="hover:text-gray-400 duration-200">
                        <Link to="/voce">
                            Para você
                        </Link>
                    </li>
                    <li className="hover:text-gray-400 duration-200">
                        <Link to="/empresa">
                            Para Empresa
                        </Link>
                    </li>
                    <li className="hover:text-gray-400 duration-200">
                        <Link to="/comercio">
                            Parceiros Comerciais
                        </Link>
                    </li>
                    <li className="hover:text-gray-400 duration-200">
                        <Link to="/correct_club">
                            Correct Club
                        </Link>
                    </li>
                    <li className="hover:text-gray-400 duration-200">
                        <Link to="/correct_shop">
                            Correct Shop
                        </Link>
                    </li>
                    <li className="hover:text-gray-400 duration-200">
                        <Link to="/rede_de_compras">
                            Rede de Compras
                        </Link>
                    </li>
                    <li className="hover:text-gray-400 duration-200">
                        <Link to="/contato">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        
        <div className="text-center m-auto">
            <div className="mb-5 underline">
                <span className="hover:text-gray-400 duration-200">
                    +55 (88) 99900-0000
                </span>
            </div>

            <div className="flex justify-center items-center gap-6">
                <Link to="/" className="text-4xl hover:text-pink-500 duration-300">
                    <AiFillInstagram  />
                </Link>
                <Link to="/" className="text-3xl hover:text-blue-400 duration-300">
                    <FaFacebook />
                </Link>
                
            </div>
        </div>
        
        <div className="m-auto">
            <Link to="/" className="flex items-center my-3">
                <img src={androidDownload} alt="Android download" className="w-28 "/>
            </Link>
            <Link to="/" className="flex items-center">
                <img src={iosDownload} alt="Ios download" className="w-28 "/>
            </Link>
        </div>
        </div>
        <div className="text-center my-3">
            <span> &copy;Correct 2023 - Todos os direitor reservados</span>
        </div>
    </footer>
  )
}

export default Footer