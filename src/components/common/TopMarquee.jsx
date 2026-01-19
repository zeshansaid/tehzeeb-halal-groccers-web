import Marquee from "react-fast-marquee";

const categories = [
    "Fresh Halal Meat Delivered Daily",
    "Premium Halal Quality Guaranteed",
    "Chicken, Beef & Mutton Available",
    "Bakery, Dairy & Grocery Essentials",
];

const TopMarquee = () => {
    return (
        <div className="w-full bg-rabbit">
            <Marquee
                speed={50}
                pauseOnHover
                gradient
                gradientColor={[34, 197, 94]}
                gradientWidth={40}
            >
                {categories.map((item, index) => (
                    <span
                        key={index}
                        className="inline-flex items-center mx-10 py-2 text-white text-xs font-medium whitespace-nowrap"
                    >
                        {item}
                        <span className="ml-10 text-white/60">•</span>
                    </span>
                ))}
            </Marquee>
        </div>
    );
};

export default TopMarquee;
