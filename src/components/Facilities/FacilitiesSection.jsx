import React from "react";
import Img1 from "../../assets/Facility/facility1.jpg"
import Img2 from "../../assets/Facility/facility2.jpg"
import Img3 from "../../assets/Facility/facility3.webp"
import Img4 from "../../assets/Facility/facility4.webp"
import Img5 from "../../assets/Facility/facility5.webp"
import Img6 from "../../assets/Facility/facility6.webp"
import Img7 from "../../assets/Facility/facility7.jpeg"
import Img8 from "../../assets/Facility/facility8.jpg"
import Img9 from "../../assets/Facility/facility9.jpg"
import Img10 from "../../assets/Facility/facility10.jpeg"
import Img11 from "../../assets/Facility/facility11.webp"
import Img12 from "../../assets/Facility/facility12.jpg"
import Img13 from "../../assets/Facility/facility13.png"
import Img14 from "../../assets/Facility/facility14.webp"
import Img15 from "../../assets/Facility/facility15.jpg"
import Img16 from "../../assets/Facility/facility16.jpeg"
import Img17 from "../../assets/Facility/facility17.webp"

const facilities = [
  {
    title: "Endoscopy Suites",
    image: Img1,
  },
  {
    title: "Operation Theatre",
    image: Img2,
  },
  {
    title: "64 Slice CT Machine",
    image: Img3,
  },
  {
    title: "Cafeteria",
    image: Img4,
  },
  {
    title: "Pharmacy Area",
    image: Img5,
  },
  {
    title: "Patient Waiting Area",
    image: Img6,
  },
  {
    title: "OPD Chamber",
    image: Img7,
  },
  {
    title: "Self Service Kiosk",
    image: Img8,
  },
  {
    title: "Catheterization Lab",
    image: Img9,
  },
  {
    title: "MRI Machine",
    image: Img10,
  },
  {
    title: "Registration Counters",
    image: Img11,
  },
  {
    title: "Dialysis Unit",
    image: Img12,
  },
  {
    title: "ICU Unit",
    image: Img13,
  },
  {
    title: "5 Bedded Ward",
    image: Img14,
  },
  {
    title: "Twin Bedded Ward",
    image: Img15,
  },
  {
    title: "VIP Suits",
    image: Img16,
  },
  {
    title: "Doctor Lounge Area",
    image: Img17,
  },
  
];

export default function FacilitiesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-gray-900">All Facilities</h2>
        <div className="w-16 h-1 bg-blue-600 mt-2" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {facilities.map((item) => (
          <div
            key={item.title}
            className="group relative h-60 rounded-xl overflow-hidden shadow-lg"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            

            {/* Title */}
            <div className="absolute bottom-0 w-full bg-blue-900/90 text-white text-center py-4">
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
