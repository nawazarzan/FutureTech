import "./Services.css";
// import Testimonials from "../../components/Testimonials";
// import Team from "../../components/Team";
import ServicesSection from "../../components/ServicesSection";
import ServicesCTA from "../../components/ServicesCTA";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <span className="services-tag">OUR SERVICES</span>

        <h1>
          Solutions That Scale <br />
          <span>With Your Business</span>
        </h1>

        <p>
          Comprehensive technology services designed to take your business
          from where it is to where you want it to be.
        </p>
      </section>
      <ServicesSection />
      <ServicesCTA />
      <Footer />

      {/* TEAM */}
      {/* <Team /> */}

    </main>
  );
}
