import { motion, useScroll, useMotionValueEvent } from "motion/react";
import logoImg from "../assets/images/cafeoco-logo (x).png";
import { useState } from "react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav 
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: hidden ? 0 : 1, y: hidden ? -100 : 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 md:px-16 py-4 sm:py-6 md:py-10 ${hidden ? 'pointer-events-none' : ''}`}
    >
      <div className="flex items-center gap-2 text-[#1D1D1F]">
        <img 
          src={logoImg} 
          alt="CAFÉ Ö CO. Bean" 
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain" 
        />
        <span className="text-base sm:text-xl font-semibold tracking-tight">CAFÉ Ö CO.</span>
      </div>
      <div className="hidden md:flex items-center gap-12 text-[13px] font-medium tracking-wide uppercase opacity-60 text-[#1D1D1F]">
        <a href="#shop" className="hover:opacity-100 transition-opacity">Shop</a>
        <a href="#story" className="hover:opacity-100 transition-opacity">Our Story</a>
        <a href="#locations" className="hover:opacity-100 transition-opacity">Locations</a>
      </div>
      <a href="#shop" className="px-4 sm:px-6 py-2 sm:py-2.5 bg-black text-white text-[10px] sm:text-[12px] font-bold rounded-full tracking-widest uppercase hover:opacity-80 transition-opacity">
        Order Now
      </a>
    </motion.nav>
  );
}
