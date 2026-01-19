import { motion } from "motion/react"
import img1 from "../../assets/veel_minced.png"
import img2 from "../../assets/meat-feature.png"
import img3 from "../../assets/meat-feature.png"
import img4 from "../../assets/meat-feature.png"
import img5 from "../../assets/meat-feature.png"
import img6 from "../../assets/meat-feature.png"

const images = [img1, img2, img3, img4, img5, img6]
 

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
}

const InsideStore = () => {
    return (
        <section className="container mx-auto bg-gray-50 py-20">
            <div className=" px-4">

                {/* Title */}
                <div className=" mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-rabbit">
                        Inside Tehzeeb Halal Meat & Grocers
                    </h2>
                    <p className="mt-4 text-gray-600">
                        A clean, welcoming, and trusted halal environment where quality
                        and freshness come first.
                    </p>
                </div>

                {/* Staggered Images */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className={`overflow-hidden rounded-lg shadow-md 
                ${index === 1 || index === 4 ? "md:translate-y-8" : ""}
              `}
                        >
                            <img
                                src={img}
                                alt="Tehzeeb Halal Store"
                                className="w-full   object-cover "
                            />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 mt-12 text-sm text-gray-700">
                    <span>✔ 100% Halal</span>
                    <span>✔ Fresh Daily</span>
                    <span>✔ Clean & Hygienic</span>
                    <span>✔ Trusted Butchers</span>
                </div>

            </div>
        </section>
    )
}

export default InsideStore
