import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, Eye, EyeOff } from "lucide-react";

function AdminLogin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        // "http://localhost:5000/api/admin/login",
        fetch(`${import.meta.env.VITE_API_URL}/api/admin/login`),
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Login failed");
        return;
      }

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminData", JSON.stringify(data.admin));

      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fffaf5] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-xl sm:p-10">
        
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4a260f] text-white">
            <LockKeyhole size={28} />
          </div>

          <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
            Kamboj Dairy & Bakery
          </p>

          <h1 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b]">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-[#806556]">
            Sign in to manage your store.
          </p>
        </div>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
              Email
            </label>

            <div className="flex items-center rounded-xl border border-[#eadfd4] bg-[#fffaf5] px-4">
              <Mail size={18} className="text-[#a56236]" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter admin email"
                required
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-[#eadfd4] bg-[#fffaf5] px-4">
              <LockKeyhole size={18} className="text-[#a56236]" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="w-full bg-transparent px-3 py-3 outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#806556]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {message && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-center text-sm text-red-600">
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#4a260f] py-3.5 text-sm font-bold text-white transition hover:bg-[#6a3b1f] disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;