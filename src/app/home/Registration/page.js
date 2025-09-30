import React from "react";
import Image from "next/image";
import Link from 'next/link'

export default function VolunteersPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-2 sm:px-6">
      <div className="rounded-2xl p-2 sm:p-6 md:p-10 max-w-6xl w-full">
        <Image
          src="/Registration.png"
          alt="Call for Volunteers"
          width={1200}
          height={942}
          className="rounded-3xl w-full h-auto mt-[50px]"
          priority
        />

        <section className="max-w-4xl mx-auto px-6 md:px-12 text-white py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-15">
            Open Registration
          </h1>

          {/* Content */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              (English version below)
            </p>
            <p>
              WordCamp Bangkok 2025 จะจัดขึ้นในวันที่ 14 ธันวาคม 2568 ที่สมาคมนิสิตเก่าจุฬาลงกรณ์มหาวิทยาลัย <a href="/access/Location"
                className="text-blue-500 underline hover:text-blue-600"
              >
                (คลิกเพื่อดูแผนที่)
              </a> เปิดให้ผู้ที่สนใจเริ่มลงทะเบียนได้แล้วตั้งแต่วันนี้ <a href="/tickefs"
                className="text-blue-500 underline hover:text-blue-600"
              >
                (คลิกเพื่อลงทะเบียน)
              </a>
            </p>
            <p className="mb-15">
              โดยวันที่ 13 จะเป็นวัน Contributor ผู้ร่วมงานสามารถเข้าร่วมงานได้ฟรี โดยรอการประกาศจากทางเราให้ทราบในอนาคต
            </p>
            <div className="mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">สิ่งที่คุณจะได้รับ</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>ฟรีอาหารเที่ยง</li>
                <li>เข้าร่วมงาน Conference ที่มีเนื้อหาเกี่ยวกับ WordPress หลากหลายกว่า 14 หัวข้อ (รอการประกาศ)</li>
                <li>ได้พบปะพูดคุยกับผู้ที่ชื่นชอบและสนใจในสิ่งเดียวกัน</li>
                <li>ได้สร้างโอกาสและคอนเนคชั่นในงาน</li>
                <li>After Party ฟรี เครื่องดื่ม อาหาร และแอลกอฮอล์ สนุกไปกับดนตรีและกิจกรรม</li>
                <li>และของที่ระลึกภายในงานต่าง ๆ อีกมากมาย</li>
              </ul>

              <p className="mt-6 leading-relaxed">
                ในบันทึกรวมมีหัวข้อและกิจกรรมภายในงานที่น่าสนใจหลากหลาย
                เพื่อให้เหมาะสมกับผู้ร่วมงานทุกท่าน หัวข้อภายในงานของเราเปิดกว้างสำหรับผู้ใช้ WordPress ทุกระดับ
                ตั้งแต่โปรแกรมเมอร์ระดับเบื้องต้น/ขั้นสูง กราฟิกดีไซน์เนอร์ บล็อกเกอร์ และผู้ใช้งานทั่วไป
                เรามั่นใจว่าหัวข้อในแต่ละหัวข้อจะช่วยให้คุณทำงานได้ดีขึ้นแน่นอน
              </p>

              <p className="mt-4 leading-relaxed">
                ตลอดทั้งวันคุณสามารถพูดคุยแลกเปลี่ยนความรู้กันได้
                นอกจากนี้ยังมี After Party หลังงานที่ได้เตรียมเอาไว้เป็นพิเศษอีกด้วย
              </p>
            </div>

            {/* ทำไมถึงต้องเก็บค่าเข้างาน */}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6">ทำไมถึงต้องเก็บค่าเข้างาน?</h2>
              <p className="leading-relaxed mb-4">
                เช่นเดียวกันกับ WordPress ที่ทุกคนสามารถใช้งานได้ฟรี ซึ่งคุณจะติดตามงาน WordCamp นั้นสามารถเข้าร่วมงานได้ฟรีด้วย
                แต่ถ้าเราทำแบบนั้น โดยทั่วไปจะมีผู้ลงทะเบียนเข้ามาจำนวน 500 ท่าน แต่มีผู้เข้าร่วมไม่ถึง 200 ท่าน
                ดังนั้นเราจึงเก็บค่าเข้าร่วมงานให้น้อยที่สุดเท่าที่จะเป็นไปได้ ในขณะที่มีผู้ลงทะเบียนเข้าร่วมงานเพียงพอที่จะให้ผู้ที่สนใจจริงเข้าร่วมงาน
              </p>

              <p className="leading-relaxed">
                ราคาบัตรของงาน WordCamp จึงเป็นเพียงสัญลักษณ์
                เพราะงานนี้เราจัดขึ้น <span className="font-bold italic">ไม่ได้แสวงหาผลกำไร</span>
                แต่พวกเราร่วมกันจัดกันด้วยใจ เช่นเดียวกับที่ WordPress ถูกพัฒนาด้วย Community มาตลอดระยะเวลา 15 ปี
              </p>
            </div>
            <p className="mb-6">
              WordCamp Bangkok 2025 will be held on the 14th of December at Chulalongkorn University
              Alumni Association{" "}
              <a href="#map" className="underline text-blue-500 hover:text-blue-600">
                (Directions here)
              </a>
              . Registration is now open, so grab your tickets today!{" "}
              <a href="#tickets" className="underline text-blue-500 hover:text-blue-600">
                (Get Tickets)
              </a>
            </p>

            {/* Heading */}
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6">
              Here’s what is included in the ticket
            </h2>

            {/* List */}
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Access to the conference with a variety of content</li>
              <li>
                Activities in the conference itself (Details will be shared closer to the actual event)
              </li>
              <li>Access to the after party</li>
              <li>And SWAG!</li>
            </ul>

            {/* Paragraphs */}
            <p className="leading-relaxed mb-4">
              We’ve opened up more tracks and have a good amount of sessions planned. Throw in the after
              party, plenty of time to network and socialize between sessions. It’s{" "}
              <span className="font-bold">THB 500 net</span> all inclusive which is an extreme bargain.
            </p>

            <p className="leading-relaxed">
              We had plenty of presentations submitted and you’ll love all the sessions chosen for this year. The topics will be broad so as to make the vent accessible to everyone. Whether you are new to WordPress, an advanced developer, beginning developer, designer, or a blogger/user – we are certain that you will find many of the sessions valuable and will add to the success of your business.
            </p>
            <h2 className="text-2xl md:text-5xl font-extrabold mb-6">
              Why isn’t the WordCamp event free?
            </h2>

            {/* Paragraphs */}
            <p className="leading-relaxed mb-4">
              Just like WordPress is open source, the team also wishes for the WordCamp event to be free of
              charge. This isn’t the case because when we do this, there’s a huge number of absentees of
              attendees not attending the event. To mitigate this, we have decided to charge a minimal fee.
              We are a non-profit, a group of volunteers who are committing out time to helping out and
              bringing you the best that WordPress has to offer. Rest assured that all the revenue goes
              directly into bringing you the best of value.
            </p>

            <p className="leading-relaxed mb-18">
              Register Today! It’s the best THB 500 you’ll invest in your business.{" "}
              <a href="#register" className="underline text-blue-500 hover:text-blue-600">
                Buy here
              </a>
            </p>
          </div>
          <div className="flex justify-center">
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
