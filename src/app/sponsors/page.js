import React from 'react'
import Image from 'next/image'
import Footer from '../footer/page'

export default function page() {
    return (
        <div>
            <main className="min-h-screen flex flex-col items-center justify-center text-white mt-[60px]">
                <h2 className="text-4xl font-bold mb-12">Sponsors</h2>

                <div className="mb-20">
                    <Image
                        src="/logo-automattic.png"
                        alt="Automattic Logo"
                        width={600}
                        height={120}
                        className="object-contain"
                    />
                </div>

                {/* Content */}
                <div className="max-w-3xl mb-20">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-4">Automattic</h3>
                    <p className="text-lg leading-relaxed">
                        At Automattic, we are passionate about making the web a better place. We are the
                        people behind WordPress.com, WooCommerce, Jetpack, WordPress VIP, Simplenote,
                        Longreads, WPScan, Akismet, Gravatar, Crowdsignal, Cloudup, Tumblr, Day One, Pocket
                        Casts, and more. We believe in making the web a better place. We’re a distributed
                        company with 2,007 Automatticians in 97 countries speaking 123 different languages.
                        We’re committed to diversity, equity, and inclusion, and our common goal is to
                        democratize publishing and commerce...
                    </p>
                </div>

                <div className="mb-20"> 
                    <Image
                        src="/logo-bluehost.png"
                        alt="Bluehost Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                {/* Content */}
                <div className="max-w-3xl mb-20">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-4">Bluehost</h3>
                    <p className="text-lg leading-relaxed">
                        Bluehost has been a WordPress partner since 2005, and powers over 2 million websites across the world with reliable hosting and personalized guidance. By leveraging the power of WordPress, Bluehost provides the fast website creation methods coupled with intuitive management tools. From secure automated WordPress installations to advanced marketing tools and services, and access to…
                    </p>
                </div>

                <div className="mb-20">
                    <Image
                        src="/logo-datarockie.png"
                        alt="Datarockie Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                <div className="max-w-3xl w-full text-left">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-20">DataRockie</h3>
                </div>

                <div className="mb-20"> 
                    <Image
                        src="/logo-Elemento.png"
                        alt="Elementor Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                <div className="max-w-3xl w-full text-left">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-20">Elementor</h3>
                </div>

                <div className="mb-20">
                    <Image
                        src="/logo-hosting_com.png"
                        alt="Hostinger Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                <div className="max-w-3xl w-full text-left mb-20">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-4">hosting.com</h3>
                    <p className="text-lg leading-relaxed">
                        Hosting.com is a growing web hosting provider with a team spanning 40 remote locations. Here’s a little about us: Built on a 20+ year foundation We’re proud to continue the legacy of A2 Hosting, founded in 2001. From its early days in a two-room office, A2 became known for: Community matters We’re a tech company…
                    </p>
                </div>

                <div className="mb-20">
                    <Image
                        src="/logo-kinsta.png"
                        alt="Kinsta Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                <div className="max-w-3xl w-full text-left mb-20">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-4">Kinsta</h3>
                    <p className="text-lg leading-relaxed">
                        Kinsta is the top-ranked WordPress hosting company on the user-review site G2 because morethan 120,000 businesses know we’re fanatical about keeping their websites up and running.Web publishers want to focus on their content. Developers, their code. Agencies, their clients. Nobody wants to waste time restarting servers, fending off hackers, configuring caches,launching backups, or repeatedly updating…
                    </p>
                </div>

                <div className="mb-20">
                    <Image
                        src="/logo-odds.png"
                        alt="ODDS Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                <div className="max-w-3xl w-full text-left">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-20">ODDS</h3>
                </div>

                <div className="mb-20">
                    <Image
                        src="/logo-pronto.png"
                        alt="Pronto Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                <div className="max-w-3xl w-full text-left">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-20">Pronto Marketing</h3>
                </div>

                <div className="mb-20">
                    <Image
                        src="/logo-rukcom.png"
                        alt="Rukcom Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                <div className="max-w-3xl w-full text-left">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-20">Ruk-com Cloud</h3>
                </div>

                <div className="mb-20">
                    <Image
                        src="/logo-seedwebs.png"
                        alt="Seedwebs Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                <div className="max-w-3xl w-full text-left">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-20">Seedwebs</h3>
                </div>

                <div className="mb-20">
                    <Image
                        src="/logo-thnic.png"
                        alt="THNIC Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                <div className="max-w-3xl w-full text-left">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-20">THNIC</h3>
                </div>

                <div className="mb-20">
                    <Image
                        src="/logo-commerce.png"
                        alt="Commerce Logo"
                        width={500}
                        height={120}
                        className="object-contain"
                    />
                </div>

                <div className="max-w-3xl w-full text-left mb-20">
                    <h3 className="text-3xl font-extrabold text-sky-600 mb-4">Woo</h3>
                    <p className="text-lg leading-relaxed">
                        Woo is the leading open-source ecommerce platform, powering 31.4% of the top million online stores.* Built on WordPress, Woo empowers anyone, anywhere, to sell anything with truly unlimited extensibility, flexibility, and control over how they build and evolve their business. * StoreLeads, StoreLeads.app, January 2024.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    )
}
