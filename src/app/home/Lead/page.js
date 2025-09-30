import React from "react";
import Image from "next/image";
import Link from 'next/link'

export default function VolunteersPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-2 sm:px-6">
      <div className="rounded-2xl p-2 sm:p-6 md:p-10 max-w-6xl w-full">
        <Image
          src="/Call-for-Contributor-Day-Team-Lead.png"
          alt="Call for Volunteers"
          width={1200}
          height={942}
          className="rounded-3xl mt-[50px] w-full h-auto"
          priority
        />
        <section className="text-white py-16 px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-8">
              Call for Contributor Day Table Lead
            </h2>
            <p className="text-lg mb-6 leading-relaxed">
              Contributor Day stands as a key community-driven highlight of WordCamp Bangkok 2025, showcasing the power of our community working together. Taking place on December 13th, we’re now seeking dedicated WordPress enthusiasts to step up as Table Leads for this meaningful day of giving back, working together, and community building.
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              We’re looking for experienced contributors to lead our teams and guide participants through their contribution journey. If you have previous WordPress contribution experience in any area and are passionate about mentoring others, we invite you to become a Table Lead for Contributor Day in WordCamp Bangkok 2025.
            </p>
            <h3 className="text-4xl font-extrabold mb-4">
              When & Where?
            </h3>
            <p className="text-lg mb-8 leading-relaxed">
              Date: Saturday, December 13th, 2025
            </p>
            <p className="text-lg mb-8 leading-relaxed">
              Location: Chulalongkorn University Alumni Association
            </p>
            <h3 className="text-4xl font-extrabold mb-4">
              What does a Table Lead do?
            </h3>
            <p className="text-lg mb-6 leading-relaxed">
              As a Table Lead, you’ll help and guide a group of contributors by:
            </p>
          </div>
          <ul className="text-lg list-disc list-inside space-y-2">
            <li>Showing them what your contribution area is about</li>
            <li>Helping them create accounts (WordPress.org, GitHub, and other sites)</li>
            <li>Giving tasks that work for both new people and experienced ones</li>
            <li>Answering questions and helping everyone work together</li>
            <li>Keeping simple notes about what your team did</li>
          </ul>
          <p className="mt-6 mb-6">
            There are some of the example teams:
          </p>
          <div>
            <h2 className="font-bold text-lg mb-1">Core</h2>
            <p className="text-lg mb-6">
              There are generally two different groups on a contributor day: those who have
              contributed to core before and those who have not. For new contributors, you will learn
              how to get involved with the WordPress core development community and start contributing
              to WordPress core.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Theme</h2>
            <p className="text-lg mb-6">
              Are you interested in seeing how you can run a contribution session for theme reviews?
              Great, you’ve come to the right place!
            </p>
          </div>

          <div>
            <h2 className="font-bold text-lg">Polyglots</h2>
            <p className="text-lg mb-6">
              Make WordPress available in all the languages by translating WordPress to your native
              language. The table lead(s) must be GTE, if possible.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Community</h2>
            <p className="text-lg mb-6">
              Do you want to have WordPress meetup or WordCamp in your hometown? These might be a good
              place to learn how to start.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-lg">Documentation</h2>
            <p className="text-lg mb-6">
              This team usually helps in improving the quality of current WordPress docs, including
              Theme & Plugin documentation.
            </p>
          </div>
          <div>
            <p className="text-lg mb-6">
              Ready to take the lead? We’re seeking experienced contributors to guide our teams throughout Contributor Day. If you’ve contributed to WordPress in any area and are interested in mentoring others while leading a team, we invite you to step forward. Help facilitate a productive day of collaboration by filling out the form below:
            </p>
          </div>
          {/* Section: Note */}
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-lg italic text-gray-700">
              Note: The deadline for submission of table lead is{" "}
              <span className="text-black font-semibold">Saturday, 8 November 2025.</span>
            </p>
          </div>
          <form className="max-w-4xl mx-auto mt-12">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold mb-1">
                Contact Name <span className="text-sm text-gray-500">(required)</span>
              </label>
              <input
                type="text"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-lg font-semibold mb-1">
                Email Address <span className="text-sm text-gray-500">(required)</span>
              </label>
              <input
                type="email"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* WordPress.org Username */}
            <div>
              <label className="text-lg block font-semibold mb-1">WordPress.org Username</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
            <div>
              <label className="text-lg block font-semibold mb-1">
                Slack display name on WordPress.slack.com{" "}
                <span className="text-sm text-gray-500">(required)</span>
              </label>
              <textarea
                required
                rows="1"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              ></textarea>
            </div>
            <div>
              <label className="text-lg block font-semibold mb-1">
                Choose the team you want to lead{" "}
                <span className="text-sm text-gray-500">(required)</span>
              </label>
              <textarea
                required
                rows="1"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              ></textarea>
            </div>
            <div>
              <label className="text-lg block font-semibold mb-1">
                Please share your experiences contributing to the WordPress.org Community and why you want to lead{" "}
                <span className="text-sm text-gray-500">(required)</span>
              </label>
              <textarea
                required
                rows="8"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none mb-10"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt- text-lg">
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-black transition mb-5"
              >
                Submit
              </button>
            </div>
          </form>
          <p className="text-lg md:text-xl leading-relaxed">
            Let’s build WordPress community together! Whether you’re a developer, designer,
            translator,<p /> writer, or simply a WordPress enthusiast – Contributor Day is your chance to give back,
            make new friends, and discover something exciting along the way!
          </p>
          {/* Divider line */}
          <div className="flex justify-center mt-14">
            <hr className="border-t border-gray-400 w-full max-w-212" />
          </div>
          {/* Discover More Section */}
          <div className="text-lg text-white text-center my-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Discover more from WordCamp Bangkok 2025
            </h2>
            <p className="text-white mt-2">
              Subscribe to get the latest posts sent to your email.
            </p>

            {/* Subscribe Form */}
            <div className="mt-6 flex justify-center space-x-2 mb-25">
              <input
                type="email"
                placeholder="your@email.com"
                className="px-4 py-2 border bg-gray-800 text-white border-sky-500 w-72 focus:outline-none focus:ring-2 focus:ring-black "
              />
              <button className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="text-center mb-18">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">Gold</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
              <Link href="/sponsor/Automattic" className="block">
                <Image
                  src="/logo-automattic.png"
                  alt="Automattic"
                  width={150}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="/sponsor/Bluehost" className="block">
                <Image
                  src="/logo-bluehost.png"
                  alt="Bluehost"
                  width={150}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <Link href="/sponsor/Data_Rockie" className="block">
                <Image
                  src="/logo-datarockie.png"
                  alt="Datarockie"
                  width={150}
                  height={48}
                  className="h-25 w-auto"
                />
              </Link>
              <Link href="/sponsor/hostingcom" className="block">
                <Image
                  src="/logo-hosting_com.png"
                  alt="Hosting com"
                  width={150}
                  height={48}
                  className="h-25 w-auto"
                />
              </Link>
              <Link href="/sponsor/Kinsta" className="block">
                <Image
                  src="/logo-kinsta.png"
                  alt="Kinsta"
                  width={150}
                  height={48}
                  className="h-22 w-auto"
                />
              </Link>
              <Link href="/sponsor/Ruk_com_Cloud" className="block">
                <Image
                  src="/logo-rukcom.png"
                  alt="Rukcom"
                  width={150}
                  height={48}
                  className="h-22 w-auto"
                />
              </Link>
              <Link href="/sponsor/Woo" className="block">
                <Image
                  src="/logo-commerce.png"
                  alt="WooCommerce"
                  width={150}
                  height={48}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>

          <div className="text-center  mb-18">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">Silver</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
              <Link href="/sponsor/Odds" className="block">
                <Image
                  src="/logo-ood.png"
                  alt="Automattic"
                  width={150}
                  height={48}
                  className="h-25 w-auto"
                />
              </Link>
              <Link href="/sponsor/Pronto_Marketing" className="block">
                <Image
                  src="/logo-pronto.png"
                  alt="pronto"
                  width={150}
                  height={48}
                  className="h-25 w-auto"
                />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6">Bronze</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
              <Link href="/sponsor/Elementor" className="block">
                <Image
                  src="/logo-elemento.png"
                  alt="elemento"
                  width={150}
                  height={48}
                  className="h-25 w-auto"
                />
              </Link>
              <Link href="/sponsor/Seedwebs" className="block">
                <Image
                  src="/logo-seedwebs.png"
                  alt="seedwebs"
                  width={150}
                  height={48}
                  className="h-25 w-auto"
                />
              </Link>
              <Link href="/sponsor/Thnic" className="block">
                <Image
                  src="/logo-thnic.png"
                  alt="thnic"
                  width={150}
                  height={48}
                  className="h-25 w-auto"
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
