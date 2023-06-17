import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const ClassItem = ({item}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {user}=useContext(AuthContext)
    const {Price,className,instructorName,seats,_id,image}=item;
    const handleAddClass = item => {
        console.log(item);
      
        if(user && user.email){
            const classItem = {menuItemId:_id, className,instructorName,seats,  image, Price, email: user?.email}
            fetch('https://music-school-server-arifhasan1402-gmailcom.vercel.app/selectClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                  
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
        else{
            Swal.fire({
                title: 'Please login to Add class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        
        <div>
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={item.image} alt="Shoes" className="h-[200px] rounded-xl" />
            </figure>
            <div className="card-body  ">
                <h2 className="card-title">ClassName:<sapn className="text-orange-500">{item.className}</sapn></h2>
                <p className="font-bold">Available seats:<sapn className="text-orange-500">{item.seats}</sapn></p>
                <h5 className="font-bold">Instructor:<sapn className="text-orange-500">{item.instructorName}</sapn></h5>
                <p className="font-bold">Price:<sapn className="text-orange-500">{item.Price}</sapn></p>
                <button onClick={()=>handleAddClass(item)} className="btn btn-secondary font-bold">Select Class</button>
            </div>
        </div>
    </div>
    );
    
};

export default ClassItem;

