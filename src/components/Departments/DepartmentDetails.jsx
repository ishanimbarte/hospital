import { useParams } from "react-router-dom";
import departments from "./DepartmentsData";

const DepartmentDetails = () => {
  const { slug } = useParams();

  const department = departments.find(
    (dept) => dept.slug === slug
  );

  if (!department) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold">Department Not Found</h2>
      </div>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          {department.name}
        </h2>

        <img
          src={department.image}
          alt={department.name}
          className="w-24 h-24 object-contain mb-6"
        />

        <p className="text-gray-700 leading-relaxed">
          {department.description}
        </p>
      </div>
    </section>
  );
};

export default DepartmentDetails;
