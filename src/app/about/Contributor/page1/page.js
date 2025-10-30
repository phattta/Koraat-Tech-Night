// app/about/what-is-contributor-day/page.tsx
import React from "react";
import Link from "next/link";

export const metadata = {
  title: "What is Contributor Day?",
  description: "ทำความรู้จักกิจกรรม Contributor Day ของชุมชน WordPress",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 leading-8 text-white">
      <h1 className="text-5xl font-extrabold text-center mb-8">
        What is Contributor Day?
      </h1>

      {/* intro */}
      <section className="text-lg space-y-4">
        <p>
          WordPress เป็น CMS ยอดนิยม ที่มีอัตราการใช้งานเติบโตขึ้นเรื่อย ๆ ปัจจุบันมีเว็บไซต์ที่ใช้ WordPress คิดเป็น 32% ของเว็บทั่วโลก ซึ่งความเติบโตและการพัฒนานี้คงจะเป็นไปได้ยาก หากไม่มี Contributor ที่อยู่ในชุมชนของ WordPress ที่คอยให้ความสนับสนุน
        </p>
      </section>

      {/* what */}
      <section id="what" className="mt-6 space-y-4 scroll-mt-24">
        <h2 className="text-4xl font-extrabold">Contributor Day คืออะไร?</h2>
        <p className="text-lg">
          Contributor Day เป็นวันที่เรามารวมตัวกันทำงาน ทำสิ่งที่เป็นประโยชน์ให้กับ WordPress ทุกคนสามารถมีส่วนร่วมได้ ไม่ว่าจะเป็นนักพัฒนา นักออกแบบ หรือผู้ใช้งาน ไม่มีข้อจำกัดเรื่องของความถนัด ระดับความสามารถ หรือระดับความรู้เกี่ยวกับ WordPress งานนี้จะมีขึ้น<strong>วันเสาร์ที่ 13 ธันวาคม 2568</strong> ที่{" "}
          <strong>สมาคมนิสิตเก่าจุฬาลงกรณ์มหาวิทยาลัย</strong>
        </p>
        <p className="text-lg">
          หากคุณไม่เคยมีส่วนร่วมกับชุมชนมาก่อน … ได้เริ่มลงมือทำงานร่วมกันจริง ๆ ตลอดทั้งวัน
        </p>
      </section>

      {/* facts */}
      <section className="mt-8 scroll-mt-24">
        <dl className="space-y-6">
          <div id="date">
            <dt className="text-3xl font-extrabold mb-1">วันที่</dt>
            <dd className="text-lg">วันเสาร์ที่ 13 ธันวาคม 2568</dd>
          </div>

          <div id="venue" className="scroll-mt-24">
            <dt className="text-3xl font-extrabold mb-1">สถานที่</dt>
            <dd className="text-lg">สมาคมนิสิตเก่าจุฬาลงกรณ์มหาวิทยาลัย</dd>
          </div>
        </dl>
      </section>

      {/* teams */}
      <section id="teams" className="mt-7 scroll-mt-24">
        <h3 className="text-3xl font-extrabold mb-2">ทีม</h3>
        <ul className="text-lg list-disc pl-6 space-y-1">
          <li>Accessibility</li>
          <li>Community</li>
          <li>Core</li>
          <li>Design</li>
          <li>Documentation</li>
          <li>Meta</li>
          <li>Plugins/Themes</li>
          <li>Polyglots</li>
          <li>Support</li>
        </ul>
      </section>

      {/* contact (เป็น sibling แยก section) */}
      <section id="contact" className="mt-6">
        <h3 className="text-3xl font-extrabold mb-2">
          หากมีคำถามเกี่ยวกับ <span className="font-extrabold">Contributor Day</span>
        </h3>

        <p className="text-lg">
          สามารถฝากคำถามได้ที่{" "}
          <Link href="/contact" className="underline hover:opacity-80 text-blue-500 hover:text-blue-700">
            แบบฟอร์มติดต่อ
          </Link>{" "}
          หรือทวิตถึงเราได้ที่{" "}
          <a
            href="https://twitter.com/WordCampBKK"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 text-blue-500 hover:text-blue-700"
          >
            @WordCampBKK
          </a>
        </p>
      </section>
    </main>
  );
}