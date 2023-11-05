import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import './class.css'

const ClassItem = ({ item }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const retingNumber = 2.8
    const { user } = useContext(AuthContext)
    const { Price, className, instructorName, seats, _id, image } = item;
    const handleAddClass = item => {
        console.log(item);

        if (user && user.email) {
            const classItem = { menuItemId: _id, className, instructorName, seats, image, Price, email: user?.email }
            fetch('https://music-school-server-arifhasan1402-gmailcom.vercel.app/selectClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {

                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to Add class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (

        <div>
            <div className="card  bg-blue-900 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={item.image} alt="Shoes" className="h-[250px] rounded-xl" />
                </figure>
                <div className="card-body  ">

                    <div className="flex justify-between">
                        <div>
                            <h2 className="card-title text-white">ClassName:<sapn className="text-orange-500">{item.className}</sapn></h2>
                            <p className="font-bold text-white">Available seats:<sapn className="text-orange-500">{item.seats}</sapn></p>
                            <h5 className="font-bold text-white">Instructor:<sapn className="text-orange-500">{item.instructorName}</sapn></h5>
                            <p className="font-bold text-white">Price:<sapn className="text-orange-500">{item.Price}</sapn></p>
                            <button onClick={() => handleAddClass(item)} className="btn mt-2 border-0 btn-secondary font-bold select-btn ">Select Class</button>
                        </div>
                        <div className='flex'>
                            <Rating
                                placeholderRating={retingNumber}
                                readonly
                                emptySymbol={<FaRegStar className='text-white'></FaRegStar>}

                                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                                fullSymbol={<FaStar className=''></FaStar>}
                            >
                            </Rating>
                            <p className='text-end ml-3 text-white'>{retingNumber}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default ClassItem;

