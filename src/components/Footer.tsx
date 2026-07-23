import logoImg from "../assets/images/cafeoco-logo (x).png";

export function Footer() {
  return (
    <footer className="bg-white px-8 md:px-16 py-12 border-t border-black/5 text-[#1D1D1F]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        <div className="flex gap-2 items-center">
          <img src={logoImg} alt="CAFÉ Ö CO." className="w-8 h-8 object-contain" />
          <span className="text-xl font-semibold tracking-tight">CAFÉ Ö CO.</span>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-16">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Temp Control</span>
            <span className="text-[13px] font-medium">Arctic Chilled (-2°C)</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Energy Rating</span>
            <span className="text-[13px] font-medium">Extreme (320mg)</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase opacity-40 tracking-widest mb-1">Sugar</span>
            <span className="text-[13px] font-medium">0% Purity</span>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4 text-[13px] font-medium tracking-wide uppercase opacity-60">
          <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Strava</a>
          <a href="#" className="hover:opacity-100 transition-opacity">TikTok</a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-[11px] font-medium tracking-[0.2em] opacity-40 uppercase">
        <p>&copy; {new Date().getFullYear()} Café Ö Co. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
        </div>
      </div>
    </footer>
  );
}
