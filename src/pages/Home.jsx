 

import Hero from "../components/Layout/Hero"
import AddressCards from "../components/common/AddressCards"
import ContactSection from "../components/common/ContactSection"  
import StoreMap from "../components/common/StoreMap"
import AllCategories from "../components/Layout/AllCategories"
import ExploreCategories2 from "../components/Layout/ExploreCategories2"
import FAQs from "../components/Layout/FAQs"
import FeaturedCollection from "../components/Layout/FeaturedCollection"
import Savings from "../components/Layout/Savings"
import ShopBrand from "../components/Layout/ShopBrand"
import Testimonials from "../components/Layout/Testimonials"
import TopProducts from "../components/Layout/TopProducts"
import { Welcome } from "../components/Layout/Welcome"
import WhyChooseUs from "../components/Layout/WhyChooseUs"



const Home = () => {
  return (
    <div className="mx-2 md:mx-10 ">

      <Hero />
      <Welcome />
      <ExploreCategories2 />
      <FeaturedCollection />
      <TopProducts />
      <Savings />
      <AllCategories />
      <WhyChooseUs />
      <ShopBrand />
      <Testimonials />
      <FAQs />
      <div className="bg-gray-50 rounded-lg px-2 md:px-10 container mx-auto ">
        <ContactSection />
      </div>
      <div className="px-2 md:px-10 container mx-auto ">
        <AddressCards />
        <h2 className="text-2xl md:text-4xl text-rabbit  font-bold mt-8 mb-8">
          our location
        </h2>
        <StoreMap />
      </div>

    </div>
  )
}

export default Home