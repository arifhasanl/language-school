

const ClassItem = ({item}) => {
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
                <button className="btn btn-secondary font-bold">Select Class</button>
            </div>
        </div>
    </div>
    );
};

export default ClassItem;

