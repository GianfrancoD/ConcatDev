"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useLanguageContext } from "../../../../provider";
import React from "react";

export default function LanguageSelectorAnimated({ isMobile = false }) {
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

  const indicatorVariants: Variants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
    active: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      boxShadow: [
        "0 0 0px rgba(252, 174, 96, 0)",
        "0 0 8px rgba(252, 174, 96, 1)",
        "0 0 0px rgba(252, 174, 96, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse" as const,
      },
    },
  };

  const globeVariants: Variants = {
    animate: {
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={isMobile ? "w-full" : "relative"} ref={dropdownRef}>
      <motion.button
        onClick={toggleDropdown}
        className={buttonClasses}
        aria-expanded={isOpen}
        aria-haspopup="true"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="flex items-center">
          <motion.div variants={globeVariants} animate="animate">
            <Globe className="w-4 h-4 mr-2" />
          </motion.div>
          <span>
            {isMobile
              ? lenguaje === "es"
                ? "Español"
                : "English"
              : lenguaje.toUpperCase()}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={
              isMobile
                ? "mt-1 w-full bg-[#1A1438] border border-[#FCAE60]/20 shadow-lg z-50 rounded-md overflow-hidden"
                : "absolute right-0 mt-2 w-auto bg-[#312760] border border-[#FCAE60]/20 shadow-lg z-50 rounded-md overflow-hidden"
            }
          >
            <motion.button
              onClick={() => handleLanguageChange("es")}
              className={`block w-full text-left px-4 py-2 text-sm ${
                lenguaje === "es"
                  ? "text-[#FF8FB1] bg-[#1A1438]"
                  : "text-orange-300 hover:text-[#FF8FB1] hover:bg-[#1A1438]"
              } transition-colors`}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center justify-between">
                <span>Español</span>
                {lenguaje === "es" && (
                  <motion.span
                    className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1]"
                    variants={indicatorVariants}
                    initial="initial"
                    animate="active"
                  ></motion.span>
                )}
              </div>
            </motion.button>
            <motion.button
              onClick={() => handleLanguageChange("en")}
              className={`block w-full text-left px-4 py-2 text-sm ${
                lenguaje === "en"
                  ? "text-[#FF8FB1] bg-[#1A1438]"
                  : "text-orange-300 hover:text-[#FF8FB1] hover:bg-[#1A1438]"
              } transition-colors`}
              whileHover={{ x: 5 }}
            >
              <div className="flex items-center justify-between">
                <span>English</span>
                {lenguaje === "en" && (
                  <motion.span
                    className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FCAE60] to-[#FF8FB1]"
                    variants={indicatorVariants}
                    initial="initial"
                    animate="active"
                  ></motion.span>
                )}
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
