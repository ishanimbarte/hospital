import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (result.success) {
        localStorage.setItem("admin", "true");
        navigate("/admin/dashboard");
      } else {
        alert("Invalid login");
      }
    } catch (err) {
      alert("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-[350px] border border-white/20">
        
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Admin Login
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>
    </div>
  );
}