"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Inbox } from "lucide-react";
import { Button } from "@heroui/button";
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
    { id: "info", label: "Info Pratique" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-primary py-3 sm:py-4 border-b border-black-200 px-16 ">
      <div className="flex items-center justify-between flex-row-reverse sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <p className="text-md  font-playfair font-bold">Amaury et Angélique</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-4">
          {navItems.map(({ id, label }) => (
            <Button
              key={id}
              size="lg"
              as={Link}
              href={`#${id}`}
              variant="light"
              aria-current={activeSection === id ? "page" : undefined}
              className={`font-semibold font-playfair transition ${
                activeSection === id
                  ? "bg-black text-black"
                  : "hover:text-black text-black"
              }`}
            >
              {label}
            </Button>
          ))}{" "}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              as={Link}
              href="#contact"
              className="bg-secondary text-black font-playfair font-bold px-4 py-2 rounded-md transition"
            >
              Liste de mariage
            </Button>
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
        className={`sm:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel aligné à gauche */}
        <div
          className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          {/* Header mini */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-sm font-bold leading-none">MICKAEL</p>
                  <p className="text-xs font-bold  leading-none">
                    DALLE PASQUALINE
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={24} className="text-gray-800" />
              </button>
            </div>

            <hr className="border-gray-200 my-4" />

            {/* Nav */}
            <nav className="flex flex-col gap-4">
              {navItems.map(({ id, label }) => (
                <Link
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-semibold ${
                    activeSection === id
                      ? "text-black underline"
                      : "text-gray-800"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Bottom - CTA + réseaux */}
          <div className="mt-6 flex flex-col gap-6">
            <Button
              endContent={<Inbox size={24} />}
              as={Link}
              href="#contact"
              onPress={() => setIsOpen(false)}
              className="text-black bg-primary text-center py-2 rounded-md font-semibold flex items-center"
            >
              Liste de mariage
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
