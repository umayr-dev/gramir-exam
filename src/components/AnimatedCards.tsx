import { motion } from 'framer-motion';

export default function AnimatedCards() {
  return (
    <div className="relative w-[370px] h-[230px]">
      {/* Orqa (eng katta) kartochka */}
      <motion.div
        className="absolute left-[20px] top-[20px] w-[260px] h-[150px] rounded-2xl bg-white bg-opacity-10 shadow-2xl backdrop-blur-md"
        style={{ zIndex: 1, rotate: '-4deg' }}
        animate={{ y: [0, -6, 0], x: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      >
        <div className="w-full h-full flex flex-col justify-center pl-6">
          <div className="w-10 h-10 rounded-xl bg-yellow-400/90 mb-2" />
          <div className="w-32 h-3 rounded bg-white/40 mb-1" />
          <div className="w-24 h-3 rounded bg-white/20" />
        </div>
      </motion.div>
      {/* O‘rta (eng old) kartochka */}
      <motion.div
        className="absolute left-[70px] top-[0px] w-[270px] h-[160px] rounded-2xl bg-white bg-opacity-20 shadow-2xl backdrop-blur-lg"
        style={{ zIndex: 2, rotate: '6deg' }}
        animate={{ y: [0, 8, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      >
        <div className="w-full h-full flex flex-col justify-center pl-8">
          <div className="w-10 h-10 rounded-xl bg-cyan-400/90 mb-2" />
          <div className="w-36 h-3 rounded bg-white/50 mb-1" />
          <div className="w-28 h-3 rounded bg-white/30" />
        </div>
      </motion.div>
      {/* Pastki (kichik) kartochka */}
      <motion.div
        className="absolute left-0 top-[110px] w-[200px] h-[100px] rounded-2xl bg-white bg-opacity-10 shadow-lg backdrop-blur-md"
        style={{ zIndex: 3, rotate: '-12deg' }}
        animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      >
        <div className="w-full h-full flex flex-col justify-center pl-4">
          <div className="w-8 h-8 rounded-lg bg-pink-400/90 mb-2" />
          <div className="w-20 h-2 rounded bg-white/30 mb-1" />
          <div className="w-16 h-2 rounded bg-white/20" />
        </div>
      </motion.div>
    </div>
  );
} 