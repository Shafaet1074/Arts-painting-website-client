import { Link } from "react-router-dom";
import img from "../../assets/4957136.jpg";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Firebase/FirbeaseProvider/FirebaseProvider";
import { toast } from "react-toastify";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { LoginUser, googleLogIn, githubLogIn } = useContext(AuthContext);

  // Set initial theme on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const preferredTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    // Apply theme to the body immediately
    document.body.classList.add(preferredTheme);
    // Save the theme to localStorage for persistence
    localStorage.setItem("theme", preferredTheme);

    // Listen for system theme changes
    const darkModeListener = (e) => {
      const newTheme = e.matches ? "dark" : "light";
      document.body.classList.remove(savedTheme); // Remove old theme
      document.body.classList.add(newTheme); // Apply new theme
      localStorage.setItem("theme", newTheme); // Save to localStorage
    };

    const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    themeMediaQuery.addEventListener("change", darkModeListener);

    // Clean up listener on component unmount
    return () => {
      themeMediaQuery.removeEventListener("change", darkModeListener);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    LoginUser(email, password)
      .then(() => {
        toast.success("Login successful!");
      })
      .catch((error) => {
        toast.warning(error.message);
      });
  };

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-4 py-10 ">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          className="w-full max-w-lg mt-6 md:mt-0 rounded"
          src={img}
          alt="Login Illustration"
        />
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 max-w-lg shadow-md rounded-lg p-8 space-y-6 bg-white dark:bg-gray-700">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-100 text-center">
          Welcome Back!
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-lg font-medium text-gray-600 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-gray-100"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="text-lg font-medium text-gray-600 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="mt-2 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:text-gray-100"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-all"
          >
            Sign In
          </button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-3 text-gray-500 dark:text-gray-300">or login with</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={googleLogIn}
            className="flex items-center justify-center w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all"
          >
            <FaGoogle />
          </button>
          <button
            onClick={githubLogIn}
            className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all"
          >
            <FaGithub />
          </button>
        </div>

        <p className="text-center text-gray-600 dark:text-gray-300">
          Don’t have an account?
          <Link to="/register" className="text-blue-500 hover:underline ml-1">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
