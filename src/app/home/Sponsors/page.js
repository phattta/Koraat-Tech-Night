import React from "react";
import Image from "next/image";

export default function VolunteersPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f5ef] px-2 sm:px-6">
      <div className="rounded-2xl p-2 sm:p-6 md:p-10 max-w-6xl w-full">
        <Image
          src="/Call-for-Sponsors.png"
          alt="Call for Volunteers"
          width={1200}
          height={942}
          className="rounded-3xl w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
