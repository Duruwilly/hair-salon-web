import React from "react";
import { BsInstagram, BsSnapchat, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/ContextWrapper";

const Footer = () => {
  const { about, services, pricing, scrollToSection } = useGlobalContext()

  return (
    <footer className=" bg-mobile-nav-bg text-white uppercase">
      <div className="p-5 flex items-center justify-between footer gap-4">
        <ul className="flex flex-col md:flex-row text-center text-black gap-3 md:gap-5 cursor-pointer">
          <li>
            <Link to="/">home</Link>
          </li>
          <li onClick={() => scrollToSection(about)}>about us</li>
          <li onClick={() => scrollToSection(services)}>services</li>
          <li>
            <Link to="/booking">booking</Link>
          </li>
          <li onClick={() => scrollToSection(pricing)}>pricing</li>
        </ul>
        <div className="flex gap-4">
          <a
            href="https://facebook.com/prince.duru.355"
            target="_blank"
            className="text-2xl bg-[#0a3b52] rounded-full p-2"
          >
            <BsFacebook />
          </a>
          <a
            href="https://facebook.com/prince.duru.355"
            target="_blank"
            className="text-2xl bg-[#ffcc00] rounded-full p-2"
          >
            <BsSnapchat />
          </a>
          <a
            href="https://instagram.com/theprincewillduru"
            target="_blank"
            className="text-2xl bg-[#a70f17] rounded-full p-2"
          >
            <BsInstagram />
          </a>
        </div>
        <p className="text-black">&copy; 2022 homie unisex salon</p>
      </div>
    </footer>
  );
};

export default Footer;
