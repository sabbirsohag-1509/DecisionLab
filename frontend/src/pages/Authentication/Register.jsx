import { useState } from "react";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  LockKeyhole,
  LockKeyholeOpen,
  UserPlus,
  LoaderCircle,
  Eye,
  EyeOff,
} from "lucide-react";

import DecisionLabLogo from "../../assets/logo.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      // Backend registration API will be connected later.
      const registerData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      console.log("Registration data:", registerData);

      // TODO:
      // await axios.post("/auth/register", registerData);
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = () => {
    // Google OAuth integration will be added later.
    console.log("Google signup clicked");
  };

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-lg">
        {/* ================= REGISTER CARD ================= */}
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
              Create Account
            </h1>
          </div>

          {/* ================= FORM ================= */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* ================= FULL NAME ================= */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-base-content"
              >
                Full Name
              </label>

              <div
                className={`flex min-h-12 items-center gap-3 rounded-xl border bg-base-100 px-3 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 ${
                  errors.name ? "border-error" : "border-base-200"
                }`}
              >
                <User
                  size={19}
                  className="shrink-0 text-base-content/50"
                  aria-hidden="true"
                />

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  className="min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-base-content/40 sm:text-base"
                  {...register("name", {
                    required: "Name is required",
                  })}
                />
              </div>

              {errors.name && (
                <p className="mt-1.5 text-sm text-error">
                  {errors.name.message}
                </p>
              )}
            </div>

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
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-base-content"
              >
                Password
              </label>

              <div
                className={`flex min-h-12 items-center gap-3 rounded-xl border bg-base-100 px-3 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 ${
                  errors.password ? "border-error" : "border-base-200"
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
                  placeholder="Create a password"
                  autoComplete="new-password"
                  className="min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-base-content/40 sm:text-base"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base-content/50 transition hover:bg-base-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
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

            {/* ================= CONFIRM PASSWORD ================= */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-base-content"
              >
                Confirm Password
              </label>

              <div
                className={`flex min-h-12 items-center gap-3 rounded-xl border bg-base-100 px-3 transition focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 ${
                  errors.confirmPassword
                    ? "border-error"
                    : "border-base-200"
                }`}
              >
                {showConfirmPassword ? (
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
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  autoComplete="new-password"
                  className="min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-base-content/40 sm:text-base"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((prev) => !prev)
                  }
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-base-content/50 transition hover:bg-base-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} aria-hidden="true" />
                  ) : (
                    <Eye size={18} aria-hidden="true" />
                  )}
                </button>
              </div>

              {errors.confirmPassword && (
                <p className="mt-1.5 text-sm text-error">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* ================= TERMS ================= */}
            <div className="pt-0.5">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm mt-0.5 shrink-0"
                  {...register("terms", {
                    required: "You must agree to continue",
                  })}
                />

                <span className="text-sm leading-5 text-base-content/70">
                  I agree to the{" "}
                  <Link
                    to="/terms"
                    className="font-medium text-primary transition hover:underline"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    to="/privacy"
                    className="font-medium text-primary transition hover:underline"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {errors.terms && (
                <p className="mt-1.5 text-sm text-error">
                  {errors.terms.message}
                </p>
              )}
            </div>

            {/* ================= CREATE ACCOUNT ================= */}
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
                  Creating Account...
                </>
              ) : (
                <>
                  <UserPlus size={19} aria-hidden="true" />
                  Create Account
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

          {/* ================= GOOGLE ================= */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
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

          {/* ================= LOGIN ================= */}
          <p className="mt-6 text-center text-sm text-base-content/60">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="font-semibold text-primary transition hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;