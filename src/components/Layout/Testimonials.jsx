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
    title: "Best Halal Store in the Area",
    text: "Prices are fair and the meat quality is consistently excellent. This shop has earned my trust.",
    author: "Usman I.",
    bg: "bg-slate-300",
    textColor: "text-rabbit",
    span: "lg:col-span-2",
  },
 {
    title: "Highly Recommended",
    text: "Clean store, great variety, and trustworthy Halal products. Highly recommended.",
    author: "Muhammad A.",
    bg: "bg-white",
    textColor: "text-rabbit",
  },
   {
    title: "Fresh & Trusted Quality",
    text: "The quality of Halal meat here is outstanding. Always fresh, clean, and prepared with care. I wouldn’t shop anywhere else.",
    author: "Ahmed R.",
    bg: "bg-emerald-300",
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
            ⭐ 4.0 rating based on 25+ Google reviews
          </p>
        </div>

      </div>
    </section>
  )
}

export default Testimonials
