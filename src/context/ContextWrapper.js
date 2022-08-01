import React, { useState, useContext, createContext, useRef } from "react";

const StateContext = createContext();

export const ContextWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const scroll = () => {
    if (window.scrollY >= 30) {
      setIsOpen(false);
    }
  };

  window.addEventListener("scroll", scroll);

  const about = useRef(null);
  const services = useRef(null);
  const pricing = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <StateContext.Provider
      value={{
        isOpen,
        toggle,
        about,
        services,
        pricing,
        contact,
        scrollToSection,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalContext = () => useContext(StateContext);
