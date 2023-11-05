import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import useMenu from "../../../Hooks/UseMenu/UseMenu";


const MangeClass = () => {
    const [menu,refetch] = useMenu();
    console.log(menu,'menu');
    const { user } = useContext(AuthContext)


    const handleClassApproved = addClass => {
        fetch(`https://music-school-server-arifhasan1402-gmailcom.vercel.app/addClass/Approved/${addClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' is an Approved Now!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleClassDeny = addClass => {
        fetch(`https://music-school-server-arifhasan1402-gmailcom.vercel.app/addClass/Deny/${addClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                     refetch();

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: ' is an Deny Now!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleClassFeedback = addClass => {
        fetch(`https://music-school-server-arifhasan1402-gmailcom.vercel.app/ addClass/Feedback/${addClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                     refetch();

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Feedback done...!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className=' h-full w-full '>
            <div className='mt-14 '>

                <div className="w-full">

                    <div className="uppercase font-semibold h-[60px] flex justify-evenly ">
                        <h3 className="text-3xl uppercase my   border-b-4 border-indigo-500 py-4">Manage Class</h3>



                    </div>
                    <div className="overflow-x-auto mt-10 w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead className='font-bold'>
                                <tr className=" text-2xl text-black" >

                                    <th >Image</th>
                                    <th>Class Name</th>
                                    <th>Available Seats
                                    </th>


                                    <th>Price</th>


                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    menu.map((addClass) => <tr key={addClass._id}

                                    >


                                        <td>
                                            <div className="avatar">

                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={addClass.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' text-xl font-bold'>
                                            {addClass.className}
                                        </td>
                                        <td className='text-xl font-bold'>
                                            {addClass.seats}
                                        </td>

                                        <td className='text-xl font-bold'>
                                            ${addClass.Price}
                                        </td>

                                        <td>
                                            <div>
                                                <div>
                                                    {addClass.role === 'Approved' ? 'Approved' :
                                                        <button onClick={() => handleClassApproved(addClass)} className=" rounded-full w-28 font-bold bg-green-900 py-2 text-white">Approved</button>
                                                    }
                                                </div>
                                                <div className='mt-1'>
                                                    {addClass.role === 'Deny' ? 'Deny' :
                                                        <button onClick={() => handleClassDeny(addClass)} className=" rounded-full w-28 font-bold bg-orange-600 py-2 text-white">Deny</button>
                                                    }
                                                </div>
                                                <div className='mt-1'>
                                                   
                                                    {addClass.role === 'Feedback' ? 'Feedback' :
                                                        <button onClick={() => handleClassFeedback(addClass)} className=" rounded-full w-28 font-bold bg-blue-950 py-2  text-white">
                                                            
                                                            Feedback</button>
                                                    }
                                                </div>
                                                
                                            </div>
                                           

                                        </td>
                                    </tr>)
                                }


                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MangeClass;