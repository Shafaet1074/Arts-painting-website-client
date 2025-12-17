import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/FirbeaseProvider/FirebaseProvider";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const { LogOut, user } = useContext(AuthContext);

  useEffect(() => {
    // Set the theme in localStorage and apply it
    const localTheme = localStorage.getItem("theme") || "light";
    setTheme(localTheme);
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, []);

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.querySelector("html").setAttribute("data-theme", newTheme);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`navbar sticky top-0 z-50 shadow-md px-4 md:px-20 transition-all duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Navbar Start */}
      <div className="navbar-start">
        <button className="btn btn-ghost lg:hidden" onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-8 6h8"
            />
          </svg>
        </button>

        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center w-12 h-12 px-4 py-2 rounded-full  bg-violet-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="flex-shrink-0 w-5 h-5 rounded-full text-white"
              >
                <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span className="self-center text-2xl font-extrabold">
              <Link
                to="/"
                className="text-xl font-bold text-indigo-600 dark:text-indigo-400 transition-colors duration-300"
              >
                ArtisanHaven
              </Link>
            </span>
          </a>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "All Paintings", path: "/allPaintings" },
            { name: "Add Paintings", path: "/addpaintings" },
            { name: "My Arts", path: "/myarts" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-indigo-600 font-semibold px-4 py-2 rounded transition-all duration-200"
                  : `font-bold ${
                      theme === "dark" ? "text-gray-300" : "text-gray-800"
                    } hover:bg-indigo-500 px-4 py-2 rounded transition-all duration-200`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end hidden lg:flex items-center gap-4">
        <label className="flex items-center cursor-pointer gap-2">
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={theme === "dark"}
            onChange={handleToggle}
            aria-label="Toggle Dark Mode"
          />
        </label>
        {user ? (
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src={user?.photoURL}
                  className="object-cover"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-10 p-2 shadow bg-white dark:bg-gray-800 text-black dark:text-white rounded-box w-52"
            >
              <li>
                <p>{user?.displayName}</p>
              </li>
              <button
                onClick={LogOut}
                className="btn btn-sm btn-outline btn-error mt-2"
              >
                Logout
              </button>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login">
              <button className="btn btn-outline btn-primary">Log In</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline">Register</button>
            </Link>
          </div>
        )}
      </div>

      {/* Mobile Theme Toggle */}
      <div className="navbar-end lg:hidden flex items-center gap-4">
        <label className="flex items-center cursor-pointer gap-2">
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={theme === "dark"}
            onChange={handleToggle}
            aria-label="Toggle Dark Mode"
          />
        </label>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className={`fixed top-0 left-0 w-64 h-full ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-800"
          } dark:bg-gray-900 text-white shadow-lg z-50 p-5 transition-all duration-300`}
        >
          <button
            className="btn btn-sm btn-circle btn-error absolute top-4 right-4"
            onClick={toggleSidebar}
          >
            ✕
          </button>
          <div className="mt-8">
            <ul className="flex flex-col gap-4">
              {[
                { name: "Home", path: "/" },
                { name: "All Paintings", path: "/allPaintings" },
                { name: "Add Paintings", path: "/addpaintings" },
                { name: "My Arts", path: "/myarts" },
              ].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-indigo-600 font-semibold px-4 py-2 rounded"
                      : "font-semibold text-white hover:bg-indigo-500 px-4 py-2 rounded transition-all duration-200"
                  }
                  onClick={toggleSidebar}
                >
                  {item.name}
                </NavLink>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-2">
              {user ? (
                <button
                  onClick={LogOut}
                  className="btn btn-outline btn-error w-full"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link to="/login">
                    <button className="btn btn-outline btn-primary w-full">
                      Log In
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="btn btn-outline w-full">Register</button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
