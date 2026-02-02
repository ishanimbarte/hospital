import Navbar from "../Navbar";
import Careers from "./Career";          // Job listings table
import CareersSection from "./CareerSection";
import Footer from "../Footer";

function CareersPage() {
  return (
    <>
      <Navbar />

      {/* Job listings (Apply button navigates to /apply/:jobTitle) */}
      <Careers />

      <CareersSection />

      <Footer />
    </>
  );
}

export default CareersPage;
