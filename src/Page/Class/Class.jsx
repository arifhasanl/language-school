import { useEffect } from "react";
import { useState } from "react";
import ClassItem from "./ClassItem";

import img1 from '../../assets/images/class/img1.jpg'
const Class = () => {
    const [items, setItem] = useState([])
    useEffect(() => {
        fetch('https://music-school-server-arifhasan1402-gmailcom.vercel.app/addClass')
            .then(res => res.json())
            .then(data => {
                const result=data.filter(dt=>dt.role==='Approved')
                setItem(result)
            })
    }, [])
    return (
        <div>
            <div className=" mb-12">
            <div className="relative h-[350px] lg:h-[600px] ">
                <img className="w-full bg-red-600 h-full" src={img1} />
                <div className='absolute  h-full flex w-full items-center justify-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ]'>
                    <div>
                        <h1 className="lg:text-6xl text-3xl  font-bold text-center text-orange-500 ml-20">Our Class <span className="text-green-600 "></span></h1>
                       
                        </div>
                    </div>
                </div>
            </div>
              
                <div className="grid grid-cols-3 gap-5">
                    {
                        items.map(item => <ClassItem key={item.id} item={item}></ClassItem>)
                    }
                </div>
            </div>
    );
};

export default Class;