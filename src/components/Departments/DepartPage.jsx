import { Routes, Route } from "react-router-dom";
import Navbar from "../Navbar";
import Department from "./Department";
import DepartmentsOverview from "./DepartmentsOverview";
import DepartmentDetails from "./DepartmentDetails";
import Footer from "../Footer";

function DepartmentPage() {
  return (
    <>
      <Navbar />
      <Department />

      {/* Nested Routes */}
      <Routes>
        <Route index element={<DepartmentsOverview />} />
        <Route path=":slug" element={<DepartmentDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default DepartmentPage;
