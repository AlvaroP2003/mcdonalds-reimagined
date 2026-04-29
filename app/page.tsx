import Loader from "./Sections/Loader";
import Hero from "./Sections/Hero";
import Deals from "./Sections/Deals";
import CTA from "./Sections/Cta";
import About from "./Sections/About";
import Menu from "./Sections/OurMenu";
import ClothesCTA from "./Sections/ClothesCata";
import Footer from "./Sections/Footer";

export default function Home() {
  return (
    <>
      <Loader/>
      <Hero/>
      <Deals/>
      <CTA/>
      <About/>
      <Menu/>
      <ClothesCTA/>
      <Footer/>
    </>
  );
}
