import { useNavigate } from "react-router-dom";
import departments from "./DepartmentsData";

const DepartmentsOverview = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-800">
            Departments Overview
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-3 rounded" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {departments.map((dept, index) => (
            <div
              key={index}
              onClick={() => navigate(`/departments/${dept.slug}`)}
              className="border border-blue-300 rounded-md p-6 flex flex-col items-center text-center
              hover:border-blue-700 hover:shadow-md transition cursor-pointer"
            >
              <img
                src={dept.image}
                alt={dept.name}
                className="w-16 h-16 object-contain mb-4"
              />
              <p className="text-sm font-medium text-gray-700">
                {dept.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DepartmentsOverview;
