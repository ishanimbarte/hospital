import Img1 from "../../assets/Achieved/atom.png";
import Img2 from "../../assets/Achieved/man.png";
import Img3 from "../../assets/Achieved/date.png";
import Img4 from "../../assets/Achieved/place.png";
import Img5 from "../../assets/Achieved/stethoscope.png";

const achievements = [
  {
    value: "40+ Years",
    label: "Legacy of",
    icon: Img1,
  },
  {
    value: "1260000+",
    label: "Patients Treated",
    icon: Img2,
  },
  {
    value: "12600+",
    label: "Surgeries Performed",
    icon: Img3,
  },
  {
    value: "35+",
    label: "Specialities Under Our Roof",
    icon: Img4,
  },
  {
    value: "70+",
    label: "Number of Specialists",
    icon: Img5,
  },
];

const Achievements = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            What Have We Achieved
          </h2>
          <div className="w-14 h-1 bg-blue-600 mx-auto mt-3 rounded"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 text-center shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <img
                src={item.icon}
                alt={item.label}
                className="w-12 h-12 mx-auto mb-5"
              />

              {/* Value */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {item.value}
              </h3>

              {/* Divider */}
              <div className="w-8 h-0.5 bg-blue-600 mx-auto mb-3"></div>

              {/* Label */}
              <p className="text-gray-600 font-medium text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
