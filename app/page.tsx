import Hero from "./Sections/Hero";
import Deals from "./Sections/Deals";
import CTA from "./Sections/Cta";
import About from "./Sections/About";


import ClothesCTA from "./Sections/ClothesCata";
import Footer from "./Sections/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <Deals/>
      <CTA/>
      <About/>
      <ClothesCTA/>
      <Footer/>
    </>
  );
}
