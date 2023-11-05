import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import './addclass.css'

const AddedClass = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    const onSubmit = data => {
 


        fetch('https://music-school-server-arifhasan1402-gmailcom.vercel.app/addClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                
                if(data.insertedId){
                    reset()
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
        <div className='w-full h-full  p-24'>
            <div className=" my-14 ">


                <h2 className=" text-blue-950 mb-10  text-4xl text-center font-extrabold">Add A Class</h2>
                <form onSubmit={handleSubmit(onSubmit)}  >
                    {/* form name and quantity row */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-tex font-bold text-xl text-black">Instructor Name:</span>
                            </label>
                            <label className="input-group">
                                <input type="text"{...register('instructorName', { required: true })} name="instructorName"defaultValue={user.displayName} placeholder="instructore name" className="input input-bordered w-full" />
                                
                            </label>
                            {errors.instructorName && <span className="text-red-800">instructorName is required</span>}
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-tex font-bold text-xl text-black">Instructor Email:</span>
                            </label>
                            <label className="input-group">
                                <input type="email"{...register('eamil', { required: true })} name="email" placeholder="eamil" defaultValue={user.email} className="input input-bordered w-full" />
                                
                            </label>
                            {errors.eamil && <span className="text-red-800">eamil is required</span>}
                        </div>
                    </div>
                    <div className="md:flex mb-4 gap-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-tex font-bold text-xl text-black">Class Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text"{...register('className', { required: true })} name="className" placeholder="Class Name" className="input input-bordered w-full" />
                               
                            </label>
                            {errors.className && <span className="text-red-800">className is required</span>}
                        </div>
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-xl text-black">Available seats</span>
                            </label>
                            <label className="input-group">
                                <input type="text"{...register('seats', { required: true })} name="seats" placeholder="Available seats" className="input input-bordered w-full" />
                                
                            </label>
                            {errors.seats && <span className="text-red-800">seats is required</span>}
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex gap-4 mb-4">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-bold text-xl text-black">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="number"{...register('Price', { required: true })} name="Price" placeholder="Price Name" className="input input-bordered w-full" />
                                
                            </label>
                            {errors.Price && <span className="text-red-800">Price is required</span>}
                        </div>
                       
                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text font-bold text-xl text-black">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="number"{...register('rating', { required: true })} name="rating" placeholder="rating" className="input input-bordered w-full" />
                                 
                            </label>
                            {errors.rating && <span className="text-red-800">rating is required</span>}
                        </div>
                    </div>
                    <div className="form-control md:w-1/2 mb-8 ">
                            <label className="label">
                                <span className="label-text font-bold text-xl text-black">Image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text"{...register('image', { required: true })} name="image" placeholder="Photo URL" className="input input-bordered w-full" />
                                 
                            </label>
                            {errors.image && <span className="text-red-800">image is required</span>}
                        </div>


                    <input type="submit" value="Add A Class" className="py-2 rounded-md text-center px-3 text-2xl font-bold text-white bg-blue-950  cursor-pointer" />

                </form>
            </div>
        </div>
    );
};

export default AddedClass;