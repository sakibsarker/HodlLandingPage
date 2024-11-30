import Image from "next/image";
import { motion } from "framer-motion";

export default function CardComponents() {
  const fadeInVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  return (
    <div className="min-h-full bg-gradient-to-br from-[#0D0827] to-[#0D0827] p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Withdraw Section */}
        <motion.div
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="relative w-full md:w-[450px] h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/Group2085664289.png"
                width={450}
                height={450}
                alt="Phone with crypto icons"
                className="object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="space-y-6 max-w-xl">
              <div className="items-center ">
                <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                  <h1 className="text-white font-inter tracking-wide font-medium">
                    WELCOME
                  </h1>
                </div>

                <h2 className="text-5xl font-bold tracking-wider text-white my-5 uppercase">
                  Your new experience
                </h2>
                <p className="text-lg  tracking-wide font-inter text-white leading-snug ">
                  <span className="text-lg font-bold tracking-wide font-inter text-white">
                    We stand as your community,
                  </span>{" "}
                  your gateway to entertainment, and your bridge to the realm of
                  cryptocurrency. Your perceptions and wisdom are profoundly
                  valued, and we will work to commence this voyage in unison
                  with privacy and security!
                </p>
                <button className="bg-gradient-to-br mt-5 from-[#4044ED] via-[#570bd8] to-[#570bd8] hover:from-[#4044ED]/90 hover:via-[#570bd8]/90 hover:to-[#570bd8]/80 text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200">
                  Join now
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Deposit Section */}
        <motion.div
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-6 max-w-xl">
              <div>
                <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                  <h1 className="text-white font-inter tracking-wide font-medium">
                    NO KYC
                  </h1>
                </div>
                <h2 className="text-5xl font-bold tracking-wider text-white my-5 uppercase">
                  DEPOSIT
                </h2>

                <p className="text-lg  tracking-wide font-inter text-white leading-snug ">
                  <span className="text-lg font-bold tracking-wide font-inter text-white">
                    You can securely deposit
                  </span>{" "}
                  using the instant DEPOSIT button, accessing a variety of Layer
                  1 cryptocurrencies. With over 300 supported, all transaction
                  fees are fully covered and reimbursed.
                </p>
              </div>
              <button className="bg-gradient-to-br mt-5 from-[#4044ED] via-[#570bd8] to-[#570bd8] hover:from-[#4044ED]/90 hover:via-[#570bd8]/90 hover:to-[#570bd8]/80 text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200">
                Join now
              </button>
            </div>
            <div className="relative w-full md:w-[450px] h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/Group2085664286.png"
                width={450}
                height={450}
                alt="Crypto icon"
                className="object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Withdraw Section */}
        <motion.div
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
            <div className="relative w-full md:w-[450px] h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/Group2085664285.png"
                width={450}
                height={450}
                alt="Phone with crypto icons"
                className="object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="space-y-6 max-w-xl">
              <div>
                <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                  <h1 className="text-white font-inter tracking-wide font-medium">
                    NO KYC
                  </h1>
                </div>
                <h2 className="text-5xl font-bold tracking-wider text-white my-5 uppercase">
                  WITHDRAW INSTANTLY ANYTIME
                </h2>

                <p className="text-lg  tracking-wide font-inter text-white leading-snug ">
                  <span className="text-lg font-bold tracking-wide font-inter text-white">
                    Use the Payouts button to withdraw,
                  </span>{" "}
                  usually instant within 1 hour during business hours, or up to
                  24 hours. Choose from over 300 crypto coins. Transaction fees
                  are not covered.
                </p>
              </div>
              <button className="bg-gradient-to-br mt-5 from-[#4044ED] via-[#570bd8] to-[#570bd8] hover:from-[#4044ED]/90 hover:via-[#570bd8]/90 hover:to-[#570bd8]/80 text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200">
                Join now
              </button>
            </div>
          </div>
        </motion.div>
        {/* Deposit Section */}
        <motion.div
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-6 max-w-xl">
              <div>
                <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                  <h1 className="text-white font-inter tracking-wide font-medium">
                    SECURE
                  </h1>
                </div>
                <h2 className="text-5xl font-bold tracking-wider text-white my-5 uppercase">
                  A TRUSTED & SAFE EXPERIENCE
                </h2>

                <p className="text-lg  tracking-wide font-inter text-white leading-snug ">
                  <span className="text-lg font-bold tracking-wide font-inter text-white">
                    At hodlent,
                  </span>{" "}
                  our company&apos;s guiding principle is to establish trust and
                  security based on a free market ideology of open source.
                </p>
              </div>
              <button className="bg-gradient-to-br mt-5 from-[#4044ED] via-[#570bd8] to-[#570bd8] hover:from-[#4044ED]/90 hover:via-[#570bd8]/90 hover:to-[#570bd8]/80 text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200">
                Join now
              </button>
            </div>
            <div className="relative w-full md:w-[450px] h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/Group2085664287.png"
                width={450}
                height={450}
                alt="Crypto icon"
                className="object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
          </div>
        </motion.div>
        {/* Withdraw Section */}
        <motion.div
          className="relative bg-[#1E1736]/60 border-2 border-[#1E1736]/80 rounded-3xl p-8 md:p-12 overflow-hidden backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariant}
        >
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8">
            <div className="relative w-full md:w-[450px] h-[450px] flex justify-center items-center">
              <motion.img
                src="/images/Group2085664308.png"
                width={450}
                height={450}
                alt="Phone with crypto icons"
                className="object-contain"
                whileHover={{ scale: 1.1, rotate: 5 }} // Hover effect
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            <div className="space-y-6 max-w-xl">
              <div>
                <div className="inline-flex px-4 py-1 items-center justify-center w-auto rounded-xl bg-gradient-to-br from-[#2f274f] to-[#2f274f] hover:from-[#3B3466] hover:to-[#2E2746] transition-all duration-200 shadow-[0_0_15px_rgba(78,56,216,0.3)] hover:shadow-[0_0_20px_rgba(78,56,216,0.5)] border-2 border-[#4044ED] border-r-[#570bd8] border-b-[#570bd8]">
                  <h1 className="text-white font-inter tracking-wide font-medium">
                    REWARS
                  </h1>
                </div>

                <h2 className="text-5xl font-bold tracking-wider text-white my-5 uppercase">
                  10% cash Bonus
                </h2>

                <p className="text-lg  tracking-wide font-inter text-white leading-snug ">
                  <span className="text-lg font-bold tracking-wide font-inter text-white">
                    Receive 10% cash back on
                  </span>{" "}
                  your deposit, automatically credited to your balance. For
                  example, if you make a $10,000 deposit, your new balance will
                  be $11,000.
                </p>
              </div>
              <button className="bg-gradient-to-br mt-5 from-[#4044ED] via-[#570bd8] to-[#570bd8] hover:from-[#4044ED]/90 hover:via-[#570bd8]/90 hover:to-[#570bd8]/80 text-white rounded-xl px-8 py-3 text-lg font-inter tracking-wide font-medium transition-colors duration-200">
                Join now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
