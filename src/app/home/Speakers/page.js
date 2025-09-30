import React from "react";
import Image from "next/image";
import Link from 'next/link'

export default function VolunteersPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-2 sm:px-6">
      <div className="rounded-2xl p-2 sm:p-6 md:p-10 max-w-6xl w-full">
        <Image
          src="/Call-for-Speakers.png"
          alt="Call for Volunteers"
          width={1200}
          height={942}
          className="rounded-3xl w-full h-auto mt-[50px]"
          priority
        />
        {/* Call for Speakers Section */}
        <section className="text-white py-16 px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-8">
              Call for Speakers
            </h2>

            {/* Intro */}
            <p className="mb-6 text-lg leading-relaxed">
              ลองนึกเล่น ๆ ถ้าหากว่างาน WordCamp Bangkok 2025 ไม่มี Speaker เลยจะเป็นอย่างไร?
              เราคิดว่างาน WCBKK จะไม่มีทางเกิดขึ้นได้อย่างแน่นอน ถ้าไม่มี Speaker
              ที่มาร่วมกันถ่ายทอดความรู้ ประสบการณ์ และเรื่องราวต่าง ๆ
            </p>

            <p className="mb-8 text-lg leading-relaxed">
              ดังนั้น เราจึงอยากเชิญชวนทุกคนมาสมัครเป็น Speaker ด้วยกัน
              เพื่อเปิดโอกาสให้กับตัวเองที่จะได้ก้าวเข้ามาเป็นส่วนหนึ่งของงาน
              และแบ่งปันเรื่องราวดี ๆ ของคุณให้กับชุมชน WordPress Bangkok
            </p>

            {/* WordCamp คืออะไร */}
            <h3 className="text-3xl font-extrabold mb-4">
              WordCamp คืออะไร?
            </h3>
            <p className="mb-8 text-lg leading-relaxed">
              WordCamp Bangkok เป็นงานสัมมนาสำหรับชาว WordPress
              ที่จัดขึ้นในกรุงเทพฯ ผู้เข้าร่วมงานจำนวนมากหลากหลายสาขาทั้งภายในประเทศ
              และต่างประเทศ อาทิ บล็อกเกอร์, นักพัฒนา, นักออกแบบ, นักการตลาด,
              เจ้าของธุรกิจ, ผู้บริหาร, นักศึกษา ฯลฯ งานนี้จึงเต็มไปด้วยกลุ่มคนที่มีความหลากหลาย
              ที่ต่างก็ชื่นชอบ WordPress
            </p>

            {/* หัวข้อการนำเสนอ */}
            <h3 className="text-3xl font-semibold mb-4">
              หัวข้อการนำเสนอไหนบ้าง ที่จะโดนใจเรา?
            </h3>
            <p className="mb-6 text-lg leading-relaxed">
              เรามีความตั้งใจให้ WordCamp Bangkok เป็นเวทีที่เปิดกว้าง
              เราจึงเปิดรับการนำเสนอทุกหัวข้อที่เกี่ยวกับ WordPress
              อาทิ Development, Design, Content, Marketing และอื่น ๆ
              รวมไปถึงเรื่องราวที่น่าสนใจที่จะเป็นประโยชน์ต่อผู้เข้าร่วมงาน
            </p>

            <p className="text-lg mb-4 leading-relaxed">
              คุณไม่จำเป็นต้องเป็นผู้เชี่ยวชาญ คนดัง หรือมีประสบการณ์การพูดมาก่อน
              อย่าให้ความคิดแบบนั้นปิดโอกาสของคุณ!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">

            {/* ข้อกำหนดเบื้องต้น */}
            <h3 className="text-lg mb-4">
              ไม่มีข้อจำกัดสำหรับหัวข้อการนำเสนอ ขอเพียง:
            </h3>
            <ul className="list-disc text-lg list-inside mb-8 space-y-2 leading-relaxed">
              <li>มีความเกี่ยวข้องกับ WordPress หรือเป็นประโยชน์กับผู้เข้าร่วมงาน</li>
              <li>
                คุณมีความเข้าใจ และ
                <a href="/contact" className="text-blue-500 underline hover:text-blue-600">ยินดีปฏิบัติตามข้อตกลง</a> ของ WordPress
              </li>
              <li>เป็นสิ่งที่คุณถนัด สนใจ และอยากแบ่งปัน</li>
            </ul>

            {/* ทำไมควรสมัคร */}
            <h3 className="text-3xl font-semibold mb-4">
              ทำไมคุณถึงควรสมัครเป็น <span className="font-extrabold">Speaker</span> งาน <span className="font-extrabold">WordCamp Bangkok?</span>
            </h3>
            <ul className="list-disc text-lg list-inside mb-8 space-y-2 leading-relaxed">
              <li>ได้มีโอกาสแบ่งปันประสบการณ์ที่มีคุณค่าให้กับคนอื่น ๆ</li>
              <li>ได้มีโอกาสร่วมเป็นส่วนหนึ่งของงาน WordCamp Bangkok และรู้จักกับ WordPress Community มากขึ้น</li>
              <li>ได้รับประสบการณ์พิเศษจากการเป็น Speaker ใน WordCamp ที่ไม่สามารถหาได้จากที่ไหน</li>
            </ul>

            {/* รูปแบบการพูด */}
            <h3 className="text-3xl font-semibold mb-4">
              รูปแบบการนำเสนอที่เปิดรับสมัคร มีแบบไหนบ้าง?
            </h3>
            <p className="mb-8 text-lg leading-relaxed">
              <span className="font-bold">Long talks</span> – ระยะเวลา 40 นาที
              (รวมเวลาสำหรับการถามตอบ 5–10 นาที)
            </p>

            {/* กำหนดเวลา */}
            <h3 className="text-3xl font-semibold mb-4">
              ระยะเวลาการรับสมัคร และกำหนดการที่เกี่ยวข้อง
            </h3>
            <p className="mb-2 text-lg leading-relaxed">
              สามารถส่งหัวข้อได้ตั้งแต่ <span className="font-bold">วันนี้ – 25 ตุลาคม 2568</span>
            </p>
            <p className="mb-6 text-lg leading-relaxed">
              ผู้สมัครจะได้รับการติดต่อเพื่อแจ้งผลการสมัคร ภายในวันที่
              <span className="font-bold"> 1 พฤศจิกายน 2568</span>
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              หากคุณต้องการส่งหัวข้อการนำเสนอหลายหัวข้อ
              กรุณากรอกใบสมัครและแนบส่งทีละหัวข้อ
            </p>

            {/* Contact */}
            <p className="text-lg leading-relaxed">
              หากมีข้อสงสัยเกี่ยวกับการสมัคร Speaker สามารถสอบถามได้ทางหน้า <a href="/contact" className="text-blue-500 underline hover:text-blue-600">Contact</a> ทีมงานจะรีบตอบกลับโดยเร็วที่สุด 😎
            </p>
          </div>
          <div className="flex justify-center mt-[60px]">
            <hr className="border-t border-gray-400 w-1/4" />
          </div>
          <div className="max-w-4xl mx-auto space-y-8 mb-5 mt-[60px]">

            {/* Intro */}
            <p className="text-lg leading-relaxed">
              Can you imagine what would WordCamp Bangkok 2025 going to be without speakers?
              Well, we believe that the WCBKK wouldn’t gonna happen if we no one wants to speak.
            </p>
            <p className="text-lg leading-relaxed">
              That’s why we would like to invite you to submit your talks as our speaker.
              This is an excellent opportunity for you to step up and share your story
              to WordPress Bangkok community!
            </p>

            {/* What is WordCamp Bangkok */}
            <div>
              <h2 className="text-3xl font-extrabold mb-4">
                What is WordCamp Bangkok?
              </h2>
              <p className="text-lg leading-relaxed">
                WordCamp Bangkok is a community based event that brings together bloggers,
                developers, designers, artists, small business owners, entrepreneurs,
                and educators from all across Asia including Thailand together.
                WordCamp Bangkok represents the passion, talent, and diversity of our community,
                and we want you to be a part of it!
              </p>
            </div>

            {/* What we are looking for */}
            <div>
              <h2 className="text-3xl font-extrabold mb-4">
                What we are looking for?
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                WordCamps are aimed at everyone and anyone who uses WordPress.
                We accept all talks that are related to WordPress such as Development, Design, Content,
                Marketing, and story-telling that would benefit our community.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                We do NOT require you to be a well-known expert, programmer,
                or have any special certification.
                If you haven’t spoken at a conference before, that’s ok, don’t let that hold you back!
              </p>
              <p className="text-lg leading-relaxed mb-4">
                The following are general guidelines for the talks. There should be…
              </p>

              {/* Guidelines */}
              <ul className="text-lg list-disc list-inside space-y-2">
                <li>Directly related to WordPress, or immediately applicable and relevant to our audience.</li>
                <li>Knowledgeable and <a href="/contact" className="text-blue-500 underline hover:text-blue-600">adhere’s to WordPress’s principles</a></li>
                <li>Something that you’re passionate and excited to talk about.</li>
              </ul>
            </div>
          </div>

          {/* Why should you become a WordCamp Bangkok speaker? */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              Why should you become a WordCamp Bangkok speaker?
            </h2>
            <ul className="text-lg list-disc list-inside mb-5 space-y-2">
              <li>A great opportunity to share your knowledge and show your support to the WCBKK group.</li>
              <li>A great opportunity to be a part of WCBKK and getting involved with the WordPress Bangkok community.</li>
              <li>Gaining speaking experience.</li>
            </ul>
          </div>

          {/* How long should the presentations be? */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              How long should the presentations be?
            </h2>
            <p className="text-lg leading-relaxed mb-5">
              <span className="font-semibold">Long talks</span> – 40 minutes in length.
              Please expect to have between 5 to 10 minutes for Q&amp;A either along the way or at the end.
            </p>
          </div>

          {/* Application deadline and process */}
          <div>
            <h2 className="text-3xl font-extrabold mb-4">
              What is the application deadline and process?
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              The Call for Speakers will be open until <span className="font-semibold italic">25 October 2025</span>,
              so please make sure that you submit your application in time.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              All applicants will receive a notification of their application outcome by
              <span className="font-semibold italic"> 1 November 2025</span>.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              If you wish to propose multiple topics, please submit a separate form for each of them.
            </p>
            <p className="text-lg leading-relaxed">
              If you have any questions related to the presentation, or if you have trouble
              accessing or using the speaker application form,
              <a href="/contact" className="text-blue-500 underline hover:text-blue-600">please contact us.</a>
            </p>
          </div>
          <form className="max-w-4xl mx-auto mt-12">
            {/* Name */}
            <div>
              <label className="block text-lg font-semibold mb-1">
                Name <span className="text-sm text-gray-500">(required)</span>
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
                Email <span className="text-sm text-gray-500">(required)</span>
              </label>
              <input
                type="email"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* WordPress.org Username */}
            <div>
              <label className="block text-lg font-semibold mb-1">WordPress.org Username</label>
              <input
                type="text"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold mb-1">
                Your Bio{" "}
                <span className="text-sm text-gray-500">(required)</span>
              </label>
              <textarea
                required
                rows="8"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              ></textarea>
            </div>
            <div>
              <label className="block text-lg font-semibold mb-1">
                Topic Title{" "}
                <span className="text-sm text-gray-500">(required)</span>
              </label>
              <textarea
                required
                rows="2"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              ></textarea>
            </div>
            <div>
              <label className="block text-lg font-semibold mb-1">
                Topic Description{" "}
                <span className="text-sm text-gray-500">(required)</span>
              </label>
              <textarea
                required
                rows="8"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              ></textarea>
            </div>

            {/* Number of Hours Available */}
            <div>
              <label className="block text-lg font-semibold mb-1">
                Target Audience <span className="text-sm text-gray-500">(required)</span>
              </label>
              <input
                type="number"
                min="1"
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* First Time Volunteering */}
            <div>
              <label className="block text-lg font-semibold mb-2">
                Is this your first time being a speaker at a WordPress event? <span className="text-sm text-gray-500">(required)</span>
              </label>
              <div className="text-lg space-y-2">
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
              </div>
            </div>

            {/* Questions / Comments */}
            <div className="mt-6">
              <label className="block text-lg font-semibold mb-1">Past Speaking Experience (not necessary to apply)</label>
              <textarea
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-lg">
              <button
                type="submit"
                className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-black transition"
              >
                Submit
              </button>
            </div>
          </form>
          {/* Divider line */}
          <div className="flex justify-center mt-20">
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
