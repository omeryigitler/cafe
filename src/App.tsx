import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Story } from './components/Story';
import { Products } from './components/Products';
import { Locations } from './components/Locations';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="bg-[#FBFBFB] min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Features />
      <Story />
      <Locations />
      <Footer />
    </main>
  );
}
