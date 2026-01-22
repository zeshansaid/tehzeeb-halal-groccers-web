
import { motion } from "motion/react"
import { brandLogos } from "../../assets/brandLogos";

 

 


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
                            src={brand.src}
                            alt={brand.name}
                            className="w-full max-h-24 object-contain"
                             
                        />
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default ShopBrand;
