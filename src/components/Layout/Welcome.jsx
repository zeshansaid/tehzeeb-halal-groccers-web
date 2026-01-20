
import { motion } from "motion/react"
 
import { Link } from "react-router-dom";

export const Welcome = () => {
    return (
        <motion.div
            initial={{ y: -50, opacity: 0 }} // start above
            whileInView={{ y: 0, opacity: 1 }} // move to position when visible
            // viewport={{ once: tr, amount: 0.5 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col md:flex-row bg-[#F0F3F2] justify-between items-center px-6 py-12 rounded-lg mt-10 md:mt-20">

            {/* Left Section */}
            <div className=" flex flex-col md:flex-row items-center sm:space-x-8">
                <div>
                    <img src="/images/logo1.webp" alt="Logo" width={150} height={150} />
                </div>

                <div>

                    <h1 className="text-2xl sm:text-4xl md:text-5xl text-rabbit hover:text-zinc-700 font-bold text-center md:text-left">
                        <span className="text-lg text-endeavour-400">Welcome to</span>  <br /> Tehzeeb  Halal <br /> Meat &  Grocers
                    </h1>
                    <p className="text-gray-500 font-light text-sm mt-2 text-center md:text-left">
                        Your trusted store for fresh halal meat and everyday groceries.
                    </p>
                </div>
            </div>

            {/* Right Section - Button */}
            <Link to="/contact">
                <button
                    className="  bg-rabbit  text-white  px-15  py-4 mx-2 mt-3 md:mt-1 
                 rounded-lg   font-medium  hover:bg-zinc-700 transition cursor-pointer "
                >
                    Contact Us
                </button>
            </Link>

        </motion.div>
    );
};
