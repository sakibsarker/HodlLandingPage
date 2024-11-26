import Image from "next/image";
import Link from "next/link";

export default function ImageBox() {
  const liveGamingProviders = [
    { name: "EvolutionGaming", image: "/images/Maskgroup.png" },
    { name: "SaGaming", image: "/images/Maskgroup2.png" },
    { name: "Sexy Gaming", image: "/images/Maskgroup3.png" },
    { name: "Ali bet", image: "/images/Maskgroup4.png" },
  ];

  const digitalCasinoProviders = [
    { name: "Pragmatic play", image: "/images/img1.png" },
    { name: "Habanero", image: "/images/img2.png" },
    { name: "TomHorn", image: "/images/img3.png" },
    { name: "Ion Casino", image: "/images/img4.png" },
    { name: "Green Dragon", image: "/images/img5.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1333] to-[#2a1f4d] p-6 md:p-12">
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Live Gaming Section */}
        <section className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">LIVE GAMING</h2>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-1 rounded-full bg-[#1E1736]/60"
            >
              All Games
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {liveGamingProviders.map((provider) => (
              <div
                key={provider.name}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={provider.image}
                  alt={provider.name}
                  width={300}
                  height={300}
                  className="w-full object-cover rounded-sm"
                />

                <div className="mt-2">
                  <h3 className="text-white text-lg font-medium">
                    {provider.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Digital Casino Section */}
        <section className="space-y-6 ">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">DIGITAL CASINO</h2>
            <Link
              href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors px-4 py-1 rounded-full bg-[#1E1736]/60"
            >
              All Games
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {digitalCasinoProviders.map((provider) => (
              <div
                key={provider.name}
                className="group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <Image
                  src={provider.image}
                  alt={provider.name}
                  width={225}
                  height={300}
                  className="w-full  object-cover rounded-sm"
                />

                <div className="mt-2">
                  <h3 className="text-white text-lg font-medium">
                    {provider.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
