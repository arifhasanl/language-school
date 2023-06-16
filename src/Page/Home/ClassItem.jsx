

const ClassItem = ({ item }) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img  src={item.image} alt="Shoes" className="h-[200px] rounded-xl" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">ClassName:<sapn className="text-orange-500">{item.className}</sapn></h2>
                    <p>Student:<sapn className="text-orange-500">{item.students}</sapn></p>
                    <h5>Instructor:<sapn className="text-orange-500">{item.instructorName}</sapn></h5>
                </div>
            </div>
        </div>
    );
};

export default ClassItem;