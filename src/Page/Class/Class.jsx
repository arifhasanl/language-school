import { useEffect } from "react";
import { useState } from "react";
import ClassItem from "./ClassItem";


const Class = () => {
    const [items, setItem] = useState([])
    console.log(items);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(datas => {
                const populerClass = datas.filter(data => data.category === 'popular_class');
                setItem(populerClass)
            })
    }, [])
    return (
        <div>
            <div className=" mb-12">
                <div className="text-center h-[300px] rounded-md flex justify-center items-center bg-blue-200">
                    <h3 className="text-5xl text-orange-500 font-bold">Pupolar Classes</h3>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {
                        items.map(item => <ClassItem key={item.id} item={item}></ClassItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Class;