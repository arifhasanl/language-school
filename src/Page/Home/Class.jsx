import { useState } from "react";
import ClassItem from "./ClassItem";
import { useEffect } from "react";


const Class = () => {
    const [items,setItem]=useState([])
    console.log(items);
    useEffect(()=>{
        fetch ('http://localhost:5000/useMenu')
    .then(res=>res.json())
    .then(datas=>{
        const populerClass=datas.filter(data=>data.category==='popular_class');
        setItem(populerClass)
    })
    },[])
    return (
    <div className="pb-12">
        <div className="text-center">
            <p className="text-orange-500 mb-5">--- vistis this page---</p>
            <h3 className="text-5xl font-bold">Pupolar Classes</h3>
        </div>
      <div className="grid grid-cols-3 gap-5">
      {
            items.map(item=><ClassItem key={item.id} item={item}></ClassItem>)    
        }
      </div>
    </div>
    );
};

export default Class;