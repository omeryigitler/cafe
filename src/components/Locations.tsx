import { motion } from "motion/react";
import cafeImg from "../assets/images/yeni-lab.png.png";

export function Locations() {
  return (
    <section id="locations" className="bg-[#FBFBFB] py-20 lg:py-32 px-8 md:px-16 lg:px-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full order-2 lg:order-1 relative aspect-square lg:aspect-[4/3] rounded-[40px] overflow-hidden border border-black/5"
        >
          <img 
            src={cafeImg} 
            alt="Café Ö Co. Exterior" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 flex flex-col justify-center"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E8E93] mb-4 block">Locations</span>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-[#1D1D1F] leading-none mb-8 uppercase">
            The <br /> Labs.
          </h2>
          <p className="text-[14px] leading-relaxed text-[#424245] mb-8 max-w-lg">
            Experience the extraction process firsthand. Designed for minimal distraction and maximum focus, our spaces are crafted for the early risers.
          </p>
          
          <div className="space-y-6">
            <div className="border-b border-black/5 pb-6">
              <h3 className="text-[16px] font-semibold tracking-tight text-[#1D1D1F] mb-1">Flagship Station</h3>
              <p className="text-[13px] text-[#8E8E93] mb-2">100 Performance Ave, District 1</p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-black/40">05:00 AM - 15:00 PM</p>
            </div>
            <div className="border-b border-black/5 pb-6">
              <h3 className="text-[16px] font-semibold tracking-tight text-[#1D1D1F] mb-1">Runners Kiosk</h3>
              <p className="text-[13px] text-[#8E8E93] mb-2">Central Park Entrance</p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-black/40">06:00 AM - 12:00 PM</p>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
