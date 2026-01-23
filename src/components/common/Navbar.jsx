import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

import NavDropdown from "../navbar-submenus/NavDropdown";
import CategoriesMegaMenu from "../navbar-submenus/CategoriesMegaMenu";
import MobileNavAccordion from "../navbar-submenus/MobileNavAccordion";
import MobileCategoriesAccordion from "../navbar-submenus/MobileCategoriesAccordion";

import { Link } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { TbBrandTiktok } from "react-icons/tb";
import { LiaFacebookSquare } from "react-icons/lia";
import { MdWhatsapp } from "react-icons/md";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);
  const toggleMobileNavDrawer = () => {
    setOpenMobileDrawer(!openMobileDrawer);
  };
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
      <nav className="w-full flex items-center justify-between md:py-4 md:px-6">
        {/* CENTER NAVIGATION */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link
            to="/"
            className=" text-xl  text-rabbit font-medium hover:text-black  "
          >
            Home
          </Link>
          <CategoriesMegaMenu />
          {/* <NavDropdown
                        title="About"
                        to="/about"
                        items={[
                            { label: "Who We Are", to: "/about/who-we-are" },
                            { label: "Our Mission", to: "/about/our-mission" },
                            { label: "Our Story", to: "/about/contact" },
                        ]}
                    /> */}
          <NavDropdown
            title="Pages"
            to="/"
            items={[
              { label: "About us", to: "/about" },
              { label: "Testimonials", to: "/#testimonials" },
              { label: "FAQs", to: "/#faqs" },
            ]}
          />
          <NavDropdown
            title="Features"
            to="/"
            items={[
              { label: "What We offer", to: "/#offers" },
              { label: "Our benefits", to: "/#benefits" },
            ]}
          />
          <Link
            to="/contact"
            className=" text-xl text-rabbit  font-medium hover:text-zinc-700 "
          >
            Contact us
          </Link>

          <Link
            to="/store"
            className=" text-xl text-rabbit  font-medium hover:text-zinc-700 "
          >
            {" "}
            Our Store
          </Link>
        </div>
        {/* RIGHT NAVIGATION */}
        <div className="md:hidden min-w-full flex justify-between items-center px-2">
          {/* MOBILE MENU */}
          {/* <div className="md:hidden">
            <Link to="/">
              <img
                src="/images/logo1.webp"
                alt="Logo"
                className="h-15 md:h-22 cursor-pointer"
              />
            </Link>
          </div> */}

          <button
            onClick={toggleMobileNavDrawer}
            className="md:hidden hover:text-zinc-700"
          >
            <HiBars3BottomRight className="h-8 w-8 text-gray-700" />
          </button>

          <div className="flex items-center">
            <a
              href="https://wa.me/447815966395"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600
                                             text-white px-4 py-3 rounded-full text-xs font-semibold transition"
            >
              <IoLogoWhatsapp className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile  Navigation Drawer */}
      <div
        className={`fixed top-0 left-0  flex flex-col w-full sm:w-3/4 md:w-1/2 h-full bg-white shadow-lg 
                    z-50 transform transition-transform duration-300 ease-in-out 
                    ${openMobileDrawer ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-4">
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={toggleMobileNavDrawer}>
              <IoMdClose className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Centered Logo */}
          <div className="flex justify-between mt-8">
            <Link to="/" onClick={toggleMobileNavDrawer}>
              <img
                src="/images/logo1.webp"
                alt="Logo"
                className="h-16 cursor-pointer"
              />
            </Link>

            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/447815966395"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 font-semibold hover:text-zinc-700"
                aria-label="WhatsApp"
              >
                <MdWhatsapp className="h-7 w-7" />
              </a>
              <a
                href="https://www.instagram.com/tehzeebhalalmeatgrocers/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-pink-500 font-semibold hover:text-zinc-700"
              >
                <IoLogoInstagram className="h-7 w-7" />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61586868997470"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-rabbit font-semibold hover:text-zinc-700"
              >
                <LiaFacebookSquare className="h-7 w-7" />
              </a>
              <a
                href="https://www.tiktok.com/@tehzeebhalalmeatgrocers"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-red-500 font-semibold hover:text-zinc-700"
              >
                <TbBrandTiktok className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/"
              onClick={toggleMobileNavDrawer}
              className="block text-gray-600 hover:text-zinc-700"
            >
              Home
            </Link>
            <MobileCategoriesAccordion onItemClick={toggleMobileNavDrawer} />

            <MobileNavAccordion
              title="Pages"
              onItemClick={toggleMobileNavDrawer}
              items={[
                { label: "About us", to: "/about" },
                { label: "Testimonials", to: "/#testimonials" },
                { label: "FAQs", to: "/#faqs" },
              ]}
            />

            <MobileNavAccordion
              title="Features"
              onItemClick={toggleMobileNavDrawer}
              items={[
                { label: "What We offer", to: "/#testimonials" },
                { label: "Our benefits", to: "/#faqs" },
              ]}
            />
            <Link
              to="/contact"
              onClick={toggleMobileNavDrawer}
              className="block text-gray-600 hover:text-zinc-700"
            >
              Contact us
            </Link>
            <Link
              to="/store"
              onClick={toggleMobileNavDrawer}
              className="block text-gray-600 hover:text-zinc-700"
            >
              {" "}
              Our Store
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
