import Image from "next/image";
import {
  FaShoppingCart,
  FaGamepad,
  FaReddit,
  FaEnvelope,
  FaBlogger,
  FaSpotify,
  FaDollarSign,
  FaTwitter,
  FaBitcoin,
  FaEthereum,
  FaLock,
  FaTrophy,
  FaUserShield,
  FaGem,
  FaChartLine,
  FaCrown,
  FaDice,
  FaCoins,
} from "react-icons/fa";

export default function HeroSection() {
  const navIcons = [
    { icon: FaGamepad, color: "bg-purple-600" },
    { icon: FaShoppingCart, color: "bg-red-500" },
    { icon: FaReddit, color: "bg-orange-500" },
    { icon: FaEnvelope, color: "bg-yellow-500" },
    { icon: FaBlogger, color: "bg-blue-500" },
    { icon: FaSpotify, color: "bg-green-500" },
    { icon: FaDollarSign, color: "bg-indigo-500" },
    { icon: FaTwitter, color: "bg-blue-400" },
    { icon: FaBitcoin, color: "bg-orange-400" },
    { icon: FaEthereum, color: "bg-purple-400" },
    { icon: FaLock, color: "bg-gray-500" },
    { icon: FaTrophy, color: "bg-yellow-400" },
    { icon: FaUserShield, color: "bg-green-400" },
    { icon: FaGem, color: "bg-pink-400" },
    { icon: FaChartLine, color: "bg-blue-300" },
    { icon: FaCrown, color: "bg-yellow-300" },
    { icon: FaDice, color: "bg-red-400" },
    { icon: FaCoins, color: "bg-yellow-500" },
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
            {navIcons.map((item, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-10 h-10 ${item.color} rounded-lg shadow-lg hover:scale-110 transition-transform duration-200 cursor-pointer flex items-center justify-center`}
              >
                <item.icon className="w-5 h-5 text-white" />
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
