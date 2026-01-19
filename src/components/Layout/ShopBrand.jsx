
import { motion } from "motion/react"

// src/data/brandLogos.js
const brandLogos = [
    {
        id: 1,
        name: "logo1",
        logo: "/src/assets/1.png",
    },
    {
        id: 2,
        name: "logo2",
        logo: "/src/assets/2.png",
    },
    {
        id: 3,
        name: "logo3",
        logo: "/src/assets/3.png",
    },
    {
        id: 4,
        name: "logo4",
        logo: "/src/assets/4.png",
    },
    {
        id: 5,
        name: "logo5",
        logo: "/src/assets/5.png",
    },
    {
        id: 6,
        name: "logo6",
        logo: "/src/assets/6.png",
    },
    {
        id: 7,
        name: "logo7",
        logo: "/src/assets/7.png",
    },
    {
        id: 8,
        name: "logo8",
        logo: "/src/assets/8.png",
    },
    {
        id: 9,
        name: "logo9",
        logo: "/src/assets/9.png",
    },
    {
        id: 10,
        name: "logo10",
        logo: "/src/assets/10.png",
    },
    {
        id: 11,
        name: "logo11",
        logo: "/src/assets/11.png",
    },
    {
        id: 12,
        name: "logo12",
        logo: "/src/assets/12.png",
    },
];


const ShopBrand = () => {
    return (
        <section className="container mx-auto   px-4 py-12 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-semibold  text-rabbit ">
                Shop by Brand
            </h2>
            <p className="mt-2 text-gray-600 mb-12">
                We partner with reliable grocery brands you can trust
            </p>



            {/* Brand Grid */}
            <motion.div
                initial={{ y: -30, opacity: 0 }} // start above
                whileInView={{ y: 0, opacity: 1 }} // move to position when visible
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                {brandLogos.map((brand) => (
                    <div
                        key={brand.id}
                        className="flex items-center justify-center rounded-lg bg-gray-100 px-6 py-3
                        transition transform duration-800 hover:bg-gray-200 hover:-translate-y-2 "
                    >
                        <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-full max-h-24 object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default ShopBrand;
