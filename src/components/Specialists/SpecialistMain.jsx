import React from "react";
import Img1 from "../../assets/Specialists/doctor1.avif";
import Img2 from "../../assets/Specialists/doctor2.jpeg";
import Img3 from "../../assets/Specialists/doctor3.webp";
import Img4 from "../../assets/Specialists/doctor4.jpeg";
import Img5 from "../../assets/Specialists/doctor5.jpeg";
import Img6 from "../../assets/Specialists/doctor6.jpg";

const people = [
  {
    name: "Robert Brown",
    role: "Cardiologist",
    image: Img1,
  },
  {
    name: "Leslie Livingston",
    role: "Neurologist",
    image: Img2,
  },
  {
    name: "Joseph McFall",
    role: "Nephrologist",
    image: Img3,
  },
  {
    name: "Thom Belly",
    role: "Pulmonologist",
    image: Img4,
  },
  {
    name: "Bonnie Green",
    role: "Hepatologist",
    image: Img5,
  },
  {
    name: "Lana Byrd",
    role: "Urologist",
    image: Img6,
  },
];

export default function OurSpecialists() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-gray-900">Our people make us great</h2>
          <p className="text-gray-600">
            Here we focus on markets where technology, innovation, can unlock long-term value.
          </p>
          <p className="text-gray-600">
            You’ll interact with talented professionals, will be challenged to solve difficult problems and think in new and creative ways.
          </p>
          
        </div>

        {/* Cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {people.map((person) => (
            <div
              key={person.name}
              className="relative h-60 rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={person.image}
                alt={person.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold text-lg leading-tight">{person.name}</h3>
                <p className="text-sm text-gray-200">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
