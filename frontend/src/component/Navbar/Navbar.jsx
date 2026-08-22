import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  House,
  Workflow,
  Layers,
  LogIn,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Logo from "../../pages/shared/Logo/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  const location = useLocation();

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: House,
    },
    {
      name: "How It Works",
      path: "/how-it-works",
      icon: Workflow,
    },
    {
      name: "Features",
      path: "/features",
      icon: Layers,
    },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on outside click + Escape key
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!isMenuOpen) return;

      const clickedInsideMenu =
        mobileMenuRef.current?.contains(event.target);

      const clickedMenuButton =
        menuButtonRef.current?.contains(event.target);

      if (!clickedInsideMenu && !clickedMenuButton) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-base-200 bg-base-100/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-base-content/70 hover:bg-base-200 hover:text-primary"
                  }`}
                >
                  <Icon size={18} strokeWidth={2} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/login"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-base-content/70 transition-all duration-200 hover:bg-base-200 hover:text-primary"
            >
              <LogIn size={18} />
              <span>Login</span>
            </Link>

            <Link
              to="/register"
              className="btn btn-primary gap-2 rounded-lg px-5"
            >
              <span>Get Started</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="btn btn-ghost btn-square lg:hidden"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            isMenuOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-base-200 py-4">
            
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-base-content/75 hover:bg-base-200 hover:text-primary"
                    }`}
                  >
                    <Icon size={20} strokeWidth={2} />
                    <span>{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Divider */}
            <div className="my-3 border-t border-base-200" />

            {/* Mobile Actions */}
            <div className="flex flex-col gap-2">
              
              <Link
                to="/login"
                onClick={closeMenu}
                className="flex min-h-12 items-center gap-3 rounded-xl px-4 text-sm font-medium text-base-content/75 transition-all duration-200 hover:bg-base-200 hover:text-primary"
              >
                <LogIn size={20} />
                <span>Login</span>
              </Link>

              <Link
                to="/register"
                onClick={closeMenu}
                className="btn btn-primary min-h-12 w-full gap-2 rounded-xl"
              >
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;