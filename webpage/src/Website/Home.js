import React from "react";
import BannerSection from "./BannerSection";
import ContentSection from "./Achivement";
import TestimonialsSection from "./Clients";
import ContentWithImage from "./OurClients";
import CenteredSection from "./Build";
import OurVision from "./OurVision";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <ContentWithImage />
      <TestimonialsSection />
      <ContentSection />
      <OurVision />
      <CenteredSection />
      <ContactForm />
    </div>
  );
};

export default Home;
