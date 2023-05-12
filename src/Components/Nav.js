'use client';
import { useState } from "react";
import Image from "next/image";
import Logo from '../Images/logic.png'
import Link from "next/link";
import { FiMenu } from 'react-icons/fi'
import '../Styles/nav.module.css'

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header className="py-2 absolute w-full bg-black lg:bg-whiteSmoke">
        <div className="flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full">
          <Image src={Logo} alt="logo.png" width={150} height={50} />

          <FiMenu
            className="lg:hidden block h-5 w-6 cursor-pointer text-white"
            onClick={() => setOpen(!open)}
          />

          <nav
            className={`${
              open ? "block" : "hidden"
            } w-full lg:flex lg:items-center lg:w-auto`}
          >
            <ul className="text-base text-gray-600 lg:flex lg:justify-between lg:align-center">
              <li className="lg:px-5 py-2 block text-light hover:text-white font-semibold">
                <Link href="#trading" className="font-sans">Trading</Link>
              </li>
              <li className="lg:px-5 py-2 block text-light hover:text-white font-semibold">
                <Link href="#gallery" className="font-sans">Gallery</Link>
              </li>
              <li className="lg:px-5 py-2 block text-light hover:text-white font-semibold">
                <Link href="#marketPlace" className="font-sans">MarketPlace</Link>
              </li>
              <li className="lg:px-5 py-2 block text-light hover:text-white font-semibold">
                <Link href="#ContactUs" className="font-sans">Contact us</Link>
              </li>
              <button className="lg:px-5 py-2 block bg-orange text-white rounded-xl font-semibold p-4">
                Get Started
              </button>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default NavBar