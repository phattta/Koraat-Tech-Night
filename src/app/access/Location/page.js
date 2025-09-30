import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../../footer/page'

export default function page() {
    return (
        <div>
            <div className="max-w-4xl mx-auto py-12 px-4">
                {/* Heading */}
                <h2 className="text-3xl text-center md:text-5xl font-extrabold text-white mb-12">
                    Location
                </h2>

                {/* Venue Name */}
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4">
                    สมาคมนิสิตเก่าอุลามกรณ์มหาวิทยาลัย / Chulalongkorn University Alumni Association
                </h3>

                {/* Address */}
                <p className="text-lg text-white">
                    ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน กรุงเทพมหานคร 10330
                </p>
                <p className="text-lg text-white mb-6">
                    Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330
                </p>

                {/* Google Maps Link */}
                <p className='text-white'>
                    View on Google Maps{" "}
                    <a
                        href="https://maps.app.goo.gl/S1sq2TaeLRfmqpm49"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-blue-500 hover:text-blue-600 underline text-lg"
                    >
                        https://maps.app.goo.gl/S1sq2TaeLRfmqpm49
                    </a>
                </p>
                {/* Embedded Google Map */}
                <div className="mt-6">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6098554360087!2d100.5299014!3d13.742054600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed34bd154a7%3A0x4cc0ebbd3eb7062!2sChulalongkorn%20University%20Alumni%20Association%20under%20the%20King&#39;s%20Patronage!5e0!3m2!1sen!2sth!4v1758600809239!5m2!1sen!2sth"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
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
            </div>
            <Footer />
        </div>
    )
}
