import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  // 🔐 Protect Route
  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      navigate("/admin/login");
    }
  }, []);

  // Fetch Data
  const fetchData = async () => {
    const a = await fetch("http://localhost:5000/api/appointments");
    const c = await fetch("http://localhost:5000/api/contacts");

    setAppointments(await a.json());
    setContacts(await c.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Delete Appointment
  const deleteAppointment = async (id) => {
    await fetch(`http://localhost:5000/api/appointment/${id}`, {
      method: "DELETE"
    });
    fetchData();
  };

  // Delete Contact
  const deleteContact = async (id) => {
    await fetch(`http://localhost:5000/api/contact/${id}`, {
      method: "DELETE"
    });
    fetchData();
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={() => {
            localStorage.removeItem("admin");
            navigate("/admin/login");
          }}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white/10 p-6 rounded-xl shadow">
          <h2 className="text-lg">Total Appointments</h2>
          <p className="text-2xl font-bold mt-2">{appointments.length}</p>
        </div>

        <div className="bg-white/10 p-6 rounded-xl shadow">
          <h2 className="text-lg">Total Contacts</h2>
          <p className="text-2xl font-bold mt-2">{contacts.length}</p>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Appointments</h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white/10 rounded-xl overflow-hidden">
            <thead className="bg-white/20">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Department</th>
                <th className="p-3 text-left">Reason</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((item) => (
                <tr key={item._id} className="border-t border-white/10">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.phone}</td>
                  <td className="p-3">{item.department}</td>
                  <td className="p-3">{item.reason}</td>
                  <td className="p-3">{new Date(item.date).toLocaleDateString()}</td>
                  <td className="p-3">{item.time}</td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteAppointment(item._id)}
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contacts Table */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Contacts</h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white/10 rounded-xl overflow-hidden">
            <thead className="bg-white/20">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Message</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((item) => (
                <tr key={item._id} className="border-t border-white/10">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.phone || "-"}</td>
                  <td className="p-3">{item.message}</td>
                  <td className="p-3">
                    <button
                      onClick={() => deleteContact(item._id)}
                      className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}