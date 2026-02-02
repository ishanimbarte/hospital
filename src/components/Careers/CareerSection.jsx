import { useNavigate } from "react-router-dom";

const values = [
  {
    title: "Clinical Excellence",
    desc: "Our commitment to delivering the highest quality of healthcare is represented by our team of highly skilled medical practitioners.",
    icon: "🩺",
  },
  {
    title: "Patient Centricity",
    desc: "Delivering the best quality of healthcare is incomplete without putting patients at the center.",
    icon: "❤️",
  },
  {
    title: "Ethical Practices",
    desc: "Gaining the trust of our patients involves honesty and confidentiality.",
    icon: "⚖️",
  },
  {
    title: "Integrity and Accountability",
    desc: "We uphold the highest standards of ethical practice.",
    icon: "🛡️",
  },
];

const jobs = [
  { title: "Staff Nurse", exp: "1–5 years", edu: "GNM / BSC Nursing", loc: "S B Road, Pune" },
  { title: "Senior Staff Nurse", exp: "5–8 years", edu: "GNM / BSC Nursing", loc: "S B Road, Pune" },
  { title: "Infection Control Nurse", exp: "3–5 years", edu: "GNM/BSC & ICN", loc: "S B Road, Pune" },
  { title: "Executive – Billing", exp: "3–5 years", edu: "B.Com / M.Com", loc: "S B Road, Pune" },
  { title: "ICU Intensivist", exp: "–", edu: "IDCCM / DRNB", loc: "S B Road, Pune" },
  { title: "Call Center (Marketing)", exp: "1+ year", edu: "Any Graduation", loc: "S B Road, Pune" },
  { title: "Assistant / Associate Consultant – General Surgery", exp: "–", edu: "MS / DNB", loc: "Nigdi, Pune" },
];

export default function CareersSection() {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto pt-20 pb-20 px-6">
      {/* Values */}
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Our Values
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-[#ebeff5] rounded-xl p-4 shadow-sm hover:shadow-lg transition"
          >
            <div className="text-3xl mb-2">{v.icon}</div>
            <h3 className="font-semibold mb-2">{v.title}</h3>
            <p className="text-sm text-gray-700">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Jobs Table */}
      <h2 className="text-lg sm:text-base md:text-xl font-bold text-center text-blue-900 mb-6 md:mb-8">
        Available Positions
      </h2>


      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-blue-900">
              <th className="py-2 pl-4">Job Title</th>
              <th>Experience</th>
              <th>Education</th>
              <th>Location</th>
              <th className="text-center">Apply</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, idx) => (
              <tr
                key={job.title}
                className={idx % 2 === 0 ? "bg-[#e1e9f5]" : "bg-white"}
              >
                <td className="py-4 pl-4">{job.title}</td>
                <td>{job.exp}</td>
                <td>{job.edu}</td>
                <td>{job.loc}</td>
                <td className="text-center">
                  <button
                    onClick={() =>
                      navigate(`/apply/${encodeURIComponent(job.title)}`)
                    }
                    className="bg-gradient-to-r from-[#132a4a] via-[#35578b] to-[#adb8c8] text-white px-4 py-2 rounded hover:bg-blue-800"
                  >
                    Apply
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
