import React from "react";
import Image from "next/image";
import Link from 'next/link'

export default function VolunteersPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-10">
      {/* ภาพ Header */}
      <div className="rounded-2xl p-2 sm:p-6 md:p-10 max-w-6xl w-full">
        <Image
          src="/Call-for-volunteer.png"
          alt="Call for Volunteers"
          width={1200}
          height={942}
          className="rounded-3xl w-full h-auto"
          priority
        />
      </div>

      {/* เนื้อหา */}
      <div className="max-w-4xl w-full mt-10 space-y-6 text-white">
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          Call for Volunteers
        </h1>

        <p className="text-lg leading-relaxed">
          กลับมาอีกครั้งกับ WordCamp Bangkok ในปี 2025
          ที่คุณจะได้พบกับมิตรภาพและการร่วมงานกับคนหลากหลาย
          ได้ร่วมสร้าง community ที่เติบโตด้วยกัน
          และเป็นประจำทุกครั้งที่จะเปิดรับ Volunteer
          เพื่อมาร่วมเป็นส่วนหนึ่งในการต้อนรับผู้ร่วมงานและจัดงานให้ที่สุดลงไปได้ด้วยดี
        </p>

        <p className="text-lg leading-relaxed">
          อาสาสมัคร WordCamp Bangkok จะได้รับอาหารในมื้อกลางวันของทุกวันที่จัด
          อีกทั้งเบื้องหลังประจำงาน เข้าร่วม Welcome Dinner สุด Exclusive
          ร่วมกับ Organizers และ Speakers ทุกคน
          และ After Party หลังจบงานร่วมกับผู้ร่วมทั้งหมด
          รวมถึงการได้เข้าร่วมกิจกรรมพิเศษสุด exclusive
          ได้แลกเปลี่ยนประสบการณ์ ความรู้ และอื่น ๆ อีกมากมาย
        </p>

        <h2 className="text-2xl font-bold mt-8">
          ใน <span className="text-3xl font-extrabold">WordCamp Bangkok 2025</span> นี้
          เราเปิดรับอาสาสมัครทั้งหมด 7 หน้าที่ด้วยกัน ได้แก่
        </h2>

        {/* ตัวอย่าง Section */}
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">Registration & Food</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                สำหรับใครที่อยากต้อนรับผู้ร่วมงานของเรา ต้องการเป็นหน้าแรกที่ผู้ร่วมงานจะได้พบ
                แนะนำงานและสิ่งจำเป็นที่ควรรู้ อีกทั้งดูแลการบริการในมื้อกลางวัน
                เพื่อให้บรรยากาศอบอุ่นและมีความสุข
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                คุณจะได้พูดคุยทักทายรวมถึงสร้างความประทับใจแรกเริ่มให้ผู้เข้าร่วม
                โดยได้ต้อนอยู่ประจำห้อง มีงานประจำที่แน่นชัดและเป็นโอกาสดีในการสร้างความสัมพันธ์
              </p>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">Conference Room Leader</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                สำหรับใครที่มีความเป็นผู้นำ เราขอเชิญคุณมาเป็นผู้นำประจำ Conference Room ของเรา เพื่อดูแลตำแหน่งต่าง ๆ ที่เกี่ยวข้องกับห้องของตนเองในช่วงเวลานั้น ประสานงานกับ Organizer และ Runner เพื่อให้ความเป็นไปในห้องที่คุณรับผิดชอบออกมาดีและตรงเวลา
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                คุณจะได้รับบทบาทของการเป็นผู้นำ ผู้ประสานงาน และการแก้ไขปัญหาเฉพาะหน้า ที่จะทำให้งานดำเนินได้ราบรื่นต่อไป โดยคุณจะเป็นเหมือนวาทยากรที่บรรเลงความเป็นไปในห้องบรรยายให้ลุล่วงด้วยดีและตรงเวลาแต่ยังคงวัตถุประสงค์ของช่วงนั้น ๆ คุณจะได้รู้จักฝ่ายต่าง ๆ ทุกคนที่เกี่ยวข้องในห้องบรรยาย รวมถึงอาจออกแบบรูปแบบการทำงานที่คุณต้องการเพื่อให้งานลุล่วง
              </p>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">Social media</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                สำหรับใครที่มีความเป็นผู้นำ เราขอเชิญคุณมาเป็นผู้นำประจำ Conference Room ของเรา เพื่อดูแลตำแหน่งต่าง ๆ ที่เกี่ยวข้องกับห้องของตนเองในช่วงเวลานั้น ประสานงานกับ Organizer และ Runner เพื่อให้ความเป็นไปในห้องที่คุณรับผิดชอบออกมาดีและตรงเวลาผู้อัปเดตสถานการณ์และเนื้อหาอย่างทันท่วงที คอยสรุปเนื้อหาปัจจุบันของห้องประชุม เพื่อให้ผู้ที่สนใจได้รับความรู้และประสบการณ์ของ Speaker สด ๆ บน Social Media ของเรา
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                คุณจะได้การสรุปเนื้อหาสำคัญ การฝึกการเขียนและการถ่ายทอด การสื่อสาร และยังได้ร่วมฟังการบรรยายเต็ม ๆ ในห้องที่คุณอยากฟัง เรียกได้ว่า “ทั้งได้ฟังและได้งาน!”
              </p>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">Photos</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                ผู้เก็บภาพบรรยากาศตลอดกิจกรรมที่เกิดขึ้นใน WordCamp Bangkok 2025 นี้ เพื่อบันทึกทุก ๆ ความทรงจำ และส่งต่อเรื่องราวด้วยรูปภาพที่เกิดขึ้นในช่วงขณะนั้น รวมถึงอำนวยความสะดวกในการเก็บภาพให้แก่ผู้ร่วมงาน จนกระทั่งนำไฟล์ภาพขึ้นเพื่อให้ทุกคนในงาน อาจจะได้ภาพของตนเองในมุมมองของคุณ
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                คุณจะได้มีอิสระในการเดินห้องต่าง ๆ โดยไม่จำเป็นต้องอยู่ประจำห้องใดห้องหนึ่งเท่านั้นในช่วงเวลาส่วนใหญ่ และจะได้รับความรับผิดชอบหลักในห้องอีกทีหนึ่ง เรียกได้ว่า คุณจะเป็นทั้งตากล้องประจำห้อง แต่หากคุณคิดว่ามีโอกาสจะได้ภาพสวย ๆ ที่อื่น คุณก็สามารถไปได้เลย โดยคำนึงถึงประสบการณ์ที่ผู้ชมจะได้รับ และความรับผิดชอบของคุณต่อห้อง ว่ามีภาพเพียงพอแล้วหรือไม่
              </p>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">Emcee</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                พิธีกร แบ่งออกเป็นพิธีกรภาพรวมประจำงานและพิธีกรประจำห้องบรรยาย พิธีกรประจำงานมีหน้าที่ดูแลบรรยากาศของงานทั้งในตอนเริ่มงานและจบงาน สำหรับพิธีกรในห้องบรรยายมีหน้าที่คอยเกริ่นเข้าเซชชั่น แนะนำตัว Speaker แนะนำหัวข้อนั้น ๆ และสรุปเนื้อหาคร่าว ๆ หลังจบการบรรยายตามความเหมาะสม ทั้งนี้พิธีกรประจำงาน จะสลับเข้าไปเป็นพิธีกรประจำห้องในช่วงที่ไม่มีงาน หากสามารถสื่อสารภาษาอังกฤษได้จะดีมาก แต่หากสะดวกเพียงภาษาไทย ก็ไม่ต้องกังวลไป สามารถสมัครได้
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                คุณจะได้รับฟังการบรรยายอย่างเต็มที่ในช่วงระหว่างบรรยาย เพียงจับประเด็นหัวข้อที่บรรยายอยู่ตามความเหมาะสมเพื่อใช้สรุปในตอนจบ (หากคุณต้องการ) คุณควรทำการบ้านก่อนเริ่มการบรรยายเพื่อเข้าใจหัวข้อและ Speaker ที่คุณต้องแนะนำตัว ทั้งนี้พิธีกรสามารถแลกเปลี่ยนเซชชั่นกันได้ตามความสนใจ เพื่อให้ได้ฟังหัวข้อที่ต้องการหรือสะดวกที่สุด สำหรับผู้ที่สนใจเป็นพิธีกรในพิธีเปิดและพิธีปิด จะได้มีโอกาสในการดูแลผู้เข้าร่วม ซึ่งจะเป็นประสบการณ์ที่ดีของการเข้าร่วม WordCamp Bangkok
              </p>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">Speaker helper</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                เราต้องการผู้คอยดูแล Speaker โดยผู้ทำหน้าที่นี้ จะได้รับมอบหมายให้ดูแล Speaker  แต่ละช่วงเวลาของแต่ละห้อง ประสานงาน ติดต่อ ให้ความช่วยเหลือ Speaker ของคุณ เช็คชื่อ และแจ้งแก่ Organizer ว่ามีปัญหาใดหรือไม่ ซึ่งคุณไม่จำเป็นต้องอยู่ในห้องที่คุณได้รับมอบหมายเสมอไป หากคุณมีความรับผิดชอบและไม่มีปัญหาใด ๆ
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                คุณจะได้มีปฏิสัมพันธ์ที่ดีกับวิทยากร ได้ทำงานใกล้ชิดร่วมกับ Organizer ได้รับหน้าที่สำคัญในการเป็นผู้ตรวจสอบด่านแรกว่าจะมีปัญหาเกิดขึ้นหรือไม่ มีอิสระในการทำงานโดยเฉพาะอย่างยิ่งหากวิทยากรของคุณไม่เกิดปัญหาใด
              </p>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">Tribe meetup staff</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                สำหรับผู้ที่สนใจในการเป็นผู้สร้างความสัมพันธ์ระหว่างผู้ร่วมงาน มีประสบการณ์ในการสร้าง community อยากพาทุกคนได้มาพูดคุยระหว่างเซสชั่นที่อาจจะว่างอยู่ มาเป็นผู้จัด Tribe meetup สิ! คุณจะได้ออกแบบกิจกรรมสั้น ๆ เพื่อให้ผู้ร่วมงานได้มีปฏิสัมพันธ์และรู้จักกัน เพื่อให้ community ของเราเข้มแข็งมากยิ่งขึ้น
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                คุณจะรับประสบการณ์ในการออกแบบกิจกรรมร่วมกับ Organizer คุณจะได้เป็นผู้นำในการสร้างความสัมพันธ์ต่าง ๆ มีอิสระในการเดินไปฟังการบรรยายในช่วงที่ว่าง หากคุณเป็นผู้ชื่นชอบในการสร้างกิจกรรมต่าง ๆ ตำแหน่งนี้เหมาะกับคุณอย่างมาก
              </p>
            </li>
          </ul>
        </div>
        {/* Section กำหนดการ Volunteer */}
        <div className="space-y-4 mt-12">
          <h2 className="text-3xl font-bold">กำหนดการสำหรับ <span className="text-4xl font-extrabold">Volunteer</span></h2>
          <ul className="list-disc text-lg list-inside space-y-2">
            <li>
              ระยะเวลาการรับสมัคร <span className="font-semibold">ตั้งแต่วันนี้ – 25 ตุลาคม 2568</span>
            </li>
            <li>
              ประกาศรายชื่อ Volunteer และตำแหน่งงาน – <span className="font-semibold">ภายในวันที่ 15 พฤศจิกายน 2568</span>
            </li>
            <li>
              Volunteer Orientation Day – <span className="italic">ประกาศภายหลัง</span>
            </li>
          </ul>
        </div>
        {/* Divider Line */}
        <div className="flex justify-center mt-6 -ml-[810px]">
          <hr className="border-t-2 border-white w-21" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          WordCamp Bangkok 2025 – Call for Volunteers
        </h1>
        <div className="max-w-4xl text-lg w-full mb-10">
          <p className="mb-1">
            <span className="">WordCamp Bangkok is back in 2025!</span>
          </p>
          <p className="mb-4 leading-relaxed">
            This year, you will once again experience friendship, collaboration,
            and the joy of building a strong WordPress community together.
          </p>
          <p className="leading-relaxed">
            As always, we are opening volunteer applications to welcome attendees
            and support the event. Volunteers are an important part of making
            WordCamp Bangkok successful.
          </p>
        </div>
        {/* Section Volunteer Benefits */}
        <div className="space-y-4 mt-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold">Volunteer Benefits</h2>
          <p className="text-lg">
            As a WordCamp Bangkok Volunteer, you will receive:
          </p>
          <ul className="list-disc text-lg list-inside space-y-2">
            <li>Lunch on every event day</li>
            <li>An official event T-shirt</li>
            <li>
              Access to the <span className="font-semibold">exclusive Welcome Dinner</span> with Organizers and Speakers
            </li>
            <li>
              Entry to the <span className="font-semibold">After Party</span> with all attendees
            </li>
            <li>
              Opportunities to join exclusive activities, share experiences, exchange knowledge,
              and connect with the WordPress community
            </li>
          </ul>
          {/* Divider line */}
          <div className="flex justify-center mt-14 mb-14">
            <hr className="border-t border-gray-400 w-1/4" />
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold">
          Volunteer Roles (7 positions available)
        </h1>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">1. Registration & Food</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                Be the first friendly face our attendees meet! Help with check-in, give basic event information, and support lunch service so everything runs smoothly.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                You will meet and talk with many attendees, have clear working shifts, and still get proper breaks. Perfect for friendly people who enjoy exploring, chatting, and problem-solving with other teams.
              </p>
            </li>
          </ul>
          {/* Divider line */}
          <div className="flex justify-center mt-14 mb-14">
            <hr className="border-t border-gray-400 w-1/4" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">2. Conference Room Leader</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                For those with leadership skills, this role is about leading one conference room. You will coordinate with Organizers and Runners to keep the sessions in your room smooth and on time.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                You will take the role of leader, coordinator, and quick problem-solver. You’ll meet everyone involved in the sessions and may design your own working style to achieve success.
              </p>
            </li>
          </ul>
          {/* Divider line */}
          <div className="flex justify-center mt-14 mb-14">
            <hr className="border-t border-gray-400 w-1/4" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">3. Social Media</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                Be our live updater! Share key points and highlights from the talks directly on WordCamp’s social media.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                You will practice writing, summarizing, and communication skills, while also enjoying the full talks. Simply put: you get to listen and work at the same time!
              </p>
            </li>
          </ul>
          {/* Divider line */}
          <div className="flex justify-center mt-14 mb-14">
            <hr className="border-t border-gray-400 w-1/4" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">4. Photos</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                Capture the atmosphere of WordCamp Bangkok 2025! Take photos of talks, activities, and attendees to record great memories. You may also help attendees take personal photos.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                You’ll have freedom to walk around different rooms, while also being responsible for covering one assigned room. You are both the “room photographer” and a roaming storyteller.
              </p>
            </li>
          </ul>
          {/* Divider line */}
          <div className="flex justify-center mt-14 mb-14">
            <hr className="border-t border-gray-400 w-1/4" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">5. Emcee</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                Be the host! We have two types: overall event emcees (opening/closing) and session emcees (introducing speakers, guiding sessions, and summarizing talks). English is a plus, but Thai-only speakers are also welcome.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                You will listen closely to talks, prepare introductions, and summarize key points if needed. Emcees can switch sessions with each other to attend topics they prefer. Those hosting the opening and closing ceremonies will also get the chance to welcome and inspire all attendees.
              </p>
            </li>
          </ul>
          {/* Divider line */}
          <div className="flex justify-center mt-14 mb-14">
            <hr className="border-t border-gray-400 w-1/4" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">6. Speaker Helper</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                Assist our speakers! You will be assigned to specific speakers, helping them with check-in, coordination, and support. Report to the Organizers if any issues happen.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                You will work closely with speakers, build strong connections with Organizers, and act as the first point of support. A great chance to interact directly with speakers.
              </p>
            </li>
          </ul>
          {/* Divider line */}
          <div className="flex justify-center mt-14 mb-14">
            <hr className="border-t border-gray-400 w-1/4" />
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-4xl font-extrabold mt-6">7. Tribe Meetup Staff</h3>
          <ul className="list-none text-lg space-y-3">
            <li className="flex items-start">
              <span className="mr-2">🙋</span>
              <p>
                Help strengthen our community by organizing small meetups between sessions. Design short activities to encourage attendees to connect and get to know each other.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✅</span>
              <p>
                You will gain experience in activity design, community building, and leadership. You’ll also have freedom to attend talks when free. Perfect for those who enjoy creating fun and meaningful connections.
              </p>
            </li>
          </ul>
          {/* Divider line */}
          <div className="flex justify-center mt-14 mb-14">
            <hr className="border-t border-gray-400 w-1/4" />
          </div>
        </div>
        <div className="space-y-4 mt-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold">Volunteer recruitment schedule</h2>
          <ul className="list-disc text-lg list-inside space-y-2">
            <li>
              Open for registration – <span className="font-semibold">now until 25 October 2025</span>
            </li>
            <li>
              Announcement volunteer list and assignment area –  <span className="font-semibold">within 15 November 2025</span>
            </li>
            <li>
              Volunteer Orientation Day –  <span className="font-semibold">TBD</span>
            </li>
          </ul>
          {/* Divider line */}
          <div className="flex justify-center mt-14 mb-14">
            <hr className="border-t border-gray-400 w-1/4" />
          </div>
        </div>
        <ul className="list-none text-lg space-y-3">
          <li className="flex items-start">
            <span className="mr-2">👉</span>
            <p>
              ถ้าคุณหลงรัก WordPress, ชุมชนคนรัก WordPress และการทำงานเป็นทีม มาเข้าร่วมเป็น <span className="font-semibold">อาสาสมัคร (Volunteer)</span> กับ <span className="font-semibold">WordCamp Bangkok 2025</span> และมาช่วยกันสร้างงานนี้ให้น่าจดจำกันเถอะ!
            </p>
          </li>
          <li className="flex items-start">
            <span className="mr-2">👉</span>
            <p>
              If you love WordPress, community, and teamwork, come join us as a <span className="font-semibold">Volunteer at WordCamp Bangkok 2025</span> and make this event unforgettable!
            </p>
          </li>
        </ul>
        {/* Volunteer Application Form */}
        <form className="space-y-6 rounded-xl p-6">
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

          {/* Skills / Interests / Experience */}
          <div>
            <label className="block text-lg font-semibold mb-1">
              Skills / Interests / Experience{" "}
              <span>
                (not necessary to volunteer)
              </span>{" "}
              <span className="text-sm text-gray-500">(required)</span>
            </label>
            <textarea
              required
              rows="4"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            ></textarea>
          </div>

          {/* Number of Hours Available */}
          <div>
            <label className="block text-lg font-semibold mb-1">
              Number of Hours Available <span className="text-red-500">(required)</span>
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
              Is this the first time you have volunteered at a WordPress event?
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
              <label className="flex items-center">
                <input
                  type="radio"
                  name="firstTime"
                  value="unsure"
                  className="mr-2 accent-black"
                  defaultChecked
                />
                Unsure
              </label>
            </div>
          </div>

          {/* Questions / Comments */}
          <div className="mt-6 text-lg">
            <label className="block font-semibold mb-1">Questions / Comments</label>
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
        <div className="flex justify-center mt-6">
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
    </div>
  );
}
