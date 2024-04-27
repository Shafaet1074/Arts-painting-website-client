import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
<div className="navbar bg-violet-200 md:px-20  shadow-lg shadow-violet-500">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
        <li><a>Item 1</a></li>
     
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn  text-xl  text-black font-bold hover:text-black">ArtisanHaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink to='/' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl'}><li><a>Home</a></li></NavLink>
    <NavLink  to='/allPaintaings' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl'}><li><a>All Paintings</a></li></NavLink>
    <NavLink to='/addPaintings' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl'}><li><a>Add Paintings</a></li></NavLink>
    <NavLink to='/myArts' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl'}><li><a>My Arts </a></li></NavLink>
 
  
     

    </ul>
  </div>

  <div className="navbar-end  gap-4">

  <Link to='/login'><button className="btn btn-outline">Log In</button>  </Link>
  <Link to='/Register'><button className="btn btn-outline">Register</button>  </Link>

  <div className="dropdown dropdown-hover">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Navbar;