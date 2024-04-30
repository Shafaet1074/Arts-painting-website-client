import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/FirbeaseProvider/FirebaseProvider";


const Navbar = () => {
  const [items, setItems] =useState('light')
  const {LogOut,user} = useContext(AuthContext)

  useEffect(() =>{
   localStorage.setItem('items',items)
   const localTheme =localStorage.getItem('items')
   document.querySelector('html').setAttribute('data-theme',localTheme)
},[items])
  const handleToggle = (e) =>{
    if(e.target.checked){
      setItems('synthwave')
    }else{
      setItems('light')
    }
  }
  console.log(items);
  return (
<div className="navbar bg-violet-200 md:px-20  shadow-lg shadow-violet-500">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
      <NavLink to='/' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl '}><li><a>Home</a></li></NavLink>
    <NavLink  to='/allPaintaings' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl'}><li><a>All Paintings</a></li></NavLink>
    <NavLink to='/addPaintings' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl'}><li><a>Add Paintings</a></li></NavLink>
    <NavLink to='/myArts' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl'}><li><a>My Arts </a></li></NavLink>
      </ul>
    </div>
    <a className="btn  text-xl  text-black font-bold hover:text-black">ArtisanHaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink to='/' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl '}><li><a>Home</a></li></NavLink>
    <NavLink  to='/allPaintaings' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl'}><li><a>All Paintings</a></li></NavLink>
    <NavLink to='/addPaintings' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl'}><li><a>Add Paintings</a></li></NavLink>
    <NavLink to='/myArts' className={({isActive})=> isActive?'text-white font-bold border border-slate-700   text-xl rounded-lg bg-slate-700' : 'font-bold text-xl'}><li><a>My Arts </a></li></NavLink>
 
  
     

    </ul>
  </div>

  <div className="navbar-end  gap-4">
  <label className="flex cursor-pointer gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <input
   onChange={handleToggle}
   type="checkbox" 

   className="toggle theme-controller"/>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>

{ user ?

<div className="dropdown dropdown-hover">
<div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
    <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
  </div>
</div>
<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
  <li>
  <p>{user?.displayName}</p>
  </li>
  <button onClick={LogOut}> <li><a>Logout</a></li></button>
</ul>
</div>
   :
 
   <>
   <Link to='/login'><button className="btn btn-outline btn-primary">Log IN</button>  </Link>
  <Link to='/Register'><button className="btn btn-outline">Register</button>  </Link>
  
 </>



 }


  </div>
</div>
  );
};

export default Navbar;