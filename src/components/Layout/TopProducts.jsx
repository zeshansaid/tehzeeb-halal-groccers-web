import ProductItem from "../common/ProductItem";
import { useNavigate } from "react-router-dom";

  
 const featuredMeatProducts = [
  {
    id: 1,
    image: "/images/mtn_boneless.webp",
    name: "Mutton Boneless Boti ",
    price: "From £13.99",
    category: "Mutton",
    description: "Carefully prepared boneless mutton boti, ideal for rich curries, BBQ dishes, and traditional home cooking.",
  },
  {
    id: 2,
    image: "/images/mtn_mince.webp",
    name: "Mutton Minced (Qeema)",
    price: "From £12.49",
    category: "Mutton",
    description: "Freshly minced mutton prepared daily, perfect for keema, kebabs, stuffing, and classic curry recipes.",
  },
  {
    id: 4,
    image: "/images/mtn_mix.webp",
    name: "Mutton Mix Boti",
    price: "From £13.49",
    category: "Mutton",
    description: "Selected mix of mutton cuts suitable for slow-cooked curries, traditional dishes, and flavorful gravies.",
  },
  {
    id: 6,
    image: "/images/mtn_chops.webp",
    name: "MUTTON BACK CHOPS",
    price: "From £10.49",
    category: "Mutton",
    description: "Quality mutton back chops ideal for frying, grilling, and preparing authentic home-style meals.",
  },
  {
    id: 32,
    image: "/images/mtn_front_chops.webp",
    name: "MUTTON FRONT CHOPS",
    price: "From £10.49",
    category: "Mutton",
    description: "Tender front mutton chops suitable for slow cooking, curries, and traditional family recipes.",
  },
  {
    id: 33,
    image: "/images/mtn_legs.webp",
    name: "MUTTON LEG",
    price: "From £10.49",
    category: "Mutton",
    description: "Fresh mutton leg cut, ideal for roasting, slow cooking, and special occasion dishes.",
  },
  {
    id: 34,
    image: "/images/mtn_sholder.webp",
    name: "MUTTON SHOULDER",
    price: "From £10.49",
    category: "Mutton",
    description: "Well-trimmed mutton shoulder, perfect for slow-cooked curries, stews, and traditional recipes.",
  },

  // Chicken
  {
    id: 35,
    image: "/images/chicken_wing.webp",
    name: "WINGS WITH SKIN",
    price: "From £6.49",
    category: "Chicken",
    description: "Fresh chicken wings with skin, ideal for frying, baking, BBQ, and flavorful snack dishes.",
  },
  {
    id: 36,
    image: "/images/chicken_drum_stick.webp",
    name: "CHICKEN DRUM STICKS",
    price: "From £6.49",
    category: "Chicken",
    description: "Juicy chicken drumsticks prepared fresh, perfect for grilling, baking, and everyday meals.",
  },
  {
    id: 37,
    image: "/images/chicken_nibbletes.webp",
    name: "CHICKEN NIBBLETS",
    price: "From £6.49",
    category: "Chicken",
    description: "Fresh chicken nibblets ideal for frying, starters, party platters, and quick home cooking.",
  },
  {
    id: 38,
    image: "/images/chicken_roaster.webp",
    name: "ROASTER CHICKEN",
    price: "From £6.49",
    category: "Chicken",
    description: "Whole roaster chicken, carefully prepared for roasting, grilling, and family meals.",
  },
  {
    id: 39,
    image: "/images/chicken_legs.webp",
    name: "CHICKEN LEGS",
    price: "From £6.49",
    category: "Chicken",
    description: "Fresh chicken legs suitable for curries, grilling, roasting, and everyday cooking.",
  },
  {
    id: 13,
    image: "/images/chicken_boneless_thigh.webp",
    name: "chicken BONELESS THIGH",
    price: "From £6.49",
    category: "Chicken",
    description: "Boneless chicken thigh pieces, ideal for stir-fry, curries, grilling, and quick meals.",
  },
  {
    id: 40,
    image: "/images/chicken_whole.webp",
    name: "Chicken Whole / Cut Pieces",
    price: "From £4.99",
    category: "Chicken",
    description: "Fresh whole chicken or cut pieces prepared daily for versatile home cooking needs.",
  },

  // Beef / Veal
  {
    id: 7,
    image: "/images/bef_bone.webp",
    name: "Beef with Bone",
    price: "From £8.49",
    category: "Beef",
    description: "Quality beef with bone, ideal for slow cooking, curries, soups, and traditional dishes.",
  },
  {
    id: 8,
    image: "/images/bef_boneles.webp",
    name: "Beef Boneless",
    price: "From £9.49",
    category: "Beef",
    description: "Clean boneless beef cuts suitable for stir-fry, curries, and everyday cooking.",
  },
  {
    id: 46,
    image: "/images/beef_steak.png",
    name: "Beef Steak Piece",
    price: "From £9.49",
    category: "Beef",
    description: "Fresh beef steak pieces ideal for pan frying, grilling, and premium home meals.",
  },
  {
    id: 9,
    image: "/images/veel_minced.webp",
    name: "Veal Minced (Qeema - Lean)",
    price: "From £9.99",
    category: "Veal",
    description: "Lean veal mince freshly prepared for keema, burgers, kebabs, and light meals.",
  },
  {
    id: 10,
    image: "/images/mtn_boneless.webp",
    name: "Veal Boneless Boti (BBQ)",
    price: "From £10.99",
    category: "Veal",
    description: "Tender boneless veal boti, perfect for BBQ, grilling, and rich curry dishes.",
  },

  // Lamb
  {
    id: 41,
    image: "/images/lam_front_chop.webp",
    name: "LAMB FRONT CHOPS",
    price: "From £4.99",
    category: "Lamb",
    description: "Fresh lamb front chops ideal for curries, slow cooking, and traditional recipes.",
  },
  {
    id: 42,
    image: "/images/lam_back_chop.webp",
    name: "LAMB BACK CHOPS",
    price: "From £4.99",
    category: "Lamb",
    description: "Tender lamb back chops suitable for frying, grilling, and everyday meals.",
  },
  {
    id: 43,
    image: "/images/lam_sholuder.webp",
    name: "LAMB SHOULDER",
    price: "From £4.99",
    category: "Lamb",
    description: "Well-trimmed lamb shoulder ideal for slow-cooked curries and special dishes.",
  },
  {
    id: 44,
    image: "/images/lam_leg.webp",
    name: "LAMB LEG",
    price: "From £4.99",
    category: "Lamb",
    description: "Fresh lamb leg cut suitable for roasting, slow cooking, and festive meals.",
  },
  {
    id: 45,
    image: "/images/lam_ribs.webp",
    name: "LAMB RIBS",
    price: "From £4.99",
    category: "Lamb",
    description: "Fresh lamb ribs ideal for BBQ, slow cooking, and flavorful curry dishes.",
  },
  {
    id: 46,
    image: "/images/lam_liver.webp",
    name: "LAMB LIVER",
    price: "From £4.99",
    category: "Lamb",
    description: "Fresh lamb liver prepared daily, perfect for frying and traditional meals.",
  },
  {
    id: 47,
    image: "/images/lam_mix.webp",
    name: "MIXED LAMB",
    price: "From £4.99",
    category: "Lamb",
    description: "Carefully selected mixed lamb cuts suitable for curries and home cooking.",
  },
  {
    id: 48,
    image: "/images/turkey_fresh.webp",
    name: "FRESH FARM  TURKEY",
    price: "From £4.99",
    category: "tURKEY",
    description: "Fresh farm turkey prepared for roasting, special occasions, and family meals.",
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



            <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-10">

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


            </div>
        </section>
    );
};



export default TopProducts



