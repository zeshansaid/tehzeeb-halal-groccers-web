const ProductItem = ({
    image,
    title,
    description,
    unit = "per kg",
    onAddToCart,
}) => {
    return (
        <div className="group bg-white hover:shadow-lg transition border border-endeavour-200 relative">

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-rabbit text-white">
                    Premium
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-600 text-white">
                    Fresh Cut
                </span>
               
            </div>

            {/* Halal Badge */}
            <div className="absolute top-3 right-3 z-10">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D33737] text-white">
                    100% Halal
                </span>
            </div>

            {/* Product Image */}
            <div className="w-full flex justify-center mt-10">
                <img
                    src={image}
                    alt={title}
                    className="w-72 object-cover group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Product Content */}
            <div className="p-4 space-y-2">

                {/* Title */}
                <h3 className="text-sm font-semibold text-rabbit line-clamp-2 mt-8">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-500 line-clamp-2">
                    {description}
                </p>

                {/* Extra Info */}
                <div className="flex flex-wrap gap-2 pt-2 text-[10px] text-gray-600 mt-10">
                    <span className="px-2 py-0.5 bg-gray-100 rounded-full">
                        🕒 Cut Fresh Daily
                    </span>
                    <span className="px-2 py-0.5 bg-gray-100 rounded-full">
                        📍 West Ealing W13
                    </span>
                </div>

                {/* Button */}
                <div className="pt-3">
                    <button
                        onClick={onAddToCart}
                        className="text-xs px-4 py-1.5 rounded-full cursor-pointer bg-rabbit text-white hover:bg-rabbit/90 transition"
                    >
                        Enquire Now
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ProductItem;
