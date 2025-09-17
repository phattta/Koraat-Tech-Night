import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f9f5ef] px-2 sm:px-6 py-10 space-y-10">
      <div className="rounded-2xl overflow-hidden max-w-4xl w-full">
        <Image
          src="/main-logo.png"
          alt="Main Logo"
          width={1200}
          height={942}
          className="w-full h-auto"
        />
      </div>
      
      {/* Card 1: Volunteers */}
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

      {/* Card 2: Speakers */}
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
          <p className="text-sm text-gray-600 mb-4">September 15, 2025</p>
          <p>
            ลองนึกเล่น ๆ ถ้าหากว่างาน WordCamp Bangkok 2025 ไม่มี Speaker เลยจะเป็นอย่างไร? เราคิดว่างาน WCBKK จะไม่มีทางเกิดขึ้นได้อย่างแน่นอน ถ้าไม่มี Speaker ที่มาร่วมกันถ่ายทอดความรู้ ประสบการณ์ และเรื่องราวต่าง ๆ ดังนั้น เราจึงอยากเชิญชวนทุกคนมาสมัครเป็น Speaker ด้วยกัน เพื่อเปิดโอกาสให้กับตัวเองที่จะได้ก้าวเข้ามาเป็นส่วนหนึ่งของงาน และแบ่งปันเรื่องราวดี ๆ ของคุณให้กับชุมชน WordPress Bangkok
          </p>
        </div>
      </div>
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
            Contributor Day stands as a key community-driven highlight of WordCamp Bangkok 2025, showcasing the power of our community working together. Taking place on December 13th, we’re now seeking dedicated WordPress enthusiasts to step up as Table Leads for this meaningful day of giving back, working together, and community building. We’re looking for experienced contributors to… Read more
          </p>
        </div>
      </div>
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
      <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl w-full">
        <Image
          src="/WordCamp-Bangkok-Announcement.png"
          alt="Call for Speakers"
          width={1200}
          height={942}
          className="w-full h-auto"
        />
        <div className="p-6 sm:p-10 text-gray-900">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Welcome to WordCamp Bangkok 2025</h2>
          <p className="text-sm text-gray-600 mb-4">June 6, 2025</p>
          <p>
            กลับมาแล้ว! WordCamp Bangkok 2025! เตรียมตัวให้พร้อม! เพราะงาน WordCamp Bangkok กลับมาอย่างเป็นทางการแล้ว! We’re Back! WordCamp Bangkok 2025!
          </p>
        </div>
      </div>
    </div>
  );
}
