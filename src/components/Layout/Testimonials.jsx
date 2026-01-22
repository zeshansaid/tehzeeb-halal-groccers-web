const testimonials = [
  {
    title: "Fresh & Trusted Quality",
    text: "The quality of Halal meat here is outstanding. Always fresh, clean, and prepared with care. I wouldn’t shop anywhere else.",
    author: "Ahmed R.",
    bg: "bg-indigo-300",
    textColor: "text-rabbit",
    span: "lg:col-span-2",
  },
   {
    title: "Best Halal Store in the Area",
    text: "Prices are fair and the meat quality is consistently excellent. This shop has earned my trust.",
    author: "Usman I.",
    bg: "bg-purple-300",
    textColor: "text-rabbit",
    span: "lg:col-span-2",
  },
  {
    title: "Friendly & Reliable Service",
    text: "Very friendly staff and excellent service. They always help me choose the best cuts.",
    author: "Sarah K.",
    bg: "bg-cyan-300",
    textColor: "text-rabbit",
  },
  {
    title: "Highly Recommended",
    text: "Clean store, great variety, and trustworthy Halal products. Highly recommended.",
    author: "Muhammad A.",
    bg: "bg-white",
    textColor: "text-rabbit",
  },
  {
    title: "Quality, Variety & Clean Store",
    text: "The best place to shop for meat and I love the high quality meat and you can find the products what u looking for I recommend anyone to go to the store it very clean and tidy the staff have great manners and politeness.",
    author: "Bossman N.",
    bg: "bg-slate-300",
    textColor: "text-rabbit",
    span: "lg:col-span-2",
  },
 {
    title: "Chef-Approved Quality & Service",
    text: "As aa chef I was very impressed with the display and the customer service at meat land.",
    author: "Ahmed El.",
    bg: "bg-white",
    textColor: "text-rabbit",
  },
   {
    title: "Fresh Meat & Friendly Staff",
    text: "Friendly people then other places and clean and meat always fresh so well done......guys.",
    author: "Ray S.",
    bg: "bg-emerald-300",
    textColor: "text-rabbit",
    span: "lg:col-span-2",
  },
  {
    title: "Trusted for Over a Decade",
    text: "Great customer service and been buying my meat from here for over ten years clean and fresh meat.",
    author: "Solero D.",
    bg: "bg-cyan-300",
    textColor: "text-rabbit",
  },
  
]

const Testimonials = () => {
  return (
    <section  id="testimonials" className="container mx-auto  bg-indigo-50 py-16 rounded-lg mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className=" mb-12">
          <h2 className="text-3xl font-semibold   text-rabbit">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl  ">
            We are proud to serve fresh, 100% Halal meat and quality groceries.
            Here’s what our customers say about us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} ${item.textColor} ${
                item.span || ""
              } rounded-lg shadow-xl p-6`}
            >
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className={`${item.textColor === "text-white" ? "text-white/90" : "text-gray-600"}`}>
                “{item.text}”
              </p>

              <p className={`mt-4 font-medium ${item.textColor === "text-white" ? "text-white/70" : "text-gray-500"}`}>
                — {item.author}
              </p>
            </div>
          ))}
        </div>

        {/* Google Rating Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-700 font-medium">
            ⭐ 4.7 rating based on 150+ reviews
          </p>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
