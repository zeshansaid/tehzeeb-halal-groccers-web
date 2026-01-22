import ContactForm from "./ContactForm";
import { IoLogoWhatsapp } from "react-icons/io5";

const ContactSection = () => {
  return (
    <div className=" py-8 grid grid-cols-1 md:grid-cols-2 gap-8 my-12 items-stretch">
      {/* LEFT: Contact Form (natural height) */}
      <div>
        <ContactForm />
      </div>

      {/* RIGHT: Image matches FORM height */}
      <div className="relative rounded-2xl max-h-140 overflow-hidden shadow-lg">
        <img
          src="/images/contact_card.jpg"
          alt="Store"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-rabbit px-2 sm:px-6">
             <p className="text-sm md:text-lg mb-3 "> Fresh meat and groceries<br /> for  daily needs and <br />special occasions</p>

            <a
              href="https://wa.me/447815966395"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600
               text-white px-2 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-sm lg:text-lg rounded-full  font-semibold transition"
            >
              <IoLogoWhatsapp className="h-4 w-4 md:h-6 md:w-6" />
              Order on WhatsApp
            </a>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
