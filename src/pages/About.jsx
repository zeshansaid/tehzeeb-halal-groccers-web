
import CompanyImage1 from "../assets/meat-feature.png"
import CompanyImage2 from "../assets/meat-feature.png"
import AddressCards from "../components/common/AddressCards"
import Hero from "../components/Layout/Hero"

const About = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* Main Content Section */}
      <div className="relative -mt-48 mx-3 md:mx-20 bg-white text-gray-900 rounded-2xl shadow-lg z-10 p-4 sm:p-8 space-y-16">
        
        {/* Company Story */}
        <section className="flex flex-col md:flex-row items-center gap-8 mt-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Our Story</h2>
            <p className="text-gray-700  mb-4 text-sm md:text-lg">
              Founded with the mission to provide fresh, high-quality groceries to our community, 
              our company has grown from a small local store to a trusted brand known for excellence. 
              We pride ourselves on sourcing responsibly and ensuring every product meets our strict 
              quality standards.
            </p>
            <p className="text-gray-700 text-sm md:text-lg">
              At the heart of our operations is a commitment to customer satisfaction, sustainability, 
              and creating a shopping experience that feels personal and welcoming.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={CompanyImage1} 
              alt="Our Company" 
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 text-sm md:text-lg">
              To provide fresh, healthy, and high-quality<br /> products to 
                every customer while supporting 
              local farmers and suppliers.
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700 text-sm md:text-lg">
              To become a leading grocery brand recognized<br /> for quality, sustainability, and community-focused initiatives.
            </p>
          </div>
        </section>

        

        {/* Company Culture / Values */}
        <section className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 order-2 md:order-1">
            <img 
              src={CompanyImage2} 
              alt="Team at Work" 
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm md:text-lg space-y-2">
              <li>Integrity in every business decision</li>
              <li>Freshness and quality as our top priority</li>
              <li>Supporting local communities and suppliers</li>
              <li>Innovation to enhance the customer experience</li>
              <li>Environmental responsibility and sustainability</li>
            </ul>
          </div>
        </section>

        {/* CTA / Visit Us Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Visit Our Store</h2>
          <p className="text-gray-700 text-sm md:text-lg mb-8">
            Come experience our fresh products and friendly service in person.
          </p>
          <AddressCards/>
        </section>

      </div>
    </div>
  )
}

export default About
