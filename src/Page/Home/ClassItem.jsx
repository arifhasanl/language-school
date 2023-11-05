import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";


const ClassItem = ({ item }) => {
    const retingNumber = 3.5;
    console.log(item);
    return (
        <div>
            <div className="card  bg-blue-900 shadow-xl">
                <figure className="px-5 pt-5">
                    <img src={item.image} alt="Shoes" className="h-[250px] w-full rounded-xl" />
                </figure>
                <div className="card-body ">

                   <div className="flex justify-between">
                   <div >
                        <h2 className="card-title text-white text-1xl">ClassName:<sapn className="text-orange-500 text-1xl">{item.className}</sapn></h2>
                        <p className="text-white text-1xl">Student:<sapn className=" text-orange-500">{item.students}</sapn></p>
                        <h5 className="text-white text-1xl">Instructor:<sapn className="text-orange-500">{item.instructorName}</sapn></h5>
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