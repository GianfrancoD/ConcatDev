"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { useLanguageContext } from "../../../../provider";
import React from "react";

export default function LanguageSelector({ isMobile = false }) {
  const { lenguaje, changeLanguage } = useLanguageContext();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lenguajeNew: "es" | "en") => {
    changeLanguage(lenguajeNew);
    setIsOpen(false);
  };

  const buttonClasses = isMobile
    ? "flex items-center justify-between w-full text-[#FCAE60] hover:text-[#FF8FB1] hover:bg-[#1A1438] px-3 py-2 rounded-md text-base font-medium transition-colors"
    : "flex items-center space-x-1 text-sm text-orange-300 hover:text-orange-500 transition-colors";

  const dropdownClasses = isMobile
    ? "mt-1 w-full bg-[#1A1438] border border-[#FCAE60]/20 shadow-lg z-50 rounded-md overflow-hidden"
    : "absolute right-0 mt-2 w-auto bg-[#312760] border border-[#FCAE60]/20 shadow-lg z-50 rounded-md overflow-hidden";

  const indicatorVariants: Variants = {
    initial: { scale: 0 },
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360],
      boxShadow: [
        "0 0 0px rgba(252, 174, 96, 0.8)",
        "0 0 10px rgba(252, 174, 96, 1)",
        "0 0 0px rgba(252, 174, 96, 0.8)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <div className={isMobile ? "w-full" : "relative"} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={buttonClasses}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="flex items-center">
          <Globe className="w-4 h-4 mr-2" />
          <span>
            {isMobile
              ? lenguaje === "es"
                ? "Español"
                : "English"
              : lenguaje.toUpperCase()}
          </span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className={dropdownClasses}>
          <button
            onClick={() => handleLanguageChange("es")}
            className={`block w-full text-left px-4 py-2 text-sm ${
              lenguaje === "es"
                ? "text-[#FF8FB1] bg-[#1A1438]"
                : "text-orange-300 hover:text-[#FF8FB1] hover:bg-[#1A1438]"
            } transition-colors`}
          >
            <div className="flex items-center justify-between">
              <span>Español</span>
              {lenguaje === "es" && (
                <motion.span
                  className="h-2 w-2 mx-2 my-2 -mr-1 rounded-full bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1]"
                  variants={indicatorVariants}
                  initial="initial"
                  animate="animate"
                ></motion.span>
              )}
            </div>
          </button>
          <button
            onClick={() => handleLanguageChange("en")}
            className={`block w-full text-left px-4 py-2 text-sm ${
              lenguaje === "en"
                ? "text-[#FF8FB1] bg-[#1A1438]"
                : "text-orange-300 hover:text-[#FF8FB1] hover:bg-[#1A1438]"
            } transition-colors`}
          >
            <div className="flex items-center justify-between">
              <span>English</span>
              {lenguaje === "en" && (
                <motion.span
                  className="h-2 w-2 mx-2 my-2 -mr-1 rounded-full bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1]"
                  variants={indicatorVariants}
                  initial="initial"
                  animate="animate"
                ></motion.span>
              )}
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
