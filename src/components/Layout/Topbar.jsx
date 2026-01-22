import { IoLogoInstagram } from "react-icons/io";
import { TbBrandTiktok } from "react-icons/tb";
import { LuPhone } from "react-icons/lu";
import { LiaFacebookSquare } from "react-icons/lia"; 
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="bg-white text-zinc-950 hidden md:block">
      <div className=" flex justify-between items-center py-4">
        {/* Left Section - Logo */}
        <div className="flex cursor-pointer">
          <Link to="/">
            <img
              src="/images/logo1.webp"
              alt="Logo"
              className="h-15 md:h-22 "
            />
          </Link>
        </div>

        {/* Center Section - Call Us */}
        <div className="text-sm hidden md:flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <p className="text-lg font-semibold text-[#D33737]">
              call us today
            </p>
            <a
              href="tel:02086219361"
              className="text-xl font-semibold text-rabbit hover:text-zinc-700"
            >
              020-8621-9361
            </a>
          </div>
          <LuPhone className="h-8 w-8 text-rabbit" />
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://wa.me/447815966395"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600
                         text-white px-4 py-3 rounded-full text-base font-semibold transition"
          >
            <IoLogoWhatsapp className="h-6 w-6" />
            Order on WhatsApp
          </a>
 
        </div>
      </div>
    </div>
  );
};

export default Topbar;
