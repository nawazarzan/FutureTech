import ContactHero from "../../components/ContactHero";
import ContactForm from "../../components/ContactForm";
import ContactInfo from "../../components/ContactInfo";
import FollowUs from "../../components/FollowUs";
import Footer from "../../components/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-page">
        <ContactHero />

        <section className="contact-body">
          <ContactForm />
          <div>
            <ContactInfo />
            <FollowUs />
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
