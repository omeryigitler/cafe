import { motion } from "motion/react";
import blackColdBrewImg from "../assets/images/black_cold_brew_1784775609272.jpg";
import oatMilkLatteImg from "../assets/images/oat_milk_latte_1784775623021.jpg";
import vanillaBeanLatteImg from "../assets/images/vanilla_bean_latte_1784775653420.jpg";

export function Products() {
  return (
    <section id="shop" className="bg-white py-32 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-extrabold tracking-tighter text-[#1D1D1F] mb-6 uppercase"
          >
            The Collection.
          </motion.h2>
          <p className="text-[14px] leading-relaxed text-[#424245] max-w-xl mx-auto">
            Our signature cold brews, available for nationwide delivery. Stock your fridge and never have a slow morning again.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Original Black", desc: "Pure, intense, smooth.", price: "$36 / 6-pack", image: blackColdBrewImg },
            { name: "Oat Milk Draft", desc: "Creamy, dairy-free.", price: "$42 / 6-pack", image: oatMilkLatteImg },
            { name: "Vanilla Bean", desc: "A touch of real vanilla.", price: "$42 / 6-pack", image: vanillaBeanLatteImg },
          ].map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#FBFBFB] border border-black/5 rounded-[32px] p-6 md:p-8 flex flex-col items-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
            >
              <div className="w-full h-56 md:h-64 mb-6 relative mix-blend-multiply flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[#1D1D1F] mb-2">{product.name}</h3>
              <p className="text-[13px] text-[#424245] mb-6 text-center">{product.desc}</p>
              <div className="mt-auto flex items-center justify-between w-full pt-2">
                <span className="font-medium text-[14px]">{product.price}</span>
                <button className="px-5 py-2.5 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:opacity-80 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
