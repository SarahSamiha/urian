import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../pages/auth/AuthProvider";
import userDefaultPic from '../../assets/user.png'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log("This is from nav: ", user);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch();
    }

    const navLinks = <>
        <li><NavLink to='/'
            style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#023020" : "",
                };
            }}
        >Home</NavLink></li>
        <li><NavLink to='/register'
            style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "#023020" : "",
                };
            }}
        >Register</NavLink></li>
        {user &&
            <>
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
        }
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
                {
                    user ?
                        <div className="flex gap-2 items-center">
                            <p className="text-lg text-darkGreen font-semibold">{user.displayName}</p>
                            {user.photoURL ?
                                <img className="w-[40px] h-[40px] rounded-full" src={`${user.photoURL}`} alt="" />
                                :
                                <img className="w-[40px] h-[40px] rounded-full" src={userDefaultPic} alt="" />
                            }
                            <button onClick={handleSignOut} className="btn bg-darkGreen hover:bg-green-800 text-white">Sign Out</button>
                        </div>
                        :
                        <Link to='/login' className="btn bg-darkGreen hover:bg-green-800 text-white">Login</Link>
                }
            </div>

        </div>
    );
};

export default Navbar;