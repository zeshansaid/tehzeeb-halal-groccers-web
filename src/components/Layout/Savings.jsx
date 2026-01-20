import { savingsImages } from "../../assets/savingsImages";

 


 

const Savings = () => {
    return (
        <section className="container mx-auto py-8">
            {/* Section heading */}
            <h2 className="text-3xl font-semibold px-4 text-rabbit mb-8">
                Top Savings on Groceries
            </h2>

            {/* Image cards grid */}
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                    {savingsImages.map((item, index) => (
                        <div
                            key={item.id}
                            className="overflow-hidden  border border-gray-200 bg-white hover:shadow-lg transition duration-300"
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Savings;
