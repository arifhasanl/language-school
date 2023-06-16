import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);
    const landlelogOut=()=>{
        logOut()
        .then(()=>
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'LogOut success full',
            showConfirmButton: false,
            timer: 1500
          })
        )
    }
    return (
        <div className="navbar bg-gray-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <div className=''>
                        <h3 className='text-orange-500 p-0 m-0 text-2xl font-bold'>MUSIC</h3>
                        <h3 className='text-2xl p-0 m-0 font-bold'>SCHOOL</h3>
                    </div>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/instructor'}>Instructor</Link></li>
                        <li><Link to={'/class'}>Classes</Link></li>
                        <li><Link to={'/dashboard'}>Dhasboard</Link></li>
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-white px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/instructor'}>Instructor</Link></li>
                    <li><Link to={'/class'}>Classes</Link></li>
                    <li><Link to={'/dashboard'}>Dhasboard</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button className="btn  btn-outline btn-secondary"><Link onClick={landlelogOut}>LogOut</Link></button> : <button><Link className="btn  btn-outline btn-secondary" to={'/login'}>Login</Link></button>
                }
                 <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                 {
                    user && <img className="w-[50px] h-[50px] rounded-full ml-5 border" src={user.displayName} alt="" />
                }
             </div>
               
            </div>
           
        </div>
    );
};

export default Navbar;