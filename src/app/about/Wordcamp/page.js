// app/about/what-is-wordcamp/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "What is WordCamp?",
  description: "รู้จักงาน WordCamp และบทบาทของชุมชน WordPress",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 leading-8 text-white">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        What is WordCamp?
      </h1>

      {/* Thai section */}
      <section lang="th" className="space-y-4">
        <p>
          <strong>WordCamp</strong> เป็นงานสัมมนาสำหรับ <strong>WordPress</strong>{" "}
          จัดขึ้นโดยกลุ่มอาสาสมัครของชุมชน <strong>WordCamp</strong> ไม่ใช่งานวิชาการที่เป็นทางการ
          เราต้องการเปิดโอกาสให้ทุกคนที่ชื่นชอบ WordPress สามารถเข้ามาร่วมเป็นส่วนหนึ่งของงาน
          อาทิ บล็อกเกอร์ นักพัฒนา นักออกแบบ นักการตลาด เจ้าของธุรกิจ ผู้บริหาร นักศึกษา
          และจากสาขาอื่น ๆ ได้มีโอกาสพบปะ ทำความรู้จักกัน แลกเปลี่ยนความรู้ และทำกิจกรรมต่าง ๆ ภายในงานร่วมกัน
        </p>

        <p>
          สำหรับงาน <strong>WordCamp Bangkok 2025</strong> ถือเป็น WordCamp ครั้งที่ 6 ที่จัดขึ้นในกรุงเทพฯ
          นับว่าเป็นงานที่ชาว WordPress ในไทยต่างรอคอย โดยตลอดทั้งงานจะมีการพูดคุยกันตั้งแต่เรื่องทั่ว ๆ ไป
          ไปจนถึงความรู้เชิงเทคนิคเกี่ยวกับ WordPress
        </p>

        <p>
          คุณสามารถมีส่วนร่วมกับ WordCamp Bangkok 2025 ได้หลากหลายรูปแบบ ไม่ว่าจะเป็น สมัครเป็น Volunteer
          (กำลังจะเปิดรับสมัครในอีกไม่นาน) สมัครเป็น Speakers, Sponsors หรือ{" "}
          <Link
            href="/src/app/home#buy-ticket"
            className="underline hover:opacity-80 text-blue-500 hover:text-blue-700"
            title="ซื้อบัตรเข้าร่วมงาน"
          >
            ซื้อบัตรเข้าร่วมงาน
          </Link>
        </p>
      </section>

      <hr className="my-12 border-t" />

      {/* English section */}
      <section lang="en" className="space-y-4">
        <p>
          <strong>WordCamp</strong> is a casual, locally-organized conference
          covering everything related to{" "}
          <a
            href="https://wordpress.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 text-blue-500 hover:text-blue-700"
          >
            WordPress
          </a>
          . The free and open-source personal publishing web application powers
          millions of websites on the web. This event is put together by
          WordPress aficionados like you and is targeted to everyone from
          casual users to core developers with the vision to share ideas,
          knowledge and help each other grow.
        </p>

        <p>
          WordCamps come in many flavors, based on the local communities that
          produce them. Sessions often include how to use WordPress more
          effectively, plugin and theme development for beginners, advanced
          techniques, security, and more. To get a feel for typical sessions, check out the{" "}
          <a
            href="https://wordpress.tv/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 text-blue-500 hover:text-blue-700"
          >
            WordCamp channel at WordPress.tv
          </a>
          .
        </p>

        <p>
          Attendees range from blogging newbies to professional WordPress
          developers and consultants. Events usually combine scheduled
          programming with unconference sessions and activities. For more on
          common WordCamp elements, read about{" "}
          <a
            href="https://central.wordcamp.org/what-to-expect/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 text-blue-500 hover:text-blue-700"
          >
            what to expect
          </a>
          .
        </p>
      </section>
    </main>
  );
}