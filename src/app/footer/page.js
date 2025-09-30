import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm text-gray-300 py-10 px-6 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold">
            KORAT <span className="text-orange-500">TECH NIGHT</span>
          </h2>
          <ul className="mt-4 space-y-2 text-md">
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-orange-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              30 August 2025, 17:00–20:30
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-orange-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Yujou izakaya, Nakhonratchasima
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-orange-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              info@korattechnight.com
            </li>
          </ul>
        </div>

        {/* WordCamp Info */}
        <div className="flex flex-col h-full ml-[40px]">
          <h3 className="text-2xl font-extrabold mb-4">WordCamp Info</h3>
          <ul className="space-y-2 text-md">
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Tickets</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Location</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Sponsors</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Individual Sponsors</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Contact</Link></li>
          </ul>
        </div>

        {/* General Info */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-extrabold mb-4">General Info</h3>
          <ul className="space-y-2 text-md">
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">What is WordCamp?</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">What is Contributor Day?</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Agreement among WordCamp Organizers, Speakers, Sponsors, and Volunteers</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Organizers</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Contact</Link></li>
          </ul>
        </div>

        {/* Attendee Info */}
        <div className="flex flex-col h-full">
          <h3 className="text-2xl font-extrabold mb-4">Attendee Info</h3>
          <ul className="space-y-2 text-md">
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Tickets</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Location</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Code of Conduct</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Ticket Invoice Request</Link></li>
            <li><Link href="#" className="hover:text-cyan-500 hover:underline hover:decoration-white">Ticket Refund Request</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}