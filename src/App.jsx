import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AppointmentForm from "./components/Home/AppointmentForm";
import AboutPage from "./components/About/AboutPage";
import FoundationPage from "./components/Foundation/FoundationPage";
import DepartmentPage from "./components/Departments/DepartPage";
import SpecialistPage from "./components/Specialists/SpecialistPage";
import FacilitiesPage from "./components/Facilities/FacilitiesPage";
import CareersPage from "./components/Careers/CareerPage";
import JobApplicationForm from "./components/Careers/JobApply"; // ✅ ADD THIS
import DiseasePage from "./components/Diseases/DiseasePage";
import ContactPage from "./components/Contact/ContactPage";
import ServicePage from "./components/Services/ServicePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/foundation" element={<FoundationPage />} />
        <Route path="/departments/*" element={<DepartmentPage />} />
        <Route path="/specialists" element={<SpecialistPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/careers" element={<CareersPage />} />

        {/* ✅ THIS ROUTE WAS MISSING */}
        <Route path="/apply/:jobTitle" element={<JobApplicationForm />} />

        <Route path="/disease" element={<DiseasePage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
