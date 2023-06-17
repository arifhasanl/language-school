import { Slide } from 'pure-react-carousel';
import React from 'react';

const DasContent = () => {
    return (
        <div>
            <div className='w-full h-full '>
            <h3 className="text-5xl uppercase my-10 text-center  border-b-4 border-red-950 font-bold py-4">dashboard</h3>
            <div>
                <Slide>
                    <h1 className="text-5xl font-bold  text-center text-blue-950">BECOME PART OF SOMETHING
                        BIGGER THAN YOURSELF!</h1>
                </Slide>

              

            </div>
            <div className="text-center">
                <button className="btn no-animation text-white bg-blue-950">Look Left Site</button>
            </div>
        </div>
        </div>
    );
};

export default DasContent;