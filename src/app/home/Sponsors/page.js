import React from "react";
import Image from "next/image";
import Link from 'next/link'

export default function VolunteersPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-2 sm:px-6">
      <div className="rounded-2xl p-2 sm:p-6 md:p-10 max-w-6xl w-full">
        <Image
          src="/Call-for-Sponsors.png"
          alt="Call for Volunteers"
          width={1200}
          height={942}
          className="rounded-3xl w-full h-auto mt-[50px] mb-12"
          priority
        />

        {/* Header */}
        <header className="text-white max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
            เปิดรับผู้สนับสนุนงาน{" "}
            <span>WordCamp Bangkok 2025</span>{" "}
            (Call for Sponsors)
          </h1>
        </header>

        {/* Body */}
        <section className="max-w-3xl mx-auto space-y-6 text-base leading-relaxed">
          <div className="w-full bg-red-600 text-white text-center py-4">
            We are now closed for sponsors. Thank you for your interest in supporting WordCamp Bangkok 2025.
          </div>

          {/* English version link */}
          <p>
            <a
              href="#english"
              className="text-blue-500 text-lg underline hover:text-blue-600"
            >
              (English version below)
            </a>
          </p>

          {/* Content paragraphs */}
          <p className="text-lg text-white">
            WordCamp Bangkok 2025 งานระดับโลกที่รวบรวมผู้ใช้งาน WordPress
            ทั่วทั้งกรุงเทพฯและพื้นที่ใกล้เคียง กำลังจะกลับมาอีกครั้ง
            ในกรุงเทพมหานครของเรานั่นเอง!
          </p>

          <p className="text-lg text-white">
            โดยงาน WordCamp นั้น เป็นงานที่จัดขึ้นมา
            โดยไม่แสวงหาผลกำไรแบบ 100% ซึ่งจัดขึ้นจากทีมงานอาสาสมัครทั้งหมด
            จากทุกอุตสาหกรรม ทุกเพศ ทุกวัย
          </p>

          <p className="text-lg text-white">
            และด้วยเหตุนี้ ผู้สนับสนุน (หรือสปอนเซอร์) นับว่าเป็นส่วนสำคัญ
            ส่วนหนึ่ง ที่จะช่วยผลักดันให้งานนั้นเกิดขึ้นได้ ด้วยเหตุนี้
            เราจึงเปิดรับผู้สนับสนุนของงาน WordCamp Bangkok 2025 ขึ้นมา
            เพื่อช่วยสนับสนุนให้งานนี้เกิดขึ้นได้จริง
          </p>

          <p className="text-lg text-white">ในช่วงที่ผ่านมา</p>

          {/* Bullet list */}
          <ul className="list-disc text-lg list-inside space-y-2 text-white">
            <li>WordCamp Bangkok 2009</li>
            <li>
              WordCamp Bangkok 2017 ณ CP Tower{" "}
              <a
                href="https://bangkok.wordcamp.org/2017/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-600"
              >
                (https://bangkok.wordcamp.org/2017/)
              </a>
            </li>
            <li>
              WordCamp Bangkok 2018 ณ มหาวิทยาลัยรังสิต{" "}
              <a
                href="https://bangkok.wordcamp.org/2018/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-600"
              >
                (https://bangkok.wordcamp.org/2018/)
              </a>
            </li>
            <li>
              WordCamp Bangkok 2019 ณ มหาวิทยาลัยสยาม{" "}
              <a
                href="https://bangkok.wordcamp.org/2018/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-600"
              >
                (https://bangkok.wordcamp.org/2019/)
              </a>
            </li>
            <li>
              และล่าสุดกับงานระดับภูมิภาค WordCamp Asia 2023 ณ ไอคอนสยาม{" "}
              <a
                href="https://asia.wordcamp.org/2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 ml-[22px] underline hover:text-blue-600"
              >
                (https://asia.wordcamp.org/2023/)
              </a>
            </li>

            <p className="mt-5 mb-4">
              สำหรับ WordCamp Bangkok 2025 เราคาดการณ์ว่าจะมีผู้เข้าร่วมงานประมาณ
              300 ท่าน ซึ่งประกอบไปด้วยผู้ใช้งาน WordPress ทั้งชาวไทยและชาวต่างชาติ
            </p>
            <p className="mb-4">
              ในงานนี้ เราขอเชิญชวนคุณมาเป็น Sponsor เพื่อช่วยสนับสนุน Community ผู้ใช้ WordPress ในไทย
            </p>
            <p className="mb-4">
              ข้อมูล Sponsor Tier อยู่ด้านล่างนี้ และหากสนใจ Tier ไหน สามารถเลื่อนไปด้านล่างสุดของหน้า เพื่อกรอกฟอร์มได้เลย
            </p>

            <p className="mb-6">
              WordCamp is a gathering for WordPress users, developers, designers,
              and enthusiasts from all over the world to come together to exchange
              knowledge, share experiences, and build business networks.
              It is a 100% not-for-profit event, organized entirely by a team of
              volunteers.
            </p>
            <p className="mb-4">
              In the past, WordCamp has been held in Thailand several times, including:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>WordCamp Bangkok 2009</li>
              <li>
                WordCamp Bangkok 2017 at CP Tower{" "}
                <a
                  href="https://bangkok.wordcamp.org/2017/"
                  target="_blank"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  (https://bangkok.wordcamp.org/2017/)
                </a>
              </li>
              <li>
                WordCamp Bangkok 2018 at Siam University{" "}
                <a
                  href="https://bangkok.wordcamp.org/2018/"
                  target="_blank"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  (https://bangkok.wordcamp.org/2018/)
                </a>
              </li>
              <li>
                WordCamp Bangkok 2019 at Siam University{" "}
                <a
                  href="https://bangkok.wordcamp.org/2019/"
                  target="_blank"
                  className="text-blue-500 underline hover:text-blue-600"
                >
                  (https://bangkok.wordcamp.org/2019/)
                </a>
              </li>
              <li>
                And most recently, the regional event WordCamp Asia 2023 at ICONSIAM{" "}
                <a
                  href="https://asia.wordcamp.org/2023/"
                  target="_blank"
                  className="text-blue-500 ml-[22px] underline hover:text-blue-600"
                >
                  (https://asia.wordcamp.org/2023/)
                </a>
              </li>
            </ul>
            <p className="mb-4">
              For WordCamp Bangkok 2025, we anticipate approximately 300 attendees,
              consisting of both Thai and international WordPress users.
            </p>
            <p className="mb-4">
              We invite you to become a sponsor to help support the WordPress user
              community in Thailand.
            </p>
            <p>
              Sponsor Tier information is below. If you are interested in a tier,
              you can scroll to the bottom of the page to fill out the form.
            </p>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
              Sponsorship Tiers
            </h1>
            <p>
              คุณสามารถเลือกสนับสนุนได้ตามที่ต้องการ โดยเราได้แบ่งออกเป็น 3 แพคเกจดังนี้
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              GOLD › 70,000 บาท
            </h1>
            <li>
              <span className="font-bold">โลโก้ในสื่อสิ่งพิมพ์: (Backdrop, Standee / Rollup, T-Shirt, Booklet)</span> ขนาดใหญ่
            </li>
            <li>
              <span className="font-bold">โลโก้ในสื่อดิจิทัล (Website, Slides, Email Marketing):</span> ขนาดใหญ่
            </li>
            <li>
              <span className="font-bold">บัตรเข้าร่วมงาน และเข้าร่วม Welcome Dinner – Dinner สุดพิเศษ ก่อนวันงาน สำหรับ Sponsors, Speakers, และ Community Leaders):</span> 5 ใบ
            </li>
            <li>
              <span className="font-bold">การกล่าวถึงบนเวที:</span> มี
            </li>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              SILVER › 35,000 บาท
            </h1>
            <li>
              <span className="font-bold">โลโก้ในสื่อสิ่งพิมพ์:</span> ขนาดกลาง
            </li>
            <li>
              <span className="font-bold">โลโก้ในสื่อดิจิทัล:</span> ขนาดกลาง
            </li>
            <li>
              <span className="font-bold">บัตรเข้าร่วมงาน และเข้าร่วม Welcome Dinner:</span> 2 ใบ
            </li>
            <li>
              <span className="font-bold">การกล่าวถึงบนเวที:</span> มี
            </li>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              BRONZE › 10,000 บาท
            </h1>
            <li>
              <span className="font-bold">โลโก้ในสื่อสิ่งพิมพ์:</span> ไม่มี
            </li>
            <li>
              <span className="font-bold">โลโก้ในสื่อดิจิทัล:</span> ขนาดเล็ก
            </li>
            <li>
              <span className="font-bold">บัตรเข้าร่วมงาน และเข้าร่วม Welcome Dinner:</span> 1 ใบ
            </li>
            <li>
              <span className="font-bold">การกล่าวถึงบนเวที:</span> มี
            </li>
            <div className="flex justify-center mt-15 mb-14">
              <hr className="border-t border-gray-400 w-1/4" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
              Call for Sponsors
            </h1>
            <p>
              You can choose to support us as you wish. We have divided our sponsorship into the following 3 packages:
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              GOLD › 70,000 Baht
            </h1>
            <li>
              <span className="font-bold">Logo in printed media:</span> (Backdrop, Standee / Rollup, T-Shirt, Booklet) Large size
            </li>
            <li>
              <span className="font-bold">Logo in digital media:</span> (Website, Slides, Email Marketing) Large size
            </li>
            <li>
              <span className="font-bold">Event tickets and Welcome Dinner admission:</span> (An exclusive dinner before the event for Sponsors, Speakers, and Community Leaders) 5 tickets
            </li>
            <li>
              <span className="font-bold">Mention on stage:</span> Yes
            </li>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              SILVER › 35,000 Baht
            </h1>
            <li>
              <span className="font-bold">Logo in printed media:</span> Medium size
            </li>
            <li>
              <span className="font-bold">Logo in digital media:</span> Medium size
            </li>
            <li>
              <span className="font-bold">Event tickets and Welcome Dinner admission:</span> 2 tickets
            </li>
            <li>
              <span className="font-bold">Mention on stage:</span> Yes
            </li>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              BRONZE › 10,000 Baht
            </h1>
            <li>
              <span className="font-bold">Logo in printed media:</span> None
            </li>
            <li>
              <span className="font-bold">Logo in digital media:</span> Small size
            </li>
            <li>
              <span className="font-bold">Event tickets and Welcome Dinner admission:</span> 1 ticket
            </li>
            <li>
              <span className="font-bold">Mention on stage:</span> Yes
            </li>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-snug">
              Sponsor Contact Form
            </h1>
            <p>
              ถ้าคุณสนใจสปอนเซอร์งาน WordCamp Bangkok 2025 สามารถกรอกฟอร์มด้านล่างนี้ได้เลย ทีมงานจะติดต่อกลับโดยเร็วที่สุด
            </p>
            <p>
              If you are interested in sponsoring WordCamp Bangkok 2025 event, please fill in the form below. Our sponsor team will get back to you soon.
            </p>
            <form className="max-w-4xl mx-auto mt-6">
              <div>
                <label className="block font-semibold mb-1">
                  Contact Name <span className="text-sm text-gray-500">(required)</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Company Name <span className="text-sm text-gray-500">(required)</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              {/* WordPress.org Username */}
              <div>
                <label className="block font-semibold mb-1">Company Website</label>
                <input
                  type="text"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Email{" "}
                  <span className="text-sm text-gray-500">(required)</span>
                </label>
                <textarea
                  required
                  rows="1"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                ></textarea>
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Phone Number{" "}
                  <span className="text-sm text-gray-500">(required)</span>
                </label>
                <textarea
                  required
                  rows="1"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                ></textarea>
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Sponsorship Level{" "}
                  <span className="text-sm text-gray-500">(required)</span>
                </label>
                <select
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                >
                  <option value="">Select one option</option>
                  <option value="bronze">Bronze</option>
                  <option value="silver">Silver</option>
                  <option value="gold">Gold</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-1">
                  Why Would you Like to Sponsor WordCamp?{" "}
                  <span className="text-sm text-gray-500">(required)</span>
                </label>
                <textarea
                  required
                  rows="8"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                ></textarea>
              </div>

              {/* First Time Volunteering */}
              <div>
                <label className="block font-semibold mb-2">
                  Is this your first time being a sponsor at a WordPress event?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="firstTime"
                      value="yes"
                      className="mr-2 accent-black"
                      required
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="firstTime"
                      value="no"
                      className="mr-2 accent-black"
                    />
                    No
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="firstTime"
                      value="no"
                      className="mr-2 accent-black"
                    />
                    Unsure
                  </label>
                </div>
              </div>

              {/* Questions / Comments */}
              <div className="mt-6">
                <label className="block font-semibold mb-1">Questions / Comments</label>
                <textarea
                  rows="8"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-black transition"
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="mt-5 flex flex-col md:flex-row justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 rounded-full bg-amber-50 hover:bg-gray-300 text-gray-900 font-medium transition text-center"
              >
                Call for Sponsors
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full bg-amber-50 hover:bg-gray-300 text-gray-900 font-medium transition text-center"
              >
                WordCamp Bangkok 2025
              </a>
            </div>
            {/* Divider line */}
            <div className="flex justify-center mt-10">
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
          </ul>
        </section>
      </div>
    </div>
  );
}
