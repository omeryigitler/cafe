import { motion } from "motion/react";
import cafeImg from "../assets/images/yeni-lab-1.png";

interface LocationItem {
  id: string;
  name: string;
  address: string;
  hours: string;
  lat: number;
  lng: number;
  googleMapsUrl: string;
  appleMapsUrl: string;
}

const locations: LocationItem[] = [
  {
    id: "valletta",
    name: "Valletta Flagship Lab",
    address: "Republic Street 45, Valletta, Malta",
    hours: "06:30 AM - 19:00 PM",
    lat: 35.8989,
    lng: 14.5126,
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Republic+Street+45,+Valletta,+Malta",
    appleMapsUrl: "https://maps.apple.com/?daddr=Republic+Street+45,+Valletta,+Malta",
  },
  {
    id: "sliema",
    name: "Sliema Promenade Kiosk",
    address: "Tower Road, Sliema, Malta",
    hours: "06:00 AM - 18:30 PM",
    lat: 35.9122,
    lng: 14.5028,
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Tower+Road,+Sliema,+Malta",
    appleMapsUrl: "https://maps.apple.com/?daddr=Tower+Road,+Sliema,+Malta",
  },
  {
    id: "spinola",
    name: "Spinola Bay Station",
    address: "Spinola Road, St. Julian's, Malta",
    hours: "07:00 AM - 20:00 PM",
    lat: 35.9189,
    lng: 14.4883,
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Spinola+Road,+St.+Julian%27s,+Malta",
    appleMapsUrl: "https://maps.apple.com/?daddr=Spinola+Road,+St.+Julian%27s,+Malta",
  },
];

export function Locations() {
  return (
    <section id="locations" className="bg-[#FBFBFB] py-20 lg:py-32 px-8 md:px-16 lg:px-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
        
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8E8E93] mb-4 block">Locations</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-[#1D1D1F] leading-none mb-8 uppercase">
              The <br /> Labs.
            </h2>
            <p className="text-[14px] leading-relaxed text-[#424245] mb-8 max-w-lg">
              Experience the extraction process firsthand. Designed for minimal distraction and maximum focus, our spaces are crafted for the early risers.
            </p>
          </div>
          
          <div className="space-y-4">
            {locations.map((loc) => (
              <div
                key={loc.id}
                onClick={() => window.open(loc.googleMapsUrl, "_blank")}
                className="group relative overflow-hidden rounded-[24px] shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer p-6 flex flex-col justify-center min-h-[90px]"
              >
                {/* Real Interactive Map as Clear Background */}
                <div className="absolute inset-0 w-full h-full bg-[#E5E3DF] overflow-hidden pointer-events-none">
                  <iframe
                    title={`Background Map of ${loc.name}`}
                    style={{ border: 0, pointerEvents: "none" }}
                    loading="lazy"
                    src={`https://maps.google.com/maps?q=${loc.lat},${loc.lng}&z=15&output=embed`}
                    className="absolute -top-3 -bottom-10 -left-2 -right-2 w-[calc(100%+16px)] h-[calc(100%+44px)] max-w-none transition-all duration-500 opacity-65 group-hover:opacity-100 contrast-100 group-hover:contrast-[1.1] saturate-[0.85] group-hover:saturate-[1.1]"
                  />
                  {/* Soft gradient background overlay for maximum typography legibility */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30 group-hover:from-white/80 group-hover:via-white/50 group-hover:to-transparent transition-all duration-300 pointer-events-none" />
                </div>

                {/* Card Content - Pure Title */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] drop-shadow-xs">{loc.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Clean Store Image aligned to match left column height */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full min-h-[400px] lg:min-h-0 relative rounded-[40px] overflow-hidden border border-black/5 shadow-md flex"
        >
          <img 
            src={cafeImg} 
            alt="Café Ö Co. Exterior" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        
      </div>
    </section>
  );
}
