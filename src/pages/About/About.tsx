import AboutHero from "../../components/AboutHero";
import Footer from "../../components/Footer";
import FutureTechAdvantage from "../../components/FutureTechAdvantage";
import Navbar from "../../components/Navbar";
import OurStory from "../../components/OurStory";
import ValuesSection from "../../components/ValuesSection";
import Team from "../../components/Team";
export default function About() {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurStory />
      <ValuesSection />
      <FutureTechAdvantage />
      <Team /> 
      <Footer /> 
      {/* next sections like Team, Values, etc */}
    </>
  );
}
