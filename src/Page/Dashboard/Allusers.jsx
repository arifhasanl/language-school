import { useQuery } from '@tanstack/react-query';
import { FaUserFriends, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Allusers = () => {
    const {data : users =[], refetch}= useQuery(['users'], async()=>{
        const res = await fetch('https://music-school-server-arifhasan1402-gmailcom.vercel.app/user')
        return res.json();

    })
    console.log(users);
    const handleMakeAdmin = user =>{
        console.log(user,'user');
        fetch(`https://music-school-server-arifhasan1402-gmailcom.vercel.app/user/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleMakeInstructor = user =>{
        fetch(`https://music-school-server-arifhasan1402-gmailcom.vercel.app/user/instructor/${user._id}`,{
            method: 'PATCH'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }

    
    return (
        <div className="w-full  bg-white">
        
        <h3 className="text-3xl font-semibold my-4 text-center text-black">Total Users: {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr className='text-2xl text-black '>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Instructor</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td className='font-bold'>{user.name}</td>
                            <td className='font-bold'>{user.email}</td>
                            
                            <td>
                            {/* onClick={() => handleMakeInstructor(user)} */}
                                { user.role === 'instructor' ? 'instructor' :
                                <button  onClick={() =>  handleMakeInstructor(user)} className="btn btn-ghost bg-red-500  text-white"><FaUserFriends></FaUserFriends></button> 
                                }
                                </td>
                                <td>{ user.role === 'admin' ? 'admin' :
                                <button onClick={() =>  handleMakeAdmin(user)} className="btn btn-ghost bg-green-700  text-white"><FaUserShield></FaUserShield></button> 
                                }</td>
                                
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    
    );
};

export default Allusers;