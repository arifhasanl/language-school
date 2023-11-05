import { useState } from "react";
import ClassItem from "./ClassItem";
import { useEffect } from "react";


const Class = () => {
    const [items,setItem]=useState([])
    console.log(items);
    useEffect(()=>{
        fetch ('https://music-school-server-arifhasan1402-gmailcom.vercel.app/useMenu')
    .then(res=>res.json())
    .then(datas=>{
        const populerClass=datas.filter(data=>data.category==='popular_class');
        setItem(populerClass)
    })
    },[])
    return (
    <div className="pb-12 -mt-10 ">
        <div className="text-center mb-10">
            <p className="text-orange-500 mb-5">--- vistis this page---</p>
            <h3 className="text-5xl font-bold">Pupolar Classes</h3>
        </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {
            items.map(item=><ClassItem key={item.id} item={item}></ClassItem>)    
        }
      </div>
    </div>
    );
};

export default Class;