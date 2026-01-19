const PrivacyPolicy = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-8">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-rabbit mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: 17-Jan-2026 <br />
            Effective Date: 17-Jan-2026
          </p>
        </div>

        {/* Intro */}
        <p className="text-gray-700 leading-relaxed">
          Tehzeeb Halal Meat & Grocers (“we”, “our”, “us”) respects your privacy
          and is committed to protecting your personal data. This Privacy Policy
          explains how we handle personal information when you visit our website.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Business Details: <br />
          <strong>Tehzeeb Halal Meat & Grocers</strong><br />
          62 The Broadway, West Ealing W13 0SU, London, United Kingdom<br />
          Email: <span className="font-medium">zeshanzee1993@gmail.com</span>
        </p>

        {/* Sections */}
        <ol className="space-y-10  list-inside">

          {/* 1. Scope */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Scope of This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This Privacy Policy applies to visitors of our website and explains
              how personal information is handled in compliance with:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
              <li>UK General Data Protection Regulation (UK GDPR)</li>
              <li>Data Protection Act 2018</li>
            </ul>
          </li>

          {/* 2. Information We Collect */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We only collect limited personal information when you voluntarily
              provide it, such as your name, email address, and message content,
              for example via contact forms or newsletter signups. We do not
              collect payment details or sensitive personal data.
            </p>
          </li>

          {/* 3. How We Use Information */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information is used strictly for the purpose it was provided,
              including responding to enquiries and sending requested updates.
              We do not use your data for advertising or sell it to third parties.
            </p>
          </li>

          {/* 4. Legal Basis */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Legal Basis for Processing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Under UK GDPR, we rely on your consent when you voluntarily submit
              information or our legitimate interest in responding to enquiries
              and providing customer support. You can withdraw consent at any time.
            </p>
          </li>

          {/* 5. Cookies & Tracking */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Cookies & Tracking
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This website does not use cookies for advertising, analytics, or
              tracking purposes. No tracking pixels or third-party behavioral
              tracking tools are used.
            </p>
          </li>

          {/* 6. Data Sharing */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Data Sharing & Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not share, sell, trade, or rent your personal information.
              Your data is only used internally to respond to enquiries and
              send requested updates.
            </p>
          </li>

          {/* 7. Data Retention */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Data Retention
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Personal information is retained only as long as necessary to
              respond to enquiries or fulfill requested communications, then
              securely deleted.
            </p>
          </li>

          {/* 8. Data Security */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We take reasonable measures to protect your data from unauthorized
              access or misuse. However, no method of transmission over the
              internet is 100% secure.
            </p>
          </li>

          {/* 9. Your Rights */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Your Rights Under UK GDPR
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, correct, or delete your personal data,
              withdraw consent, or lodge a complaint with the UK Information
              Commissioner's Office (ICO). To exercise your rights, contact us at:
            </p>
            <p className="text-gray-700 mt-2 font-medium">
              zeshanzee1993@gmail.com
            </p>
          </li>

          {/* 10. Children */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Children’s Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not intended for children under the age of 13 and we
              do not knowingly collect personal information from children.
            </p>
          </li>

          {/* 11. Changes */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect legal
              changes, website updates, or business practices. Updates will be
              posted on this page with a revised date.
            </p>
          </li>

          {/* 12. Contact */}
          <li>
            <h2 className="text-xl font-semibold text-rabbit mb-2">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions or concerns, please contact us:
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

export default PrivacyPolicy;
