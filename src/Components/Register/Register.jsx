import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import img from "../../assets/141.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Firebase/FirbeaseProvider/FirebaseProvider";

const Register = () => {
  const { RegisterUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.Password.value;
    const photoUrl = form.photoUrl.value;
    const name = form.name.value;

    RegisterUser(email, password)
      .then((result) => {
        updateUserProfile(name, photoUrl)
          .then(() => {
            toast.success("Registration successful!");
            navigate(from);
          })
          .catch((error) => toast.error(error.message));
      })
      .catch((error) => toast.warning(error.message));
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 px-6 md:px-20 py-10 items-center justify-center min-h-screen ">
      {/* Left Section with Creative Image Display */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative">
        <div className="w-5/6 h-5/6 bg-gradient-to-r from-violet-500 to-violet-300 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
          <img
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            src={img}
            alt="Register Illustration"
          />
        </div>
      </div>

      {/* Right Section with Form */}
      <div className="w-full md:w-1/2 text-gray-100 ">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-700 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center ">Register</h1>

          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name Field */}
            <div className="text-sm">
              <label className="block text-lg font-medium ">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 mt-2 border rounded-lg focus:ring focus:ring-violet-300 focus:outline-none"
                required
              />
            </div>

            {/* Email Field */}
            <div className="text-sm">
              <label className="block text-lg font-medium ">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 mt-2 border rounded-lg focus:ring focus:ring-violet-300 focus:outline-none"
                required
              />
            </div>

            {/* Password Field */}
            <div className="text-sm">
              <label className="block text-lg font-medium ">Password</label>
              <input
                type="password"
                name="Password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 mt-2 border rounded-lg focus:ring focus:ring-violet-300 focus:outline-none"
                required
              />
            </div>

            {/* Photo URL Field */}
            <div className="text-sm">
              <label className="block text-lg font-medium ">Photo URL</label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Enter your photo URL"
                className="w-full px-4 py-3 mt-2 border rounded-lg focus:ring focus:ring-violet-300 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-4 text-white bg-violet-600 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
            >
              Register
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-violet-600 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
