export default function ContactInfoSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-40">

        {/* Contact Info 1 */}
        <div>
          <div className="font-inter text-[36px] text-[#132a4a]">
              Care<span className="font-semibold text-blue-400">Way</span>
            </div>

          <div className="space-y-4 text-gray-700">
            <p>We believe quality healthcare begins with understanding and compassion. Our multi-specialty hospital brings together expert doctors, modern infrastructure, and a patient-first approach to deliver the highest standards of care.
                Connect with us today — we’re here to support your health journey every step of the way..
            </p>
            
          </div>
        </div>

        {/* Contact Info 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Info 2</h3>
          <div className="w-12 h-1 bg-blue-600 mb-6"></div>

          <div className="space-y-4 text-gray-700">
            <p>
              📍 <strong>Midas Multispeciality Hospital Pvt. Ltd.</strong><br />
              07, Midas Heights, 4th & 5th Floor,<br />
              Central Bazar Road, Ramdaspeth,<br />
              Nagpur - 440010, Maharashtra
            </p>
            <p>✉️ info@midashospital.com</p>
          </div>
        </div>

        {/* Working Time */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Working Time</h3>
          <div className="w-12 h-1 bg-blue-600 mb-6"></div>

          <div className="flex items-center justify-between text-gray-700">
            <span>🕒 Mon - Sat</span>
            <span className="text-blue-600 font-medium">08:00 AM - 06:00 PM</span>
          </div>
        </div>

      </div>
    </section>
  );
}
