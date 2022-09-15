import React from "react";

const Navbar = () => {
  const hambHandler = (e) => {
    e.currentTarget.classList.toggle("hamburger-active");
    const navMenu = document.querySelector("#nav-menu");
    navMenu.classList.toggle("hidden");
  };

  window.onscroll = () => {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;
    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex item-center justify-between relative">
          <div className="px-4">
            <a href="#" className="font-bold text-lg text-brandColor block py-6">
              rkuning
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              onClick={hambHandler}
              id="hamburger"
              type="button"
              name="hamburger"
              className="block absolute right-4 lg:hidden"
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left "></span>
            </button>
            <nav
              id="nav-menu"
              className="hidden absolute py-5 bg-lightColor shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a href="#home" className="text-base text-darkColor py-2 mx-8 flex group-hover:text-brandColor">
                    Beranda
                  </a>
                </li>
                <li className="group">
                  <a href="#about" className="text-base text-darkColor py-2 mx-8 flex group-hover:text-brandColor">
                    Tentang Saya
                  </a>
                </li>
                <li className="group">
                  <a href="#portfolio" className="text-base text-darkColor py-2 flex mx-8 group-hover:text-brandColor">
                    Portofolio
                  </a>
                </li>
                <li className="group">
                  <a href="#client" className="text-base text-darkColor py-2 mx-8 flex group-hover:text-brandColor">
                    Client
                  </a>
                </li>
                <li className="group">
                  <a href="#blog" className="text-base text-darkColor py-2 mx-8 flex group-hover:text-brandColor">
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a href="#contact" className="text-base text-darkColor py-2 mx-8 flex group-hover:text-brandColor">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
