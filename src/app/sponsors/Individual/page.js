import Image from "next/image";

const sponsors = [
  {
    name: "Da Chakrapan",
    img: "/sponsors/da.jpg",
    links: [],
  },
  {
    name: "Ellen Bauer",
    img: "/sponsors/ellen.jpg",
    links: [
      { label: "@ellenbauer", url: "https://twitter.com/ellenbauer" },
      { label: "elmastudio.de/en", url: "https://elmastudio.de/en" },
    ],
  },
  {
    name: "Jon (Kenshino)",
    img: "/sponsors/jon.jpg",
    links: [],
  },
  {
    name: "Louis Gan",
    img: "/sponsors/louis.jpg",
    links: [
      { label: "@louisgan_my", url: "https://twitter.com/louisgan_my" },
      { label: "appfromlab.com", url: "https://appfromlab.com" },
    ],
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-5xl font-extrabold text-center mb-12">
        Individual Sponsors
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sponsors.map((s, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4 overflow-hidden rounded-full bg-gray-200">
              <Image
                src={s.img}
                alt={s.name}
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <p className="font-medium">{s.name}</p>
            <div className="flex flex-col space-y-1 text-sm text-blue-600">
              {s.links.map((link, j) => (
                <a
                  key={j}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}