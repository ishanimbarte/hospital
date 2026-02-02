import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const JobApplicationForm = () => {
  const { jobTitle } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "resume" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Application submitted successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-16">
      <h2 className="text-2xl font-bold mb-6">
        Apply for:{" "}
        <span className="text-blue-600">
          {decodeURIComponent(jobTitle)}
        </span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          type="file"
          name="resume"
          required
          accept=".pdf,.doc,.docx"
        />

        <textarea
          name="coverLetter"
          placeholder="Cover Letter"
          rows="4"
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-gradient-to-r from-[#132a4a] via-[#35578b] to-[#adb8c8] text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="border px-6 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApplicationForm;
