const TermsAndConditions = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="max-w-5xl mx-auto px-4 space-y-8">

                {/* Title */}
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-rabbit mb-2">
                        Terms & Conditions
                    </h1>
                    <p className="text-sm text-gray-500">
                        Last Updated: 17-Jan-2026
                    </p>
                </div>

                {/* Intro */}
                <p className="text-gray-700 leading-relaxed">
                    Welcome to the website of <strong>Tehzeeb Halal Meat & Grocers</strong> (“we”, “our”, “us”). By using our website (http://www.meatgroccer.com) or any services offered via the website, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree with these Terms, please do not use the website.
                </p>

                {/* Sections */}
                <ol className="space-y-10  list-inside">

                    {/* 1. Website Use */}
                    <li>
                        <h2 className="text-xl font-semibold text-rabbit mb-2">
                            Website Use
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            You may use this website for lawful purposes only. You agree not to:
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                            <li>Violate any applicable laws or regulations.</li>
                            <li>Interfere with or disrupt the website or servers.</li>
                            <li>Attempt to gain unauthorized access to our systems or networks.</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-2">
                            All content on this website, including text, images, graphics, logos, and videos, is the property of Tehzeeb Halal Meat & Grocers unless otherwise stated. You may view and download content for personal use only.
                        </p>
                    </li>

                    {/* 2. Products and Orders */}
                    <li>
                        <h2 className="text-xl font-semibold text-rabbit mb-2">
                            Products and Orders
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            All products listed on this website are for information purposes. Availability, pricing, and descriptions may change without notice.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                            By submitting an order via any contact form or ordering method on the website, you are making a request to purchase products. Orders are subject to confirmation by us. We reserve the right to cancel or refuse orders at our discretion.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                            All prices are displayed in GBP (or as indicated) and include applicable taxes unless stated otherwise.
                        </p>
                    </li>

                    {/* 3. Delivery */}
                    <li>
                        <h2 className="text-xl font-semibold text-rabbit mb-2">
                            Delivery
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Delivery timelines are estimates only. We aim to deliver products as described, but delays may occur. Risk of loss or damage passes to the buyer upon delivery. For any delivery-related issues, please contact us directly at <span className="font-medium">zeshanzee1993@gmail.com</span>.
                        </p>
                    </li>

                    {/* 4. Contact Forms and Newsletter */}
                    <li>
                        <h2 className="text-xl font-semibold text-rabbit mb-2">
                            Contact Forms and Newsletter Signups
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            By submitting any contact form or newsletter signup, you consent to us using your name, email address, and message solely to respond to your enquiry or send requested updates. We do not sell, share, or disclose your information to third parties.
                        </p>
                    </li>

                    {/* 5. Intellectual Property */}
                    <li>
                        <h2 className="text-xl font-semibold text-rabbit mb-2">
                            Intellectual Property
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            All original content on this website, including text, images, and the website design itself, belongs to Tehzeeb Halal Meat & Grocers.
                            Any trademarks, logos, or images of third-party products displayed on the website remain the property of their respective owners.
                            You may not use, reproduce, modify, or distribute any content for commercial purposes without explicit permission from the respective owner.
                        </p>
                    </li>

                    {/* 6. Limitation of Liability */}
                    <li>
                        <h2 className="text-xl font-semibold text-rabbit mb-2">
                            Limitation of Liability
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            To the fullest extent permitted by law, Tehzeeb Halal Meat & Grocers will not be liable for any direct, indirect, incidental, or consequential losses arising from use of the website, errors in product descriptions, pricing, or any technical issues.
                        </p>
                    </li>

                    {/* 7. Governing Law */}
                    <li>
                        <h2 className="text-xl font-semibold text-rabbit mb-2">
                            Governing Law
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            These Terms & Conditions are governed by the laws of England and Wales. Any disputes arising out of these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                        </p>
                    </li>

                    {/* 8. Changes to Terms */}
                    <li>
                        <h2 className="text-xl font-semibold text-rabbit mb-2">
                            Changes to Terms
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update these Terms & Conditions from time to time. Updated Terms will be posted on this page with a revised “Last Updated” date. Continued use of the website after changes constitutes acceptance of the revised Terms.
                        </p>
                    </li>

                    {/* 9. Contact Information */}
                    <li>
                        <h2 className="text-xl font-semibold text-rabbit mb-2">
                            Contact Information
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            If you have questions about these Terms & Conditions, please contact us:
                        </p>
                        <p className="text-gray-700 mt-2">
                            <strong>Tehzeeb Halal Meat & Grocers</strong><br />
                            62 The Broadway, West Ealing W13 0SU, London, United Kingdom<br />
                            Email: <span className="font-medium">zeshanzee1993@gmail.com</span>
                        </p>
                    </li>

                </ol>
            </div>
        </section>
    );
};

export default TermsAndConditions;
