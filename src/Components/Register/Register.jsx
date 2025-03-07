import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import img from '../../assets/141.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Firebase/FirbeaseProvider/FirebaseProvider';


const Register = () => {
	const {RegisterUser,updateUserProfile} =useContext(AuthContext);
	const navigate =useNavigate();
	const location =useLocation();
	const from= location?.state || "/";

	const handleRegister = e =>{
		e.preventDefault();
		const form=e.target;
		const email=form.email.value;
		const password=e.target.Password.value;
		const photoUrl=e.target.photoUrl.value;
		const name=e.target.name.value;
		
		console.log(email,password,name,photoUrl);
		RegisterUser(email,password)
		.then(result =>{
			updateUserProfile(FullName,Image)
      
      .then(()=>{

      })
      console.log(result.user);
			navigate(from);  
			toast.success('Register Done');
		})
		.catch(error=>{
			toast.warning(error.message)
		})

	}


  return (
    <div className="flex gap-10 ">
        <div className="w-1/2">
         <img className='mt-6' src={img} alt="" />
        </div>

        <div className='w-1/2 mt-20'>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-violet-300 dark:text-gray-800">
	<h1 className="text-2xl font-bold text-center">Login</h1>
	<form onSubmit={handleRegister}  noValidate="" action="" className="space-y-6">
  <div className="space-y-1 text-sm">
			<label  className="block text-xl dark:text-gray-600">Name</label>
			<input type="text" name="name"  placeholder="Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block text-xl dark:text-gray-600">Email</label>
			<input type="email" name="email"  placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block text-xl dark:text-gray-600">Password</label>
			<input type="password" name="Password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			
		</div>
		<div className="space-y-1 text-sm">
			<label  className="block text-xl dark:text-gray-600">PhotoURL</label>
			<input type="text" name="photoUrl" id="password" placeholder="PhotoURL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			
		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>
	</form>

	
	<p className="text-xl text-center  sm:px-6 dark:text-gray-600">Already Have An Account?Please Go.
		<Link to='/login'><a rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Log In</a></Link>
	</p>
</div>
        </div>
    </div>
  );
};

export default Register;