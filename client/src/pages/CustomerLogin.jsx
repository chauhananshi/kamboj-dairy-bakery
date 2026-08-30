import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Mail,
  LockKeyhole,
  User,
  Phone,
  Eye,
  EyeOff,
} from "lucide-react";

function CustomerLogin() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const endpoint = isSignup
        // ? "http://localhost:5000/api/customer/register"
           
        // : "http://localhost:5000/api/customer/login";
          ? `${import.meta.env.VITE_API_URL}/api/customer/register`
  : `${import.meta.env.VITE_API_URL}/api/customer/login`;

      const body = isSignup
        ? {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          }
        : {
            email: formData.email,
            password: formData.password,
          };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            (isSignup
              ? "Registration failed"
              : "Login failed")
        );
      }

      if (isSignup) {
        setMessage(
          "Account created successfully. Please login."
        );

        setIsSignup(false);

        setFormData({
          name: "",
          email: formData.email,
          phone: "",
          password: "",
        });
      } else {
        localStorage.setItem(
          "customerToken",
          data.token
        );

        localStorage.setItem(
          "customer",
          JSON.stringify(data.customer)
        );

        navigate("/");
      }
    } catch (error) {
      console.error("Customer authentication error:", error);

      setMessage(
        error.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] px-4 py-8">
      <div className="mx-auto max-w-md">
        {/* BACK */}
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#69402a] transition hover:text-[#4a260f]"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* CARD */}
        <div className="rounded-3xl border border-[#ead9cb] bg-white p-6 shadow-lg sm:p-8">
          {/* TITLE */}
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#4a260f] text-white">
              <User size={28} />
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-[#a56236]">
              Kamboj Dairy & Bakery
            </p>

            <h1 className="mt-2 font-serif text-3xl font-bold text-[#4a2c1b]">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h1>

            <p className="mt-2 text-sm text-[#806556]">
              {isSignup
                ? "Create your customer account to manage your orders."
                : "Login to access your customer account."}
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* NAME - SIGNUP ONLY */}
            {isSignup && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
                  Full Name
                </label>

                <div className="flex items-center rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4">
                  <User
                    size={18}
                    className="text-[#a56236]"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full bg-transparent px-3 py-3 outline-none"
                  />
                </div>
              </div>
            )}

            {/* EMAIL */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
                Email
              </label>

              <div className="flex items-center rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4">
                <Mail
                  size={18}
                  className="text-[#a56236]"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-transparent px-3 py-3 outline-none"
                />
              </div>
            </div>

            {/* PHONE - SIGNUP ONLY */}
            {isSignup && (
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
                  Mobile Number
                </label>

                <div className="flex items-center rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4">
                  <Phone
                    size={18}
                    className="text-[#a56236]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10 digit mobile number"
                    pattern="[6-9][0-9]{9}"
                    maxLength="10"
                    required
                    className="w-full bg-transparent px-3 py-3 outline-none"
                  />
                </div>
              </div>
            )}

            {/* PASSWORD */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#4a2c1b]">
                Password
              </label>

              <div className="flex items-center rounded-xl border border-[#ddcbbd] bg-[#fffaf5] px-4">
                <LockKeyhole
                  size={18}
                  className="text-[#a56236]"
                />

                <input
                  type={
                    showPassword ? "text" : "password"
                  }
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  minLength="6"
                  className="w-full bg-transparent px-3 py-3 outline-none"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="text-[#806556]"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* MESSAGE */}
            {message && (
              <div className="rounded-xl bg-[#fff4e8] px-4 py-3 text-center text-sm font-semibold text-[#8a4f29]">
                {message}
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-[#4a260f] py-3.5 text-sm font-bold text-white transition hover:bg-[#6a3b1f] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? isSignup
                  ? "Creating Account..."
                  : "Logging In..."
                : isSignup
                ? "Create Account"
                : "Login"}
            </button>
          </form>

          {/* TOGGLE */}
          <div className="mt-6 text-center text-sm text-[#806556]">
            {isSignup
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsSignup(!isSignup);
                setMessage("");
              }}
              className="ml-1 font-bold text-[#8a4f29] hover:underline"
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;