import { NavLink, Outlet } from "react-router-dom";
import { FaAd, FaBook, FaCalendar,  FaHome, FaSearch, FaShoppingCart, FaUsers, } from "react-icons/fa";
import UseAdmin from "../Hooks/UseAdmin";
import { CgProfile } from "react-icons/cg";
import { MdAddHomeWork } from "react-icons/md";
import { BsChatSquareQuote, BsHouseAddFill } from "react-icons/bs";
import { PiGitPullRequestBold } from "react-icons/pi";


const Dashboard = () => {


    // const [isAdmin] =UseAdmin();
    const isAdmin = true;
    const isAgent = false;




    return (
    

    <div className="flex">
    {/* dashboard side bar */}
    <div className="w-64 min-h-screen bg-orange-400">
      <ul className="menu p-4">
        {isAdmin ? (
          <>
             <li>
            <NavLink to="/dashboard/adminProfile">
            <CgProfile />Admin Profile.
            </NavLink>
          </li>
         
          <li>
            <NavLink to="/dashboard/manageProperties">
            <BsHouseAddFill />
              Manage Properties.
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageReviews">
              <FaBook/>
              Manage reviews.
            </NavLink>
            <NavLink to="/dashboard/manageUsers">
              <FaUsers/>
              Manage Users.
            </NavLink>
          </li>
            {/* ... other admin links */}
          </>
        ) : isAgent ? (
          <>
            <li>
              <NavLink to="/dashboard/agentProfile">
              <CgProfile />Agent Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addProperty">
              <BsHouseAddFill />Add Property
              </NavLink>
            </li>
           
            <li>
              <NavLink to="/dashboard/addProperty">
              <MdAddHomeWork />My added properties
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addProperty">
                <FaHome></FaHome>My sold properties
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addProperty">
              <PiGitPullRequestBold />Requested properties
              </NavLink>
            </li>
            {/* ... other seller links */}
          </>
        ) : (
          <>
               <li>
            <NavLink to="/dashboard/myProfile">
            <CgProfile />My Profile
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>My Cart:({cart.length})
            </NavLink>
          </li> */}
          <li>
            <NavLink to="/dashboard/wishlist">
              <FaCalendar></FaCalendar>Wishlist
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/propertyBought">
              <FaAd/>Property bought
            </NavLink>
            <NavLink to="/dashboard/myReviews">
            <BsChatSquareQuote />My reviews 
            </NavLink>
          </li>
            {/* ... other user links */}
          </>
        )}

        {/* shared nav links */}
        <div className="divider"></div>
        <li>
          <NavLink to="/">
            <FaHome></FaHome>Home
          </NavLink>
        </li>
        
      
      </ul>
    </div>
    <div className="flex-1 p-8">
      <Outlet />
    </div>
  </div>
    );
};

export default Dashboard;