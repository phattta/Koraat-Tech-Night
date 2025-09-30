import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from "../../footer/page";

export default function page() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-6">
                {/* ชื่อ Sponsor */}
                <h2 className="font-extrabold mb-25 text-white mt-[50px] -ml-[300px]" style={{ fontSize: "60px", lineHeight: "1.1" }}>
                    Pronto Marketing
                </h2>

                {/* โลโก้ Sponsor */}
                <div className="flex justify-center mb-25">
                    <Image
                        src="/logo-pronto.png"
                        alt="pronto"
                        width={1024}
                        height={512}
                        className="object-contain"
                    />
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
