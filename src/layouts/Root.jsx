import { Outlet } from "react-router-dom";
import Navbar from "./sharedComponents/Navbar";


const Root = () => {
    return (
        <div className="bg-purple bg-opacity-10">
            <div className="font-playfair lg:max-w-6xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>

            </div>
        </div>
    );
};

export default Root;