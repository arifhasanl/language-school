import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddedClass = () => {
    const { user } = useContext(AuthContext)


    const handleAddClass = event => {
        
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;

        const seats = form.seats.value;
        const image = form.image.value;

        

        const newClass = { name, price: parseFloat(price), seats, image }

        fetch('https://music-school-server-arifhasan1402-gmailcom.vercel.app/addClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Class Add Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }

            })
    }


    return (
        <div className='w-full h-full bg-teal-500 p-24'>
            <h1 className='text-blue-950 font-bold text-2xl'>Instructor Name: {user.displayName}</h1>
            <h1 className='text-green-950 font-bold my-3 text-xl'>Instructor Email: {user.email}</h1>
            <div className=" my-14 ">


                <h2 className=" text-blue-950  text-4xl text-center font-extrabold">Add A Class</h2>
                <form onSubmit={handleAddClass} >
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-tex font-bold text-xl text-black">Class Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Class Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text font-bold text-xl text-black">Available seats</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seats" placeholder="Available seats" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold text-xl text-black">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text font-bold text-xl text-black">Image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>



                    <input type="submit" value="Add A Class" className="btn font-bold text-white bg-blue-950 btn-block" />

                </form>
            </div>
        </div>
    );
};

export default AddedClass;