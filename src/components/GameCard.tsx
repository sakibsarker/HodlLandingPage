import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GameCard() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
    <div className="min-h-screen bg-gradient-to-br from-[#0D0827] to-[#0D0827]  bg-[#150B2E] p-6 md:p-12">
      <div className="max-w-[1400px] mx-auto space-y-12">
        {/* Live Gaming Section */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">LIVE GAMING</h2>
            <Link
              href="#"
              className="text-sm text-white hover:text-white transition-colors px-4 py-1 rounded-sm bg-[#1E1736]"
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
                <motion.img
                  src={provider.image}
                  alt={provider.name}
                  width={300}
                  height={300}
                  className="w-full object-cover rounded-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {/* <Image
                  src={provider.image}
                  alt={provider.name}
                  width={300}
                  height={300}
                  className="w-full object-cover rounded-sm"
                /> */}

                <div className="mt-2">
                  <h3 className="text-white text-lg font-medium">
                    {provider.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Digital Casino Section */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">DIGITAL CASINO</h2>
            <Link
              href="#"
              className="text-sm text-white hover:text-white transition-colors px-4 py-1 rounded-sm bg-[#1E1736]"
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
                <motion.img
                  src={provider.image}
                  alt={provider.name}
                  width={225}
                  height={300}
                  className="w-full  object-cover rounded-sm"
                  whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                  transition={{ type: "spring", stiffness: 300 }}
                />
                {/* <Image
                  src={provider.image}
                  alt={provider.name}
                  width={225}
                  height={300}
                  className="w-full  object-cover rounded-sm"
                /> */}

                <div className="mt-2">
                  <h3 className="text-white text-lg font-medium">
                    {provider.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}