import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/FirbeaseProvider/FirebaseProvider";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { LogOut, user } = useContext(AuthContext);

  useEffect(() => {
    // 1. Get the saved theme
    const localTheme = localStorage.getItem("theme") || "light";
    setTheme(localTheme);
    
    // 2. Set attribute for daisyUI
    document.documentElement.setAttribute("data-theme", localTheme);
    
    // 3. Set class for Tailwind's dark: modifiers
    if (localTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    
    // 1. Update attribute for daisyUI
    document.documentElement.setAttribute("data-theme", newTheme);
    
    // 2. Update class for Tailwind's dark: modifiers
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/allPaintings" },
    { name: "Exhibit Art", path: "/addpaintings" },
    
  ];

  return (
    <>
      {/* Sticky Header with Backdrop Blur */}
      <div
        className={`navbar sticky top-0 z-50 px-6 md:px-12 lg:px-20 border-b transition-colors duration-300 backdrop-blur-md ${
          theme === "dark"
            ? "bg-black/80 border-zinc-800 text-zinc-100"
            : "bg-white/80 border-zinc-200 text-zinc-900"
        }`}
      >
        {/* Brand / Logo */}
        <div className="navbar-start">
          <button
            className="btn btn-ghost lg:hidden -ml-3"
            onClick={toggleSidebar}
            aria-label="Open Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-8 6h8" />
            </svg>
          </button>

          <Link to="/" className="flex items-center gap-3 group">
            {/* Minimalist Typographic Logo */}
            <span className="font-serif text-2xl tracking-tight font-medium">
              Artisan<span className="font-light italic text-zinc-500">Haven</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm tracking-widest uppercase transition-all duration-300 py-1 ${
                    isActive
                      ? "border-b-2 border-current font-medium"
                      : "text-zinc-500 hover:text-current hover:border-b-2 hover:border-zinc-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>

        {/* User Actions & Theme Toggle */}
        <div className="navbar-end flex items-center gap-4">
          {/* Theme Toggle Icon (Sun/Moon) */}
          <button
            onClick={handleToggle}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            )}
          </button>

          {user ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ring-1 ring-zinc-200 dark:ring-zinc-700">
                <div className="w-9 rounded-full">
                  <img
                    alt="Artist Avatar"
                    src={user?.photoURL || "https://ui-avatars.com/api/?name=Artist&background=random"}
                    className="object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className={`menu dropdown-content mt-4 z-[1] p-4 shadow-xl border rounded-none w-56 ${
                  theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-100"
                }`}
              >
                <li className="mb-2 px-2">
                  <span className="text-xs uppercase tracking-widest text-zinc-500">Signed in as</span>
                  <span className="font-medium truncate">{user?.displayName || "Artist"}</span>
                </li>
                <div className="divider my-0"></div>
                <li>
                  <button
                    onClick={LogOut}
                    className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 mt-2"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="hidden md:flex gap-3">
              <Link to="/login">
                <button className="btn btn-ghost rounded-none uppercase tracking-widest text-xs px-6">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className={`btn rounded-none uppercase tracking-widest text-xs px-6 border-none ${
                  theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'
                }`}>
                  Join
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={toggleSidebar}
          ></div>
          
          {/* Sidebar Panel */}
          <div
            className={`relative w-72 h-full shadow-2xl p-6 flex flex-col transition-transform transform ${
              theme === "dark" ? "bg-zinc-950 text-white" : "bg-white text-black"
            }`}
          >
            <div className="flex justify-between items-center mb-10">
              <span className="font-serif text-xl tracking-tight font-medium">ArtisanHaven</span>
              <button
                className="btn btn-ghost btn-circle btn-sm"
                onClick={toggleSidebar}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col gap-6 flex-grow">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg tracking-widest uppercase transition-colors ${
                      isActive ? "font-semibold" : "text-zinc-500 hover:text-current"
                    }`
                  }
                  onClick={toggleSidebar}
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>

            <div className="mt-auto flex flex-col gap-4">
              {user ? (
                <button
                  onClick={() => {
                    LogOut();
                    toggleSidebar();
                  }}
                  className="btn btn-outline rounded-none w-full border-red-500 text-red-500 hover:bg-red-500 hover:border-red-500"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link to="/login" onClick={toggleSidebar}>
                    <button className="btn btn-outline rounded-none w-full uppercase tracking-widest text-sm">
                      Login
                    </button>
                  </Link>
                  <Link to="/register" onClick={toggleSidebar}>
                    <button className={`btn rounded-none w-full uppercase tracking-widest text-sm border-none ${
                      theme === 'dark' ? 'bg-white text-black hover:bg-zinc-200' : 'bg-black text-white hover:bg-zinc-800'
                    }`}>
                      Join as Artist
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;