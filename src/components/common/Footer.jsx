import { Link } from "react-router-dom";
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterXLine } from 'react-icons/ri';
import { TbBrandMeta } from 'react-icons/tb';
import { LiaFacebookSquare } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-24 lg:px-8">

        <div className="grid row-gap-10 mb-8 lg:grid-cols-6">
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
        
            <div>
              <p className="font-medium tracking-wide text-zinc-950">Useful Links</p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/#testimonials"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#faqs"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#offers"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    What We offer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#benefits"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Our benefits
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium tracking-wide text-zinc-950">
                Category
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/#shop"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Fresh Meat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Groceries
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Bakery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Organic Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Dairy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium tracking-wide text-zinc-950">
                Others
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Instant Food
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Baby Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Spices & Masalas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Health & Wellness
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Personal Care
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium tracking-wide text-zinc-950">
                Legal
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-zinc-950 transition-colors duration-300 hover:text-deep-purple-accent-200"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:max-w-md lg:col-span-2 mt-4 sm-mt-0">
            <span className="text-base font-medium tracking-wide text-zinc-950">
              Subscribe for updates
            </span>
            <form className="flex flex-col mt-4 md:flex-row">
              <input
                placeholder="Email"
                required
                type="text"
                className="grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-rabbit border hover:bg-zinc-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-zinc-950">
              Bacon ipsum dolor amet short ribs pig sausage prosciuto chicken
              spare ribs salami.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
          <p className="text-sm text-rabbit">
            © Copyright 2020 mexemai. All rights reserved.
          </p>

          <div className='flex items-center space-x-4'>
            {/* external/social links remain <a> */}
            <a href='#' className='text-rabbit font-semibold hover:text-zinc-700'>
              <TbBrandMeta className='h-6 w-6' />
            </a>
            <a href='#' className='text-rabbit font-semibold hover:text-zinc-700'>
              <IoLogoInstagram className='h-6 w-6' />
            </a>
            <a href='#' className='text-rabbit font-semibold hover:text-zinc-700'>
              <RiTwitterXLine className='h-6 w-6' />
            </a>
            <a href='#' className='text-rabbit font-semibold hover:text-zinc-700'>
              <LiaFacebookSquare className='h-6 w-6' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
