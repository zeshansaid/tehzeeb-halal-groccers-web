import ContactForm from "./ContactForm";
 
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
          <div className="text-center text-rabbit px-6">
            <p className="text-lg mb-2">Call us anytime</p>
            <h4 className="text-3xl md:text-4xl font-bold">
              +44-7815-966395
            </h4>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContactSection;
