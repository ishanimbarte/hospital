import Navbar from "../Navbar";
import Disease from "./Disease";
import DiseaseSidebarLayout from "./DiseaseSection";
import Footer from "../Footer";

function DiseasePage() {
  return (
    <>
      <Navbar />
      <Disease />
      <DiseaseSidebarLayout />
      <Footer />
    </>
  );
}

export default DiseasePage;
