import Image from "next/image";
import HeroSection from "../components/Hero";
import FeatureSection from "../components/Features";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <Testimonial />
    </>
  );
}
