import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'
            style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#023020" : "",
                };
            }}
        >Home</NavLink></li>
        <li><NavLink to='/contactUs'
            style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#023020" : "",
                };
            }}
        >Contact Us</NavLink></li>
        <li><NavLink to='/profile'
            style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#023020" : "",
                };
            }}
        >Profile</NavLink></li>
    </>

    return (
        <div className="navbar bg-inherit  lg:max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="font-bold text-darkGreen text-5xl">URIAN</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn bg-darkGreen hover:bg-green-800 text-white" to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;