import React, { useEffect, useState } from "react";

const navigation = [
  { name: "home", url: "#home" },
  { name: "projects", url: "#projects" },
  { name: "about", url: "#about" },
  { name: "skills", url: "#skills" },
  { name: "contact", url: "#contact" },
];

const Navbar = ({ isClicked, toggleNavClick }) => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrolPosition = window.scrollY;
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        if (section) {
          console.log(section.id)
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrolPosition >= screenTop &&
            scrolPosition <= sectionHeight + sectionHeight
          ) {
            setActiveLink(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile Nav */}
      <nav
        className={`${
          isClicked ? "translate-0" : "-translate-x-[190.25rem]"
        } fixed left-0 top-0 h-screen w-full items-center justify-start transition-all duration-500 lg:hidden`}
      >
        <ul className="h-full w-[60%] bg-gray-900 pl-4 pt-22">
          {navigation.map((item, key) => (
            <li key={key} className="mb-4 text-lg font-medium capitalize">
              <a
                className={`${
                  activeLink === item.name ? "text-blue-600" : "text-white"
                } hover:text-blue-600 transition-colors duration-300 ease-in`}
                href={item.url}
                onClick={() => toggleNavClick()}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden md:inline-flex">
        <ul className="flex gap-10 capitalize">
          {navigation.map((item, key) => (
            <li key={key} className="inline-block">
              <a
                className={`relative font-semibold after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-[20px] after:rounded-xl afetr:transition-all after:duration-300 after:ease-in hover:after:bg-blue-600 hover:after:w-full ${
                  activeLink === item.name ? "text-blue-600 relative after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-full after:bg-blue-600 after:rounded-xl afetr:transition-all after:duration-300 after:ease-in hover:after:bg-blue-600 hover:after:w-full" : "text-white"
                } hover:text-blue-600 transition-colors duration-300 ease-in`}
                href={item.url}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
