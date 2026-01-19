
import { motion } from "motion/react"
import ProductItem from "../common/ProductItem";
import mtn_boneless from "../../assets/mtn_boneless.png";
import mtn_mince from "../../assets/mtn_mince.png";
import mtn_mix from "../../assets/mtn_mix.png";
import mtn_chops from "../../assets/mtn_chops.png";
import bef_bone from "../../assets/bef_bone.png";
import bef_boneles from "../../assets/bef_boneles.png";
import veel_minced from "../../assets/veel_minced.png";
import chicken_boneless from "../../assets/chicken_boneless.png";
import chicken_whole from "../../assets/chicken_whole.png";
import { useNavigate } from "react-router-dom";

const featuredMeatProducts = [
    {
        id: 1,
        image: mtn_boneless,
        name: "Mutton Boneless Boti ",
        price: "From £13.99",
        category: "Mutton",
        description: "Premium boneless mutton cut, carefully trimmed for rich curries, BBQ, and grilling dishes.",
    },
    {
        id: 2,
        image: mtn_mince,
        name: "Mutton Minced (Qeema)",
        price: "From £12.49",
        category: "Mutton",
        description: "Freshly ground mutton mince, prepared daily and ideal for kebabs, keema, stuffing recipes.",
    },
    {
        id: 4,
        image: mtn_mix,
        name: "Mutton Mix Boti",
        price: "From £13.49",
        category: "Mutton",
        description: "Flavorful mix of mutton shoulder and ribs, perfect for slow-cooked spicy curry dishes.",
    },
    {
        id: 6,
        image: mtn_chops,
        name: "Mutton Chops (Basic Cut)",
        price: "From £10.49",
        category: "Mutton",
        description: "Classic mutton chops suitable for frying, grilling, or traditional home-style curries.",
    },

    // Beef / Veal
    {
        id: 7,
        image: bef_bone,
        name: "Beef with Bone",
        price: "From £8.49",
        category: "Beef",
        description: "Affordable beef cut with bone, great for everyday cooking, broths, and hearty curries.",
    },
    {
        id: 8,
        image: bef_boneles,
        name: "Beef Boneless",
        price: "From £9.49",
        category: "Beef",
        description: "Clean boneless beef pieces ideal for quick cooking, stir-fry meals, and curry dishes.",
    },
    {
        id: 9,
        image: veel_minced,
        name: "Veal Minced (Qeema - Lean)",
        price: "From £9.99",
        category: "Veal",
        description: "Lean veal mince finely ground for keema, burgers, kebabs, and everyday cooking needs.",
    },
    {
        id: 10,
        image: mtn_boneless,
        name: "Veal Boneless Boti (BBQ)",
        price: "From £10.99",
        category: "Veal",
        description: "Tender veal boti cut, ideal for BBQ grilling, pan frying, or rich curry preparations.",
    },

    // Chicken
    {
        id: 13,
        image: chicken_boneless,
        name: "Chicken Boneless Breast",
        price: "From £6.49",
        category: "Chicken",
        description: "Lean boneless chicken breast, perfect for healthy meals, grilling, salads, and wraps.",
    },
    {
        id: 14,
        image: chicken_whole,
        name: "Chicken Whole / Cut Pieces",
        price: "From £4.99",
        category: "Chicken",
        description: "Fresh whole chicken or cut pieces prepared daily for versatile home cooking recipes.",
    },
];





const TopProducts = () => {
    const navigate = useNavigate();
    return (
        <section id="shop" className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-semibold  text-rabbit ">
                Featured Meat Products
            </h2>
            <p className="mt-2 text-gray-600 mb-12">
                Hot-selling premium cuts, fresh from our butchery
            </p>



            <motion.div
                initial={{ y: -30, opacity: 0 }} // start above
                whileInView={{ y: 0, opacity: 1 }} // move to position when visible
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2">

                {featuredMeatProducts.map((item) => (
                    < ProductItem
                        image={item.image}
                        title={item.name}
                        description={item.description}
                        price="1340"
                        unit="kg"
                        onAddToCart={() => {
                            navigate("/contact");
                            window.scrollTo(0, 0);
                        }}
                    />
                ))}


            </motion.div>
        </section>
    );
};



export default TopProducts



