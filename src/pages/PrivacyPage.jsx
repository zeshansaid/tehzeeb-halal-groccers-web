import PrivacyPolicy from '../components/common/PrivacyPolicy'
import Hero from '../components/Layout/Hero'
 
 
const PrivacyPage = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <Hero />

            {/* Overlapping Store Card */}
            <div className="relative -mt-48 mx-6 md:mx-20 bg-white  text-rabbit rounded-2xl shadow-lg z-10 p-8">
                <PrivacyPolicy/>
            </div>


        </div>
    )
}

export default PrivacyPage