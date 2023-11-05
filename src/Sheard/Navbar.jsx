import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import ActiveLink from "./ActiveLink";
import { FaBars, FaUserCircle, FaWindowClose } from 'react-icons/fa';
import { useState } from "react";
import './Navbar.css'
import useAdmin from "../Hooks/useAdmin";
import useInstructore from "../Hooks/useInstructore";
const Navbar = () => {
    const [isAdmin]=useAdmin();
    const [isInstructor]=useInstructore()
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)
    const landlelogOut = () => {
        logOut()
            .then(() =>
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
        <div>
            <div className='hidden md:block'>

                <div className='container  mx-auto flex box justify-between overflow-hidden h-16 items-center bg-[#110032]'>
                    <div className="header-logo ml-4 pt-2">
                        <h3 className='text-4xl  font-bold ml-3 mb-3 text-[#34ffea] logo'>Languase</h3>
                    </div>
                    <div className="header-menu font-bold text-white">
                        <nav>
                            <ActiveLink to='/'>Home</ActiveLink>
                            <ActiveLink to={'/Instructor'}>Instructor</ActiveLink>
                            <ActiveLink to={'/class'}>Classes</ActiveLink>
                            {
                                isAdmin?<ActiveLink to={'/Dashboard/alluser'}>Dashboard</ActiveLink>:isInstructor?<ActiveLink to={'/Dashboard/instructorClass'}>Dashboard</ActiveLink>:<ActiveLink to={'/Dashboard/selecteClass'}>Dashboard</ActiveLink>
                            }
                            
                        </nav>
                    </div>
                    <div className='login-bar flex items-center gap-1 mr-4'>
                        <div className=' pt-1'>
                        {
                                    user ? <>
                                        <div className="tooltip tooltip-bottom mr-6" data-tip={user?.displayName}>
                                            <button ><img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL} alt="" /></button>
                                        </div>
                                    </> : <FaUserCircle className='w-[40px] mr-6 bg-white h-[40px] rounded-full'></FaUserCircle>
                                }

                        </div>
                        <div>

                            {
                                user ? <Link onClick={landlelogOut} className="px-4 py-1 border rounded-md  text-white border-white border-2 mr-3" >LogOut</Link> : <Link className="px-4 py-1 border border-2 text-white rounded-md border-white border-2 " to={'/login'}>Login</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className=' block md:hidden bg-[#110032]'>
                <div className='container   mx-auto flex box justify-between overflow-hidden items-center '>
                    <div className="header-logo  pt-2">
                        <h3 className='text-2xl   font-bold mb-3 ml-3 text-[#34ffea] logo'>Languase</h3>
                    </div>
                    <div className='login-bar  flex items-center   mr-4'>
                            <div>
                                {
                                    user ? <>
                                        <div className="tooltip tooltip-bottom mr-6" data-tip={user?.displayName}>
                                            <button ><img className="w-[40px] h-[40px] rounded-full" src={user?.photoURL} alt="" /></button>
                                        </div>
                                    </> : <FaUserCircle className='w-[40px] mr-6 bg-white h-[40px] rounded-full'></FaUserCircle>
                                }

                            </div>

                            <div>

                                {
                                    user ? <Link onClick={landlelogOut} className="px-4 py-1 border rounded-md  text-[#34ffea] border-orange-500 border-4 mr-3" >LogOut</Link> : <Link className="px-4 py-1 border border-4 text-[#34ffea] rounded-md border-orange-500 " to={'/login'}>Login</Link>
                                }
                            </div>
                        </div>
                </div>
                <div className={isOpen ? 'block mt-10' : 'hidden'}>
                    <div className='flex justify-between'>
                        <div className="header-menu font-bold text-white  pb-4">
                            <nav className='responsive flex gap-2 flex-col'>
                                <ActiveLink to='/'>Home</ActiveLink>
                                <ActiveLink to={'/Instructor'}>Instructor</ActiveLink>
                                <ActiveLink to={'/class'}>Classes</ActiveLink>
                                {
                                isAdmin?<ActiveLink to={'/Dashboard/alluser'}>Dashboard</ActiveLink>:isInstructor?<ActiveLink to={'/Dashboard/instructorClass'}>Dashboard</ActiveLink>:<ActiveLink to={'/Dashboard/selecteClass'}>Dashboard</ActiveLink>
                                }
                              
                            </nav>
                        </div>
                        <div className='mr-4'>
                        <div className='text-white header-bar-icon cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                            {
                                isOpen ? <  FaWindowClose ></FaWindowClose> : <FaBars></FaBars>
                            }
                        </div>

                    </div>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};
// return (
//     <div className="navbar bg-gray-400">
//         <div className="navbar-start">
//             <div className="dropdown">
//                 <div className=''>
//                     <h3 className='text-orange-500 p-0 m-0 text-2xl font-bold'>LEARN</h3>
//                     <h3 className='text-2xl p-0 m-0 font-bold'>SCHOOL</h3>
//                 </div>
//                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                 </label>

//                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
//                     <li><Link to={'/'}>Home</Link></li>
//                     <li><Link to={'/instructor'}>Instructor</Link></li>
//                     <li><Link to={'/class'}>Classes</Link></li>
//                     <li><Link to={'/dashboard/'}>Dhasboard</Link></li>
//                 </ul>
//             </div>

//         </div>
//         <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal text-white px-1">
//                 <li><Link to={'/'}>Home</Link></li>
//                 <li><Link to={'/instructor'}>Instructor</Link></li>
//                 <li><Link to={'/class'}>Classes</Link></li>
//                 <li><Link to={'/dashboard'}>Dhasboard</Link></li>
//             </ul>
//         </div>
//         <div className="navbar-end">
//             {
//                 user ? <button className="btn  btn-outline btn-secondary"><Link onClick={landlelogOut}>LogOut</Link></button> : <button><Link className="btn  btn-outline btn-secondary" to={'/login'}>Login</Link></button>
//             }
//              <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
//              {
//                 user && <img className="w-[50px] h-[50px] rounded-full ml-5 border" src={user.displayName} alt="" />
//             }
//          </div>

//         </div>

//     </div>
// );
// };

export default Navbar;