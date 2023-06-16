import React from 'react';

const InstructoreItem = ({item}) => {
    return (
        <div className='mt-12'>
            <div className="card  bg-blue-300 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={item.image} alt="Shoes" className="h-[200px] rounded-xl" />
            </figure>
            <div className="card-body  ">
            <h5 className="text-3xl font-bold">Instructor:<sapn className="text-orange-500 ">{item.instructorName}</sapn></h5>
              
                <p>Student:<sapn className="text-orange-500">{item.students}</sapn></p>
                <h2 className="card-title">ClassName:<sapn className="text-orange-500">{item.className}</sapn></h2>
            </div>
        </div>
        </div>
    );
};

export default InstructoreItem;