import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSectiontwo() {
  const navImages = [
    "/images/Symbol.png",
    "/images/Symbol1.png",
    "/images/Symbol2.png",
    "/images/Symbol4.png",
    "/images/Symbol5.png",
    "/images/Symbol6.png",
    "/images/Symbol7.png",
    "/images/Symbol8.png",
    "/images/Symbol9.png",
    "/images/Symbol10.png",
    "/images/Symbol11.png",
    "/images/Symbol12.png",
    "/images/Symbol13.png",
    "/images/Symbol14.png",
    "/images/Symbol15.png",
    "/images/Symbol16.png",
    "/images/Symbol17.png",
    "/images/Symbol18.png",
    "/images/Symbol19.png",
    "/images/Symbol20.png",
    "/images/Symbol21.png",
    "/images/Symbol22.png",
    "/images/Symbol23.png",
  ];

  const features = [
    {
      icon: "/images/Group2085663741.png",
    },
    {
      icon: "/images/Group2085663746.png",
    },
    {
      icon: "/images/Group2085663743.png",
    },
    {
      icon: "/images/Group2085663745.png",
    },
  ];

  const loopedImages = [...navImages, ...navImages, ...navImages, ...navImages];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Navigation Icons */}
      <div className="w-full p-2 bg-[#110828]/80 backdrop-blur-sm border-b border-white/5">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }} // Adjust "-50%" based on content
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20, // Adjust to control speed
              ease: "linear",
            }}
          >
            {loopedImages.map((imageSrc, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-10 h-10 rounded-lg shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer"
              >
                <Image
                  src={imageSrc}
                  alt={`Navigation Icon ${index + 1}`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bannerimg.png"
            alt="Crypto Background"
            fill
            className="object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-b " />
        </div>

        <div className="relative z-10 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight flex items-center justify-center gap-4">
            YOU CAN
            <motion.div
              animate={{ rotateY: [0, 180, 360] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Image
                src="/images/hodllogo.png"
                alt="logo"
                height={250}
                width={250}
                className="object-cover"
              />
            </motion.div>
            HERE
          </h1>

          <p className="text-xl text-gray-300">
            Welcome hodlers to your supreme crypto entertainment & gaming.
          </p>
          <button className="relative group">
            <div className="inline-flex px-9 py-4 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
              <h1
                className="text-white font-medium "
                style={{
                  textShadow:
                    "0 0 12px #4044ED, 0 0 20px purple, 0 0 25px #4044ED, 0 0 30px purple",
                }}
              >
                Become a member
              </h1>
            </div>
          </button>
        </div>
      </div>

      {/* Feature Cards */}

      <div className=" max-w-7xl mx-auto px-4 relative mb-[30%]">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index}>
              <motion.div
                key={index}
                className={`absolute `}
                style={{
                  left: `${5 + index * 22}%`,
                  zIndex: index,
                }}
                initial={{ opacity: 0, y: 20, rotateY: -30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
              >
                <Image
                  src={feature.icon}
                  alt="bannerimage"
                  width={350}
                  height={300}
                  className="object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
