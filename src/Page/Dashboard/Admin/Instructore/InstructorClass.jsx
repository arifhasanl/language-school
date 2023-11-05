import useMenu from "../../../../Hooks/UseMenu/UseMenu";


const InstructorClass = () => {
    const [menu, refetch] = useMenu();
    return (
        <div className=' h-full w-full'>
            <div className='w-full mt-14 '>

                <div className="w-full">

                    <div className="uppercase font-semibold h-[60px] flex justify-evenly ">
                        <h3 className="text-4xl text-blue-950 uppercase my font-bold  border-b-4 border-indigo-500 py-4">My Class</h3>



                    </div>
                    <div className="overflow-x-auto mt-10 w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead className='font-bold'>
                                <tr className="text-2xl text-black" >

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
                                        <td className=' text-sm font-bold'>
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


                                                <div className='mt-1'>
                                                    <button className=" rounded-full w-28 font-bold bg-violet-950 py-2  text-white text-1xl">{addClass.role ? addClass.role : 'pending.... '} </button>

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

export default InstructorClass;