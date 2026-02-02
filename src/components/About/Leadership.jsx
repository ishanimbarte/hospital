import React from "react";
import Img1 from "../../assets/Leader/leader1.avif"

export default function LeadershipSection() {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Heading */}
      <h2 className="text-3xl font-semibold text-center text-blue-900 mb-12">
        Leadership Team
      </h2>

      {/* Leadership Cards */}
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Card 1 */}
        <div className="rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl shadow-md border">
          <div className="bg-gradient-to-b flex justify-center p-0">
            <img
              src={Img1}
              alt="Dr. Narendra Vaidya"
              className="h-50 object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-md font-semibold text-gray-900">
              Dr. Narendra Vaidya
            </h3>
            <p className="text-gray-600 mt-1">
              Chairman – CareWay Group of Hospitals
            </p>
            
          </div>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl shadow-md border">
          <div className="bg-gradient-to-b flex justify-center p-0">
            <img
              src={Img1}
              alt="Mr. Manpreet Sohal"
              className="h-50 object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-md font-semibold text-gray-900">
              Mr. Manpreet Sohal
            </h3>
            <p className="text-gray-600 mt-1">
              CEO & Managing Director – CareWay Group of Hospitals
            </p>
            
          </div>
        </div>
      </div>

      {/* Vision / Mission / Values */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Vision */}
        <div className="bg-blue-50 rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">
            Our Vision
          </h4>
          <p className="text-gray-700">
            To be among the global leaders in humanity’s war against pain and
            disability.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-blue-50 rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">
            Our Mission
          </h4>
          <p className="text-gray-700">
            To spread smiles of happy mobility by leveraging the power of
            technology and a soothing touch of personal care.
          </p>
        </div>

        {/* Values */}
        <div className="bg-blue-50 rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl">
          <h4 className="text-lg font-semibold text-blue-900 mb-2">
            Our Values
          </h4>
          <p className="text-gray-700">
            Integrity, Commitment, Innovation, Sensitivity.
          </p>
        </div>
      </div>
    </section>
  );
}
