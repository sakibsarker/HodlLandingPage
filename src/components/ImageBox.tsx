import Image from "next/image";
import Link from "next/link";

export default function ImageBox() {
  const liveGamingProviders = [
    { name: "EvolutionGaming", image: "/placeholder.svg?height=300&width=225" },
    { name: "SaGaming", image: "/placeholder.svg?height=300&width=225" },
    { name: "Sexy Gaming", image: "/placeholder.svg?height=300&width=225" },
    { name: "Ali bet", image: "/placeholder.svg?height=300&width=225" },
  ];

  const digitalCasinoProviders = [
    { name: "Pragmatic play", image: "/placeholder.svg?height=300&width=225" },
    { name: "Habanero", image: "/placeholder.svg?height=300&width=225" },
    { name: "TomHorn", image: "/placeholder.svg?height=300&width=225" },
    { name: "Ion Casino", image: "/placeholder.svg?height=300&width=225" },
    { name: "Green Dragon", image: "/placeholder.svg?height=300&width=225" },
  ];

  return (
    <div className="min-h-screen bg-[#0F0B1F] p-6 md:p-12">
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
                  width={225}
                  height={300}
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-lg font-medium">
                      {provider.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Digital Casino Section */}
        <section className="space-y-6">
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
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-lg font-medium">
                      {provider.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
