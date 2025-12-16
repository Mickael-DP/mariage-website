"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Inbox } from "lucide-react";

import { LinkButton } from "@/components/UI/LinkButton";
import Container from "./Container";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["programme", "info"];
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollY + 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navItems = [
    { id: "programme", label: "Programme" },
    { id: "info-pratique", label: "Info Pratique" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-primary py-5 sm:py-4 border-b border-black-200 px-8 md:px-24 ">
      <div className="flex items-center justify-between flex-row-reverse sm:flex-row">
        <div className="flex items-center gap-2">
          <div className=" sm:block">
            <p className="text-md font-playfair font-bold"><a href="/">Angélique & Amaury</a></p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-4">
          {navItems.map(({ id, label }) => (
            <LinkButton
              key={id}
              size="lg"
              href={`/${id}`}
              variant="light"
              aria-current={activeSection === id ? "page" : undefined}
              className={`font-semibold font-playfair transition ${activeSection === id
                ? "bg-black text-black"
                : "hover:text-black text-black"
                }`}
            >
              {label}
            </LinkButton>
          ))}{" "}
          <div className="hidden lg:flex items-center gap-4">
            <LinkButton
              href="/liste-mariage"
              className="bg-secondary text-black font-playfair font-bold px-4 py-2 rounded-md transition"
            >
              Liste de mariage
            </LinkButton>
          </div>
        </nav>

        {/* CTA */}

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-gray-800"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu drawer + overlay */}
      <div
        className={`sm:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel aligné à gauche */}
        <div
          className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-primary shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            }`}
        >
          {/* Header mini */}
          <div>
            <div className="flex justify-between items-center mb-4 ">
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-sm font-playfair font-bold leading-none">
                    <a href="/">Angélique & Amaury</a>
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} className="text-gray-800" />
              </button>
            </div>

            <div className="w-full border-t border-black mb-3"></div>

            {/* Nav */}
            <nav className="flex flex-col gap-4   ">
              {navItems.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`/${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold ${activeSection === id
                    ? "text-black underline"
                    : "text-gray-800"
                    }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>


          <div className="mt-6 flex flex-col gap-6">
            <LinkButton

              href="/liste-mariage"
              onPress={() => setIsOpen(false)}
              className="text-black bg-secondary text-center py-2 rounded-md font-semibold flex items-center"
            >
              Liste de mariage
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
