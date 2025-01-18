import HeroSection from "./components/Hero";
import ProductHero from "./components/UnderHero";
import ProductListing from "./components/ProductListing";
import Features from "./components/Feature";
import Gearupp from "./components/GearUp";
import FlightEssentials from "./components/DontMiss";
import Essentials from "./components/Essentials";
// import Selected from "./selectedProduct/page";
// import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
<div><HeroSection /></div>
<div><ProductHero /></div>
<div><ProductListing /></div>
<div><Features /></div>
<div><Gearupp /></div>
<div><FlightEssentials /></div>
<div><Essentials /></div>
{/* <div><Selected /></div> */}
{/* <div><Footer /></div> */}



    </>
  );
}
