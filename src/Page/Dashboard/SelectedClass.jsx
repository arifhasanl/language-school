import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaWallet } from "react-icons/fa";


const SelectedClass = () => {
    const { user } = useContext(AuthContext)
    const [classes, SetClasses] = useState([])
    
    const url = `https://summer-camp-school-server-kappa.vercel.app/classes?email=${user?.email}`


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => SetClasses(data))
    }, [])

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://summer-camp-school-server-kappa.vercel.app/classes/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            
                            const remaining = classes.filter(item => item._id !== _id);
                            SetClasses(remaining)
                            
                        }
                    })

            }
        })
    }
    return (
        <div className='w-full mt-14 '>
             
            <div className="w-full">
                
                <div className="uppercase font-semibold h-[60px] flex justify-evenly ">
                <h3 className="text-3xl uppercase my   border-b-4 border-indigo-500 py-4">Selected Class</h3>
                    
                    
                    
                </div>
                <div className="overflow-x-auto mt-10 w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='font-bold'>
                            <tr >
                                <th>#</th>
                                <th >Image</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Available Site</th>
                                <th>Delete</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            
                            {
                                classes.map((item, index) => <tr
                                    key={item._id}
                                    
                                    
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="avatar">
                                            
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className='text-xl font-bold'>
                                        {item.className}
                                    </td>
                                    <td className="font-bold">${item.Price}</td>
                                    <td className="font-bold text-2xl">{item.seats}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)}  className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                    </td>
                                    <td>
                                        <Link state={item} to='/dashboard/payment'>
                                        <button  className="btn btn-ghost bg-blue-700  text-white"><FaWallet></FaWallet></button></Link>
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClass;