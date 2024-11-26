import Image from "next/image";

export default function HeroSection() {
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

  return (
    <div className="min-h-screen bg-[#0A0520] overflow-hidden">
      {/* Navigation Icons */}
      <div className="w-full bg-[#110828]/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {navImages.map((imageSrc, index) => (
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
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/bannerimg.png"
            alt="Crypto Background"
            fill
            className="object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0520]/80 to-[#0A0520]" />
        </div>

        <div className="relative z-10 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight flex items-center justify-center gap-4">
            YOU CAN
            <Image
              src="/images/hodllogo.png"
              alt="logo"
              height={250}
              width={250}
              className="object-cover"
            />
            HERE
          </h1>

          <p className="text-xl text-gray-300">
            Welcome hodlers to your supreme crypto entertainment & gaming.
          </p>

          <button className="px-8 py-3 bg-[#4044ED] text-white rounded-full hover:bg-[#4044ED]/90 transition-colors duration-200 font-medium">
            Become a member
          </button>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-10 max-w-7xl mx-auto px-4 relative z-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index}>
              <div className="h-32 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt="bannerimage"
                  width={300}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
