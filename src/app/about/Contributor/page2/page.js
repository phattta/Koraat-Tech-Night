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
      
      {/* what */}
      <section id="what" className="mt-6 space-y-4 scroll-mt-24">
        <h2 className="text-4xl font-extrabold">What’s Contributor Day?</h2>
        <p>
            Contributor Day are for everyone, regardless your experience level with WordPress.
        </p>
        <p className="text-lg">
          Contributor Day are for everyone, regardless your experience level with WordPress <strong>Saturday 13th of December</strong> ที่{" "}
          <strong>Chulalongkorn University Alumni Association.</strong> It really doesn’t matter what your skill level with WordPress is, and you don’t need to be a developer or coder to be involved. There will be plenty of people on hand to help you get started, and there are a number of areas where you can make a difference.
        </p>
      </section>

      {/* facts */}
      <section className="mt-8 scroll-mt-24">
        <dl className="space-y-6">
          <div id="date">
            <dt className="text-3xl font-extrabold mb-1">Date</dt>
            <dd className="text-lg">Saturday, 13th December 2025</dd>
          </div>

          <div id="venue" className="scroll-mt-24">
            <dt className="text-3xl font-extrabold mb-1">Venue</dt>
            <dd className="text-lg">Chulalongkorn University Alumni Association</dd>
          </div>
        </dl>
      </section>

      {/* teams */}
      <section id="teams" className="mt-7 scroll-mt-24">
        <h3 className="text-3xl font-extrabold mb-2">Teams</h3>
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
          Any question about the <span className="font-extrabold">Contributor Day</span>
        </h3>

        <p className="text-lg">
          Drop your question at the{" "}
          <Link href="/contact" className="text-blue-500 hover:text-blue-700 underline hover:opacity-80">
            Contact form
          </Link>{" "}
          or tweet to us{" "}
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