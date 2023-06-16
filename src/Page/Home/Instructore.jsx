import { useEffect } from "react";
import { useState } from "react";
import InstructoreItem from "./InstructoreItem";


const Instructore = () => {
    const [items,setItem]=useState([])
    console.log('item',items);
    useEffect(()=>{
    fetch ('menu.json')
    .then(res=>res.json())
    .then(datas=>{
        const populerInstructore=datas.filter(data=>data.category==='popular_class');
        setItem(populerInstructore)
    })
    },[])
    return (
        <div className="pb-12">
        <div className="text-center">
            <p className="text-orange-500 mb-5">--- Visit Instructors Section---</p>
            <h3 className="text-5xl font-bold pb-5">Pupolar Instructors</h3>
        </div>
      <div className="grid grid-cols-3 gap-5">
      {
            items.map(item=><InstructoreItem key={item.id} item={item}></InstructoreItem>)    
        }
      </div>
    </div>
    );
};

export default Instructore;