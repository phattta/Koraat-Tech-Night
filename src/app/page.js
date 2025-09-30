import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin } from "lucide-react";
import Footer from "./footer/page"

export default function Home() {
  return (
    <div>
      <div className="relative flex flex-col items-center px-2 sm:px-6 py-5 space-y-10">
        <div className="rounded-2xl overflow-hidden max-w-6xl w-full mx-auto text-center mb-15">
          {/* Title */}
          <h1 className="text-6xl text-white md:text-8xl font-bold mb-5">
            <span className="text-foreground">KORAT</span>
            <br />
            <span className="text-foreground">TECH </span>
            <span className="text-orange-500">NIGHT</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-blue-300 md:text-xl max-w-4xl mx-auto text-muted-foreground leading-relaxed mb-5">
            A GATHERING TO INSPIRE TECHNOLOGY AND CONNECT THE TECH COMMUNITY IN KORAT.
            JOIN DEVELOPERS, CREATIVES, AND BUSINESS INNOVATORS TO EXCHANGE IDEAS AND SHAPE
            KORAT'S FUTURE AS A REGIONAL TECH HUB.
          </p>

          {/* Event Details */}
          <div className="text-white bg-gray-800/50 backdrop-blur-sm border border-blue-600/50 rounded-lg p-8 max-w-4xl mx-auto mb-8">
            <div className="text-5xl md:text-7xl font-bold mb-6">
              30 AUGUST 2025
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg md:text-xl">
              {/* Calendar */}
              <div className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-medium">SAT</span>
              </div>

              {/* Clock */}
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-medium">17.00-20.30</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-cyan-400" />
                <span className="text-white font-medium">
                  Yujou izakaya, Nakhonratchasima
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <h2 href="#" className="bg-orange-500 hover:bg-orange-600 text-black font-bold text-xl px-12 py-2 rounded-lg shadow-lg transition"
            >
              REGISTER NOW
            </h2>
            <h2 href="#" className="flex items-center border border-blue-600 text-white font-bold text-xl px-12 py-2 rounded-lg hover:bg-gray-800 transition">
              <Image
                src="/qr.png"
                width={20}
                height={12}
                className="w-auto h-auto mr-4 invert"
              />
              QRCODE
            </h2>
          </div>

          {/* Sponsors */}
          <div className="pt-12">
            <p className="text-lg text-blue-300 mb-4">SPONSORED BY</p>
            <div className="flex items-center justify-center gap-8">
              <div className="bg-red-500 text-destructive-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl">
                N
              </div>
              <span className="text-white text-2xl font-bold">NEXTZY</span>
            </div>
          </div>
        </div>

        {/* Card 1 */}
        <Link href="/home/Registration" className="block">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl w-full">
            <Image
              src="/Registration.png"
              alt="Call for Speakers"
              width={1200}
              height={942}
              className="w-full h-auto"
            />
            <div className="p-6 sm:p-10 text-gray-900">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Open Registration</h2>
              <p className="text-sm text-gray-600 mb-4">September 19, 2025</p>
              <p>
                (English version below) WordCamp Bangkok 2025 จะจัดขึ้นในวันที่ 14 ธันวาคม 2568 ที่สมาคมนิสิตเก่าจุฬาลงกรณ์มหาวิทยาลัย (คลิกเพื่อดูแผนที่) เปิดให้ผู้ที่สนใจเริ่มลงทะเบียนได้แล้วตั้งแต่วันนี้ (คลิกเพื่อลงทะเบียน)
              </p>
            </div>
          </div>
        </Link>

        {/* Card 2 */}
        <Link href="/home/Volunteers" className="block">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl w-full">
            <Image
              src="/Call-for-volunteer.png"
              alt="Call for Volunteers"
              width={1200}
              height={942}
              className="w-full h-auto"
              priority
            />
            <div className="p-6 sm:p-10 text-gray-900">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Call for Volunteers</h2>
              <p className="text-sm text-gray-600 mb-4">September 11, 2025</p>
              <p>
                กลับมาอีกครั้งกับ WordCamp Bangkok ในปี 2025 นี้คุณจะได้พบกับมิตรภาพและการร่วมงานกับคนหลากหลาย ได้ร่วมสร้าง community ทื่ดีไปด้วยกัน และเป็นประจำทุกครั้ง ที่เราจะเปิดรับ Volunteer  เพื่อมาร่วมเป็นส่วนหนึ่งในการต้อนรับผู้ร่วมงานและจัดงานนี้ให้ลุล่วงไปได้ด้วยดี อาสาสมัคร WordCamp Bangkok จะได้รับอาหารในมื้อกลางวันของทุกวันที่จัด อีกทั้งเสื้อยืดประจำงาน เข้าร่วม Welcome Dinner สุด Exclusive ร่วมกับ Organizers และ Speakers ทุกคน และ After Party หลังจบงานร่วมกับผู้ร่วมทั้งหมด รวมถึงการได้เข้าร่วมกิจกรรมภายในสุด exclusive  ได้แลกเปลี่ยนประสบการณ์ ความรู้ และอื่น ๆ อีกมากมาย
              </p>
            </div>
          </div>
        </Link>

        {/* Card 3 */}
        <Link href="/home/Speakers" className="block">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl w-full">
            <Image
              src="/call-for-speakers.png"
              alt="Call for Speakers"
              width={1200}
              height={942}
              className="w-full h-auto"
            />
            <div className="p-6 sm:p-10 text-gray-900">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Call for Speakers</h2>
              <p className="text-sm text-gray-600 mb-4">August 31, 2025</p>
              <p>
                ลองนึกเล่น ๆ ถ้าหากว่างาน WordCamp Bangkok 2025 ไม่มี Speaker เลยจะเป็นอย่างไร? เราคิดว่างาน WCBKK จะไม่มีทางเกิดขึ้นได้อย่างแน่นอน ถ้าไม่มี Speaker ที่มาร่วมกันถ่ายทอดความรู้ ประสบการณ์ และเรื่องราวต่าง ๆ ดังนั้น เราจึงอยากเชิญชวนทุกคนมาสมัครเป็น Speaker ด้วยกัน เพื่อเปิดโอกาสให้กับตัวเองที่จะได้ก้าวเข้ามาเป็นส่วนหนึ่งของงาน และแบ่งปันเรื่องราวดี ๆ ของคุณให้กับชุมชน WordPress Bangkok
              </p>
            </div>
          </div>
        </Link>

        {/* Card 4 */}
        <Link href="/home/Lead" className="block">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl w-full">
            <Image
              src="/Call-for-Contributor-Day-Team-Lead.png"
              alt="Call for Speakers"
              width={1200}
              height={942}
              className="w-full h-auto"
            />
            <div className="p-6 sm:p-10 text-gray-900">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Call for Contributor Day Table Lead</h2>
              <p className="text-sm text-gray-600 mb-4">August 30, 2025</p>
              <p>
                Contributor Day stands as a key community-driven highlight of WordCamp Bangkok 2025, showcasing the power of our community working together. Taking place on December 13th, we’re now seeking dedicated WordPress enthusiasts to step up as Table Leads for this meaningful day of giving back, working together, and community building. We’re looking for experienced contributors to… <a href="/home/Lead" className="text-black underline hover:text-black">Read more</a>
              </p>
            </div>
          </div>
        </Link>

        {/* Card 5 */}
        <Link href="/home/Sponsors" className="block">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl w-full">
            <Image
              src="/Call-for-Sponsors.png"
              alt="Call for Speakers"
              width={1200}
              height={942}
              className="w-full h-auto"
            />
            <div className="p-6 sm:p-10 text-gray-900">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">เปิดรับผู้สนับสนุนงาน WordCamp Bangkok 2025 (Call for Sponsors)</h2>
              <p className="text-sm text-gray-600 mb-4">August 24, 2025</p>
              <p>
                ผู้สนับสนุนนับว่าเป็นส่วนสำคัญส่วนหนึ่ง ที่จะช่วยผลักดันให้งานนี้เกิดขึ้นได้ ด้วยเหตุนี้ เราจึงเปิดรับผู้สนับสนุนของงาน WordCamp Bangkok 2025 ขึ้นมา เพื่อช่วยสนับสนุนให้งานนี้เกิดขึ้นได้จริง
              </p>
            </div>
          </div>
        </Link>

        {/* Divider line */}
        <div className="flex justify-center mt-6 w-full">
          <hr className="border-t border-gray-600 w-full max-w-4xl" />
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
  );
}
