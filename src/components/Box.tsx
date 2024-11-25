import Image from "next/image";

export default function Box() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1333] to-[#2a1f4d] p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Deposit Section */}
        <div className="relative bg-[#1E1736]/60 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-6 max-w-xl">
              <div>
                <span className="inline-block bg-[#1a1627] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">
                  NO KYC
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">DEPOSIT</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  You can securely deposit using the instant DEPOSIT button,
                  accessing a variety of Layer 1 cryptocurrencies. With over 300
                  supported, all transaction fees are fully covered and
                  reimbursed.
                </p>
              </div>
              <button className="bg-[#4044ED] hover:bg-[#4044ED]/90 text-white rounded-lg px-8 py-3 text-lg font-semibold transition-colors duration-200">
                Join now
              </button>
            </div>
            <div className="relative w-full md:w-[450px] h-[450px]">
              <div className="grid grid-cols-4 gap-4 transform rotate-12">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-500/10 backdrop-blur-md"
                  >
                    <Image
                      src={`/placeholder.svg?height=80&width=80`}
                      width={80}
                      height={80}
                      alt="Crypto icon"
                      className="p-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Withdraw Section */}
        <div className="relative bg-[#1E1736]/60 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
            <div className="relative w-full md:w-[450px] h-[450px]">
              <Image
                src="/placeholder.svg?height=450&width=450"
                width={450}
                height={450}
                alt="Phone with crypto icons"
                className="object-contain"
              />
            </div>
            <div className="space-y-6 max-w-xl">
              <div>
                <span className="inline-block bg-[#1a1627] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">
                  QUICK PAYOUTS
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">
                  WITHDRAW INSTANTLY ANYTIME
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Use the Payouts button to withdraw, usually instant within 1
                  hour during business hours, or up to 24 hours. Choose from
                  over 300 crypto coins. Transaction fees are not covered.
                </p>
              </div>
              <button className="bg-[#4044ED] hover:bg-[#4044ED]/90 text-white rounded-lg px-8 py-3 text-lg font-semibold transition-colors duration-200">
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
