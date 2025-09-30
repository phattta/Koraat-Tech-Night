import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from "../../footer/page";

export default function page() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-6">
                {/* ชื่อ Sponsor */}
                <h2 className="font-extrabold mb-25 text-white mt-[50px] -ml-[500px]" style={{ fontSize: "60px", lineHeight: "1.1" }}>
                    Kinsta
                </h2>

                {/* โลโก้ Sponsor */}
                <div className="flex justify-center mb-25">
                    <Image
                        src="/logo-kinsta.png"
                        alt="kinsta"
                        width={1524}
                        height={512}
                        className="object-contain"
                    />
                </div>
                <div className="max-w-3xl text-lg text-white space-y-6 leading-relaxed mb-25">
                    <p>
                        <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                            Kinsta
                        </a> is the top-ranked WordPress hosting company on the user-review site G2 because more
                        than 120,000 businesses know we’re fanatical about keeping their websites up and running.
                        Web publishers want to focus on their content. Developers, their code. Agencies, their clients.
                    </p>
                    <p>
                        Nobody wants to waste time restarting servers, fending off hackers, configuring caches,
                        launching backups, or repeatedly updating WordPress plugins and themes.
                    </p>
                    <p>
                        Instead, we’re serious about the “managed” part of{" "}
                        <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                            Managed Hosting for WordPress
                        </a>. That means fine-tuning the fastest virtual machines available in 37+ Google Cloud data centers. It
                        means harnessing Cloudflare’s network to protect customer websites from DDoS attacks and
                        help them distribute their content globally.
                    </p>
                    <p>
                        It also means empowering customers with Kinsta’s custom dashboard, MyKinsta, loaded with
                        tools that make it simple to deploy, update, and monitor WordPress sites — whether that’s one
                        site or a hundred.
                    </p>
                    <p>
                        Moving to Kinsta is easy, because we offer unlimited free migrations. Once you’re on board,
                        customer support is available 24/7 in 10 languages.
                    </p>
                    <p>
                        And we play well with your team: Just ask the affiliate marketers earning recurring monthly
                        revenue from Kinsta and the{" "}
                        <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                            Agency Partner Program
                        </a> members who are delighting their own customers on our platform.
                    </p>
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
