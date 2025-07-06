import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutSection from "./component/About";
import EventGearShowcase from "./component/Services";
import IndustriesServed from "./component/IndustriesServed";
import CaseStudies from "./component/Events";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <EventGearShowcase />
      <IndustriesServed />
      <CaseStudies />
    </>
  );
}
