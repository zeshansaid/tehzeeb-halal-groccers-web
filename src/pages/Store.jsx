import AddressCards from "../components/common/AddressCards"
import StoreMap from "../components/common/StoreMap"
import Hero from "../components/Layout/Hero"



const Store = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <Hero />

            {/* Overlapping Store Card */}
            <div className="relative -mt-48 mx-6 md:mx-20 bg-white text-rabbit rounded-2xl shadow-lg z-10 p-8">
                {/* Header */}
                <h2 className="text-3xl md:text-5xl   font-bold mt-8 mb-4">
                    our store
                </h2>

                <p className="text-gray-700 text-lg   mb-8">
                    Visit our stores to explore fresh groceries and high-quality products.
                </p>
                <AddressCards />
                <h2 className="text-3xl md:text-5xl text-rabbit  font-bold mt-8 mb-8">
                    our location
                </h2>
                <StoreMap />
            </div>


        </div>
    )
}

export default Store
