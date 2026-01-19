 
import TermsAndConditions from '../components/common/TermsAndConditions'
import Hero from '../components/Layout/Hero'
 
 
const TermsPage = () => {
    return (
        <div className="relative">
            {/* Hero Section */}
            <Hero />

            {/* Overlapping Store Card */}
            <div className="relative -mt-48 mx-6 md:mx-20 bg-white  text-rabbit rounded-2xl shadow-lg z-10 p-8">
                <TermsAndConditions/>
            </div>


        </div>
    )
}

export default TermsPage