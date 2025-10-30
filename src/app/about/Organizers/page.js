import Image from "next/image";

export const metadata = {
  title: "Organizers",
  description: "ทีมผู้จัดงาน WordCamp Bangkok 2025",
};

const organizers = [
  {
    name: "Aum Watcharaporn",
    role: "Lead Organizer",
    photo: "/images/organizers/aum.jpg",
    paragraphs: [
      `Aum Watcharaporn has been a dedicated member of the WordPress community for over a decade, focusing on its growth. 🌱 Since 2014, Aum has organized WordPress Meetups in Bangkok, bringing together enthusiasts and professionals to share knowledge. 🤝 Aum was the lead organizer for WordCamp Bangkok in 2017 and 2018 and contributed to WordCamp Asia 2023. 🎉`,
      `As a skilled developer, Aum creates a variety of WordPress solutions, using their expertise to provide tailored online experiences. 💻✨ With a passion for building, learning, and leading in both tech and the WordPress ecosystem, Aum loves bringing people together in the community. ❤️`,
    ],
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 text-white">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-center mb-16">Organizers</h1>

      {/* List */}
      <section className="space-y-12">
        {organizers.map((org) => (
          <OrganizerCard key={org.name} {...org} />
        ))}
      </section>
    </main>
  );
}

function OrganizerCard({ name, role, photo, paragraphs }) {
  return (
    <article className="grid md:grid-cols-[96px,1fr] gap-6 items-start">
      <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ">
        <Image src="/tiger-64.jpg" alt={name} fill className="object-cover" />
      </div>

      <div>
        <h2 className="text-4xl font-extrabold">{name}</h2>
        <p className="text-sm text-gray-600 mt-1">{role}</p>

        <div className="mt-4 space-y-4 text-lg leading-8">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  );
}