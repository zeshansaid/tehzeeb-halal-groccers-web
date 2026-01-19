import { PiKeyReturnThin } from "react-icons/pi";
import { PiGiftThin } from "react-icons/pi";
import { PiShippingContainerLight } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { motion } from "motion/react"


const features = [
  {
    icon: PiKeyReturnThin,
    title: "Hassle-Free Returns",
    desc: "Not happy with your order? Return it right at your doorstep and receive a quick refund—simple, and hassle-free.",
  },
  {
    icon: PiShippingContainerLight,
    title: "Wide Product Range",
    desc: "Shop from a wide range of halal meats, fresh groceries, bakery items, and more—all in one place.",
  },
  {
    icon: PiGiftThin,
    title: "Best Value Deals",
    desc: "Enjoy better prices than local stores, along with exciting discounts and special offers on your everyday essentials.",
  },
  {
    icon: CiDeliveryTruck,
    title: "Fast Delivery",
    desc: "Get fresh halal meat and groceries delivered to your doorstep quickly from nearby trusted pickup stores.",
  },
];

const WhyChooseUs = () => {
  return (
    <section

      id="benefits" className="container mx-auto  w-full py-16 bg-white">
      <h2 className="text-3xl font-semibold px-4 text-rabbit mb-8">
        Why Choose Tehzeeb Halal Meat & Grocers?
      </h2>

      <div className="max-w-7xl mx-auto px-4">

        {/* Grid */}
        <motion.div
          initial={{ y: -30, opacity: 0 }} // start above
          whileInView={{ y: 0, opacity: 1 }} // move to position when visible
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4 
                  border border-gray-200
                  transition transform duration-800 
                  hover:-translate-y-2 hover:border-endeavour-300 "
            >
              <item.icon
                className="text-rabbit w-14 h-14 mb-4"

              />

              <h3 className="text-lg font-semibold text-rabbit mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 font-light text-sm mt-2">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
