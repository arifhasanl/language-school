import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers, FaBookmark } from 'react-icons/fa';
import useInstructore from '../../Hooks/useInstructore';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [isInstructor] = useInstructore()

    const [isAdmin] = useAdmin()
    return (
        <div>
              <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-[#99f8fa] flex flex-col items-center ">

                    {/* Page content here */}
                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>


                </div>
                <div className="drawer-side bg-[#ffb52b]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80">



                        {isAdmin ?
                            (
                                <div className=' font-bold'>



                                    <li><NavLink to="/dashboard/alluser"><FaWallet></FaWallet> Manage Users</NavLink></li>

                                    <li><NavLink to="/dashboard/mangeclass"><FaBookmark></FaBookmark>Manage Classes</NavLink></li>
                                </div>
                            ) :

                            isInstructor ?
                                (
                                    <div className=' font-bold'>
                                        <li><NavLink to="/dashboard/addClass"><FaBookmark></FaBookmark>Add a Class</NavLink></li>
                                        <li><NavLink to="/dashboard/instructorClass"><FaCalendarAlt></FaCalendarAlt>My Class</NavLink></li>


                                    </div>
                                ) : (
                                    <div className=' font-bold'>
                                        <li><NavLink to="/dashboard/selecteClass"><FaBookmark></FaBookmark>My Selected Class</NavLink></li>
                                        <li><NavLink to="/dashboard/enrol"><FaCalendarAlt></FaCalendarAlt> Enroll Class</NavLink></li>

                                        <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                                    </div>
                                )

                        }
                        <div className="divider"></div>
                        <div className=' font-bold'>
                            <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                            <li><NavLink to="/class"><FaWallet></FaWallet>Classes</NavLink></li>
                            <li><NavLink to="/instructor"><FaBookmark></FaBookmark>instructors</NavLink></li>

                        </div>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;