import { Link } from "react-router-dom";
import { categories } from "../../data/categories";





const CategoriesMegaMenu = () => {
    return (
        <div className="relative group">
            {/* MAIN LINK */}
            <Link
                to="/"
                className="px-2 text-xl text-rabbit font-medium hover:text-zinc-700"
            >
                Categories
            </Link>

            {/* MEGA MENU */}
            <div
                className="absolute left-1/2 -translate-x-1/2 top-full mt-2 pt-4
                   w-225 bg-white rounded-2xl shadow-black
                   opacity-0 invisible
                   group-hover:opacity-100 group-hover:visible
                   transition-all duration-200 z-50"
            >
                <div className="grid grid-cols-6 gap-6 p-6">
                    {categories.map((category, index) => (
                        <div key={index}>
                            <h3 className="mb-3 text-lg font-semibold text-rabbit">
                                {category.title}
                            </h3>

                            <ul className="space-y-2">
                                {category.items.map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            to={`/`}
                                            className="text-gray-600 hover:text-zinc-700"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default CategoriesMegaMenu;
