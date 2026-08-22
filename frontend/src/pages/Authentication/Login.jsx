import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import {
  Mail,
  LockKeyhole,
  LockKeyholeOpen,
  LogIn,
  LoaderCircle,
  Eye,
  EyeOff,
} from "lucide-react";

import DecisionLabLogo from "../../assets/logo.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // Backend login API will be connected later.
      const loginData = {
        email: data.email,
        password: data.password,
        rememberMe: data.rememberMe,
      };

      console.log("Login data:", loginData);

      // TODO:
      // await axios.post("/auth/login", loginData);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    // Google OAuth integration will be added later.
    console.log("Google login clicked");
  };

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-lg">
        {/* ================= LOGIN CARD ================= */}
        <div className="rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm sm:p-7 md:p-8">
          {/* ================= HEADER ================= */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 p-2.5">
              <img
                src={DecisionLabLogo}
                alt="DecisionLab Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-base-content sm:text-3xl">
              Welcome Back
            </h1>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-base-content/60">
              Sign in to continue making better-informed decisions.
            </p>
          </div>

          {/* ================= LOGIN FORM ================= */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* ================= EMAIL ================= */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-base-content"
              >
                Email Address
              </label>

              <div
                className={`flex min-h-12 items-center gap-3 rounded-xl border bg-base-100 px-3 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 ${
                  errors.email ? "border-error" : "border-base-200"
                }`}
              >
                <Mail
                  size={19}
                  className="shrink-0 text-base-content/50"
                  aria-hidden="true"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-base-content/40 sm:text-base"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
              </div>

              {errors.email && (
                <p className="mt-1.5 text-sm text-error">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* ================= PASSWORD ================= */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-base-content"
                >
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-medium text-primary transition hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <div
                className={`flex min-h-12 items-center gap-3 rounded-xl border bg-base-100 px-3 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 ${
                  errors.password
                    ? "border-error"
                    : "border-base-200"
                }`}
              >
                {showPassword ? (
                  <LockKeyholeOpen
                    size={19}
                    className="shrink-0 text-primary"
                    aria-hidden="true"
                  />
                ) : (
                  <LockKeyhole
                    size={19}
                    className="shrink-0 text-base-content/50"
                    aria-hidden="true"
                  />
                )}

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-base-content/40 sm:text-base"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base-content/50 transition hover:bg-base-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} aria-hidden="true" />
                  ) : (
                    <Eye size={18} aria-hidden="true" />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="mt-1.5 text-sm text-error">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* ================= REMEMBER ME ================= */}
            <div className="pt-0.5">
              <label className="flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm shrink-0"
                  {...register("rememberMe")}
                />

                <span className="text-sm text-base-content/70">
                  Remember me
                </span>
              </label>
            </div>

            {/* ================= LOGIN BUTTON ================= */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary min-h-12 w-full rounded-xl text-sm font-semibold transition sm:text-base"
            >
              {loading ? (
                <>
                  <LoaderCircle
                    size={19}
                    className="animate-spin"
                    aria-hidden="true"
                  />

                  Logging In...
                </>
              ) : (
                <>
                  <LogIn
                    size={19}
                    aria-hidden="true"
                  />

                  Login
                </>
              )}
            </button>
          </form>

          {/* ================= DIVIDER ================= */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-base-200" />

            <span className="text-xs font-medium text-base-content/40">
              OR
            </span>

            <div className="h-px flex-1 bg-base-200" />
          </div>

          {/* ================= GOOGLE LOGIN ================= */}
           {/* ================= GOOGLE ================= */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn min-h-12 w-full rounded-xl border border-base-300 bg-base-100 text-sm font-medium text-base-content transition hover:border-primary hover:bg-primary/5 hover:text-primary sm:text-base"
          >
            <svg
              aria-label="Google logo"
              width="18"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="M0 0H512V512H0" fill="#fff" />
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                />
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                />
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                />
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                />
              </g>
            </svg>

            Continue with Google
          </button>

          {/* ================= REGISTER ================= */}
          <p className="mt-6 text-center text-sm text-base-content/60">
            Don't have an account?{" "}
            <Link
              to="/auth/register"
              className="font-semibold text-primary transition hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;