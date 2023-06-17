

const Enrol = () => {
    return (
        <div>
            <h3 className="text-3xl uppercase my   border-b-4 border-indigo-500 py-4">Enroll Classess</h3>

            <div>
                <table className="table w-full">
                    {/* head */}
                    <thead className='font-bold'>
                        <tr >
                            <th>#</th>
                            <th >Image</th>
                            <th>Class Name</th>
                            <th>Payment </th>
                            <th>Enroll class</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>


                        <tr



                        >

                            <td>

                            </td>
                            <td>
                                <div className="avatar">

                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src='' alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </td>
                            <td className='text-xl font-bold'>

                            </td>
                            <td className="font-bold"></td>
                            <td className="font-bold text-2xl"></td>


                        </tr>



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Enrol;