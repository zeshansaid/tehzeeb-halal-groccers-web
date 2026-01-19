import React from "react";

const ContactForm = () => {
    return (
        <div className="w-full max-w-3xl text-rabbit">
            {/* Title */}
            <h3 className="text-2xl md:text-4xl font-bold mb-6">
               send message
            </h3>

            {/* Form */}
            <form className="space-y-6">
                {/* Name */}
                <div>
                    <label className="block text-lg font-medium mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full px-5 py-2 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rabbit"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-lg font-medium mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-5 py-2 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rabbit"
                    />
                </div>

                {/* Message */}
                <div>
                    <label className="block text-lg font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        rows="5"
                        placeholder="Write your message here..."
                        className="w-full px-5 py-2 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rabbit resize-none"
                    ></textarea>
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="w-full md:w-auto px-10 py-4 text-lg font-semibold text-white bg-rabbit rounded-xl hover:bg-zinc-700 transition"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
