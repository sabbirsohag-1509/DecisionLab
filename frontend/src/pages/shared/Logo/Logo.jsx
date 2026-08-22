import { Link } from "react-router";
import DecisionLabLogo from "../../../assets/logo.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-90"
      aria-label="DecisionLab Home"
    >
      <img
        src={DecisionLabLogo}
        alt="DecisionLab Logo"
        className="h-9 w-9 object-contain sm:h-10 sm:w-10"
      />

      <h1 className="font-heading text-lg font-bold tracking-tight text-primary sm:text-xl">
        DecisionLab
      </h1>
    </Link>
  );
};

export default Logo;