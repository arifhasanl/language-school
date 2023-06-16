import { useEffect } from "react";
import { useState } from "react";
import InstructoreItem from "./InstructoreItem";


const Instructores = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(datas => {
                const populerInstructore = datas.filter(data => data.category === 'popular_class');
                setItem(populerInstructore)
            })
    }, [])
    return (
        <div className="pb-12">
            <div className="text-center w-full rounded-md flex justify-center items-center h-[300px] bg-blue-200">
                <h3 className="text-5xl text-orange-500 font-bold pb-5">Pupolar Instructors</h3>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {
                    items.map(item => <InstructoreItem key={item.id} item={item}></InstructoreItem>)
                }
            </div>
        </div> 
    );
};

export default Instructores;