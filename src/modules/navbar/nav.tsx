"use client";

import { useState, useEffect } from "react";
import React from "react";
import { scrollToAll } from "../scroll/allScroll.tsx";

import {
  Home,
  Briefcase,
  Layout,
  Phone,
  Menu,
  X,
  NotepadText,
  PersonStanding,
} from "lucide-react";
// import logo from "../../assets/logobrandaxiom.png";
import logo from "../../assets/concatdev2.png";
import LanguageSelector from "./components/lenguajeSelector/lenguaje.tsx";
import { useLanguageContext } from "../../provider.tsx";
import LanguageSelectorAnimated from "./components/lenguajeSelector/lenguajeanimado.tsx";

// const navItems = [
//   { name: "Inicio", href: "/", icon: Home },
//   { name: "Servicios", href: "servicios", icon: Briefcase },
//   { name: "Proyectos", href: "projects", icon: Layout },
//   { name: "Blog", href: "blog", icon: NotepadText },
//   { name: "Testimonios", href: "testimonio", icon: PersonStanding },
//   { name: "Contactos", href: "footer", icon: Phone },
// ];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguageContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home", "Inicio"), href: "/", icon: Home },
    { name: t("nav.services"), href: "servicios", icon: Briefcase },
    { name: t("nav.projects"), href: "projects", icon: Layout },
    { name: t("nav.blog"), href: "blog", icon: NotepadText },
    { name: t("nav.testimonials"), href: "testimonio", icon: PersonStanding },
    { name: t("nav.contacts"), href: "footer", icon: Phone },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#312760]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            {/* <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              BrandAxiom
            </a> */}
            <img src={logo} alt="" className="h-[15vh] w-auto" />
          </div>
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                className="text-sm text-orange-300  hover:text-orange-500 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToAll(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
            <LanguageSelector />
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] text-gray-700 text-sm font-medium hover:from-[#ffa851] hover:to-[#ff6492] transition-all"
            >
              {t("nav.getStarted", "Empezar")}
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FCAE60] hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#312760] backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.href}`}
              className="flex items-center text-[#FCAE60] hover:text-[#FF8FB1] hover:bg-[#1A1438]  px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={(e) => {
                setIsOpen(false);
                scrollToAll(item.href);
                e.preventDefault();
              }}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </a>
          ))}
          <a
            href="contact"
            className="flex items-center justify-center px-4 py-2 rounded-md bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1] text-gray-700 text-sm font-medium hover:from-blue-600 hover:to-cyan-600 transition-all mt-4"
            onClick={() => setIsOpen(false)}
          >
            {t("nav.getStarted")}
          </a>
          <LanguageSelectorAnimated isMobile={true} />
        </div>
      </div>
    </nav>
  );
};
