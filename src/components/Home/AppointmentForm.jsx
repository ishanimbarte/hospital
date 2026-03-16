import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { useNavigate } from "react-router-dom";
import "react-day-picker/dist/style.css";

export default function AppointmentForm() {
    const [selectedDate, setSelectedDate] = useState();
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [reason,setReason] = useState("");
    const [department,setDepartment] = useState("");
    const [time,setTime] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
  e.preventDefault();
  
 try {
  const res = await fetch("http://localhost:5000/api/appointment",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      name,
      phone,
      reason,
      department,
      date: selectedDate,
      time
    })
  });

  const data = await res.json();

    if (res.ok) {
      alert("Appointment booked successfully ✅");

      // redirect to home page
      navigate("/");
    } else {
      alert(data.message || "Something went wrong");
    }

  } catch (error) {
    console.log(error);
    alert("Server error");
  }
};
  return (
    <div className="min-h-screen bg-blue-50 px-4 py-10 flex justify-center">
      
      {/* MAIN WRAPPER */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-8">
        
        {/* TOP GRADIENT CARD */}
        <div className="w-full rounded-[28px] bg-gradient-to-r from-[#132a4a] via-[#35578b] to-[#adb8c8] px-10 py-10">
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-lg md:text-2xl font-bold tracking-wide">
              CareWay Hospital
            </h2>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-blue-300 font-medium">Home</span>
              <span className="text-white/70">›</span>
              <span className="text-white font-semibold">Appointment</span>
            </div>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-6">
            Appointment Details
          </h2>

          <form 
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Name</label>
              <input
                type="text"
                placeholder="David John"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input
                type="tel"
                placeholder="(123) 456 - 789"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Reason for Visit */}
            <div>
              <label className="text-sm text-gray-600">Reason for Visit</label>
              <select
                value={reason}
                onChange={(e)=>setReason(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a reason</option>
                <option>Routine Checkup</option>
                <option>Consultation</option>
                <option>Follow-up</option>
              </select>
            </div>

            {/* Department */}
            <div>
              <label className="text-sm text-gray-600">Department</label>
              <select
                value={department}
                onChange={(e)=>setDepartment(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
              </select>
            </div>

            {/* Preferred Date */}
<div>
  <label className="text-sm text-gray-600 mb-1 block">
    Preferred Date
  </label>

  <div className="rounded-2xl border border-gray-200 p-2 shadow-sm">
    <DayPicker
      mode="single"
      selected={selectedDate}
      onSelect={setSelectedDate}
      fromDate={new Date()}
      className="rounded-xl"
      modifiersClassNames={{
        selected: "bg-blue-600 text-white",
        today: "text-blue-600 font-semibold",
      }}
    />

    {selectedDate && (
      <p className="mt-2 text-sm text-gray-600">
        Selected Date:{" "}
        <span className="font-thin text-blue-600">
          {selectedDate.toDateString()}
        </span>
      </p>
    )}
  </div>
</div>

{/* Preferred Time */}
<div>
  <label className="text-sm text-gray-600">Preferred Time</label>
  <input
    type="time"
    value={time}
    onChange={(e)=>setTime(e.target.value)}
    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</div>


            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-2 bg-[#132a4a] text-white px-6 py-2 rounded-full shadow hover:bg-[#4c70a2] transition"
              >
                Submit →
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
