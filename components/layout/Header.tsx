"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { LinkButton } from "@/components/UI/LinkButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // If not on home page, rely on pathname
    if (pathname !== "/" && pathname !== "/home") {
      const currentParam = pathname.substring(1); // remove leading slash

      setActiveSection(currentParam);

      return;
    }

    const handleScroll = () => {
      const sections = ["programme", "info-pratique"]; // Updated to match nav items
      const scrollY = window.scrollY;

      if (scrollY < 100) {
        setActiveSection("home");

        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);

        if (section && section.offsetTop <= scrollY + 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navItems = [
    { id: "home", label: "Accueil" },
    { id: "programme", label: "Programme" },
    { id: "info-pratique", label: "Info Pratique" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-primary py-5 sm:py-4 border-b border-black-200 px-8 md:px-24 ">
      <div className="flex items-center justify-between flex-row-reverse sm:flex-row">
        <div className="flex items-center gap-2">
          <div className=" sm:block">
            <p className="text-md font-playfair font-bold">
              <Link href="/">Angélique & Amaury</Link>
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-4">
          {navItems.map(({ id, label }) => (
            <LinkButton
              key={id}
              aria-current={activeSection === id ? "page" : undefined}
              className={`font-semibold font-playfair transition ${
                activeSection === id
                  ? "bg-black text-white"
                  : "hover:text-black text-black"
              }`}
              href={`/${id}`}
              size="lg"
              variant="light"
            >
              {label}
            </LinkButton>
          ))}{" "}
          <div className="hidden lg:flex items-center gap-4">
            <LinkButton
              className="bg-secondary text-black font-playfair font-bold px-4 py-2 rounded-md transition"
              href="/liste-mariage"
            >
              Liste de mariage
            </LinkButton>
          </div>
        </nav>

        {/* CTA */}

        {/* Mobile toggle */}
        <button
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="sm:hidden text-gray-800"
          onClick={() => setIsOpen((prev) => !prev)}
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
        <button
          aria-label="Fermer le menu"
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 w-full h-full border-none cursor-default ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer panel aligné à gauche */}
        <div
          className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-primary shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 ${
            isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          {/* Header mini */}
          <div>
            <div className="flex justify-between items-center mb-4 ">
              <div className="flex items-center gap-2">
                <div>
                  <p className="text-sm font-playfair font-bold leading-none">
                    <Link href="/">Angélique & Amaury</Link>
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="text-gray-800" size={24} />
              </button>
            </div>

            <div className="w-full border-t border-black mb-3" />

            {/* Nav */}
            <nav className="flex flex-col gap-4   ">
              {navItems.map(({ id, label }) => (
                <Link
                  key={id}
                  className={`text-base font-semibold ${
                    activeSection === id
                      ? "text-black underline"
                      : "text-gray-800"
                  }`}
                  href={`/${id}`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mt-6 flex flex-col gap-6">
            <LinkButton
              className="text-black bg-secondary text-center py-2 rounded-md font-semibold flex items-center"
              href="/liste-mariage"
              onPress={() => setIsOpen(false)}
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
