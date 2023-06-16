import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Navbar";
import Footer from "../Sheard/Footer";


const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;