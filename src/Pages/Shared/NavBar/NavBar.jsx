import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import logo from '../../../../public/logo.png'


const NavBar = () => {

    const { user, logOut } = UseAuth();
    
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const navOptions = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/allProperties">All properties</Link></li>
    <li><Link to="/dashboard">Dashboard</Link></li>
    <li><Link to="/secret">Secret</Link></li>
    {/* <li><Link to="/dashboard/cart">
        <button className="btn">
        <FaShoppingCar className="mr-2" />
            <div className="badge badge-secondary">+{cart.length}</div>
        </button>
        </Link></li> */}
    {
        user ? <>
            {/* <span>{user?.displayName}</span> */}
            <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
        </> : <>
            <li><Link to="/login">Login</Link></li>
        </>
    }
</>




    return (
        <div className="navbar fixed z-10 bg-opacity-10 max-w-screen-xl bg-gray-400 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-green-800 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                   
                    <img  src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
    );
};

export default NavBar;