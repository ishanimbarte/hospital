import Navbar from "../Navbar";
import Hero from "./Hero";
import AboutSection from "../About/AboutSection";
import DepartmentsOverview from "../Departments/DepartmentsOverview";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "../Footer";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <DepartmentsOverview />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default HomePage;
