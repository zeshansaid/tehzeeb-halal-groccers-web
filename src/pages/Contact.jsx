 
import Hero from '../components/Layout/Hero'
import StoreMap from '../components/common/StoreMap'
import ContactSection from '../components/common/ContactSection'
 
const Contact = () => {
    return (
        <div className="relative ">
            {/* Hero Section */}
            <Hero />

            {/* Overlapping Store Card */}
            <div className="relative -mt-48 mx-3 sm:mx-6 md:mx-20 bg-white  text-rabbit 
            rounded-2xl shadow-lg z-10 p-4 sm:p-8">
                {/* Header */}
                <h2 className="text-3xl md:text-5xl  font-bold mt-8 mb-4">
                    contact us
                </h2>

                <p className="text-gray-700 text-lg  mb-8">
                    We'd love to hear from you! Visit Tehzeeb Halal Meat & Grocers to experience
                    fresh, high-quality halal meats and daily grocery essentials.
                </p>

               <ContactSection />

                <StoreMap />
            </div>


        </div>
    )
}

export default Contact