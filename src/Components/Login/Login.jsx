import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Firebase/FirbeaseProvider/FirebaseProvider";
import { toast } from "react-toastify";
import { FaGoogle, FaGithub } from "react-icons/fa";
import img from "../../assets/4957136.jpg";

const Login = () => {
  const { LoginUser, googleLogIn, githubLogIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    LoginUser(email, password)
      .then(() => {
        toast.success("Welcome back to ArtisanHaven.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex md:p-20 p-2   min-h-screen bg-[#FAF9F6] dark:bg-[#0F1014] text-zinc-900 dark:text-zinc-100 transition-colors duration-500 font-sans">
      
      {/* Left Section: Immersive Art Showcase */}
      <div className="hidden rounded-bl-2xl rounded-tl-2xl shadow-lg  lg:block lg:w-1/2 relative overflow-hidden bg-zinc-200 dark:bg-zinc-900">
        <img
          src={img}
          alt="Gallery Exhibition"
          className="absolute inset-0 w-full h-full object-cover  "
        />
        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>
        
        <div className="absolute bottom-16 left-16 text-white pointer-events-none">
          <h2 className="font-serif text-5xl mb-3 drop-shadow-lg">ArtisanHaven</h2>
          <p className="font-light tracking-widest uppercase text-sm opacity-80 drop-shadow-md">
            Artist Portal & Exhibition Management
          </p>
        </div>
      </div>

      {/* Right Section: Minimalist Form */}
      <div className="w-full border border-zinc-300 dark:border-zinc-700 rounded-br-2xl rounded-tr-2xl shadow-lg lg:w-1/2 flex items-center justify-center p-8 sm:p-16 md:p-24 relative">
        <div className="w-full max-w-md space-y-12 relative z-10">
          
          {/* Header */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-serif">Curator Access</h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-light text-lg">
              Sign in to manage your portfolio and exhibitions.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            
            {/* Elegant Inputs */}
            <div className="relative group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
                className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-lg focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
              />
            </div>

            <div className="relative group">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-lg focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors placeholder:text-zinc-400 dark:placeholder:text-zinc-600"
              />
            </div>

            {/* Monochrome Submit Button */}
            <button
              type="submit"
              className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black uppercase tracking-widest text-sm font-semibold py-4 mt-4 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-zinc-900/20 dark:shadow-white/10"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold">Or continue with</span>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800"></div>
          </div>

          {/* Social Logins */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={googleLogIn}
              type="button"
              className="flex-1 flex items-center justify-center gap-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-none hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors font-medium text-sm"
            >
              <FaGoogle className="text-lg" />
              <span>Google</span>
            </button>
            
            <button
              onClick={githubLogIn}
              type="button"
              className="flex-1 flex items-center justify-center gap-3 py-3 border border-zinc-300 dark:border-zinc-700 rounded-none hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors font-medium text-sm"
            >
              <FaGithub className="text-lg" />
              <span>GitHub</span>
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center text-zinc-500 dark:text-zinc-400 font-light mt-8">
            Don't have an account yet?{" "}
            <Link
              to="/register"
              className="text-zinc-900 dark:text-white font-medium border-b border-zinc-900 dark:border-white pb-0.5 hover:opacity-70 transition-opacity ml-1"
            >
              Apply as an Artist
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;