import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/banner/img1.jpg'
import img2 from '../../assets/images/banner/img2.jpg'
import img3 from '../../assets/images/banner/img3.jpg'
import img4 from '../../assets/images/banner/img4.jpg'
const Banner = () => {
    return (
        <Carousel>
        <div className="relative bg-gray-500 h-[500px] ">
            <img src={img1} />
           <div className="content absolute top-1/3 text-left px-20 left-0">
           <h1 className="text-7xl font-bold text-orange-500">A music school is an educational institution specialized in the study, training, <span className="text-green-600">and research of music</span></h1>
           <button className="btn mt-10 btn-secondary">Paid Now</button>
           </div>
        </div>
        <div className="relative h-[500px] ">
            <img src={img2} />
           <div className="content absolute top-1/3 text-left px-20 left-0">
           <h1 className="text-7xl font-bold text-orange-500">A music school is an educational institution specialized in the study, training, <span className="text-green-600">and research of music</span></h1>
           <button className="btn mt-10 btn-secondary">Paid Now</button>
           </div>
        </div>
        <div className="relative">
            <img src={img3} />
           <div className="content absolute top-1/3 text-left px-20 left-0">
           <h1 className="text-7xl font-bold text-orange-500">A music school is an educational institution specialized in the study, training, <span className="text-green-600">and research of music</span></h1>
           <button className="btn mt-10 btn-secondary">Paid Now</button>
           </div>
        </div>
        <div className="relative">
            <img src={img4} />
           <div className="content absolute top-1/3 text-left px-20 left-0">
           <h1 className="text-7xl font-bold text-orange-500">A music school is an educational institution specialized in the study, training, <span className="text-green-600">and research of music</span></h1>
           <button className="btn mt-10 btn-secondary">Paid Now</button>
           </div>
        </div>
    </Carousel>
    );
  }

export default Banner;
