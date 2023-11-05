import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/banner/img5.jpg'
import img2 from '../../assets/images/banner/img2.jpg'
import img3 from '../../assets/images/banner/img3.jpg'
import img4 from '../../assets/images/banner/img4.jpg'
import './banner.css'
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Banner = () => {
    const [text] = useTypewriter({
        words: ['Hindi Language.', 'English Language.', 'Arabic Language.'],
        loop: 0
    })
    return (
        <Carousel className="">
            <div className="relative h-[350px] lg:h-[600px] ">
                <img className="w-full bg-red-600 h-full" src={img1} />
                <div className='absolute  h-full flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ]'>
                    <div>
                        <h1 className="lg:text-6xl text-3xl  font-bold text-start text-orange-500 ml-20">A Language school is an educational institution specialized in the study, training, <span className="text-green-600 ">{text}<Cursor></Cursor></span></h1>
                        <div className='banner-btn ml-20 mt-10'>

                            <button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Bye Now

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[350px] lg:h-[600px] ">
                <img className="w-full bg-red-600 h-full" src={img3} />
                <div className='absolute  h-full flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ]'>
                    <div>
                        <h1 className="lg:text-6xl text-3xl  font-bold text-start text-orange-500 ml-20">A Language school is an educational institution specialized in the study, training, <span className="text-green-600 ">{text}<Cursor></Cursor></span></h1>
                        <div className='banner-btn ml-20 mt-10'>

                            <button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Bye Now

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[350px] lg:h-[600px] ">
                <img className="w-full bg-red-600 h-full" src={img2} />
                <div className='absolute  h-full flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ]'>
                    <div>
                        <h1 className="lg:text-6xl text-3xl  font-bold text-start text-orange-500 ml-20">A Language school is an educational institution specialized in the study, training, <span className="text-green-600 ">{text}<Cursor></Cursor></span></h1>
                        <div className='banner-btn ml-20 mt-10'>

                            <button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Bye Now

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[350px] lg:h-[600px] ">
                <img className="w-full bg-red-600 h-full" src={img4} />
                <div className='absolute  h-full flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ]'>
                    <div>
                        <h1 className="lg:text-6xl text-3xl  font-bold text-start text-orange-500 ml-20">A Language school is an educational institution specialized in the study, training, <span className="text-green-600 ">{text}<Cursor></Cursor></span></h1>
                        <div className='banner-btn ml-20 mt-10'>

                            <button>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Bye Now

                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </Carousel>
    );
}

export default Banner;
