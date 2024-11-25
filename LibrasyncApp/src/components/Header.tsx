import { useState } from "react";
import Menu from "../assets/menu.svg";
import Profile from "../assets/profile.png";
import Logout from "../assets/logout.svg";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Catalog", onClick: () => navigate("/book-catalog") },
    { label: "Manage Books", onClick: () => navigate("/manage-books") },
    { label: "Reserved Books", onClick: () => console.log("Reserved Books clicked") },
    { label: "Returned Books", onClick: () => console.log("Returned Books clicked") },
    { label: "Add Member", onClick: () => console.log("Returned Books clicked") },
    { label: "Settings", onClick: () => console.log("Settings clicked") },
  ];

  return (
    <>
      <div className="flex h-16 px-2 justify-between bg-gray-200 sticky top-0">
        <button
          className="flex justify-center items-center"
          onClick={toggleSidebar}
        >
          <img className="h-8" src={Menu} alt="Menu" />
        </button>
        <div className="flex items-center justify-evenly w-72">
          <div className="flex items-center gap-2">
            <img className="h-8 rounded-full" src={Profile} alt="Profile" />
            <p className="text-sm font-semibold">Carlo R. Garcia</p>
          </div>
          <button className="px-2 py-1 text-sm font-semibold flex items-center gap-1">
            <img src={Logout} alt="Logout" />
            <p>Logout</p>
          </button>
        </div>
      </div>

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
        menuItems={menuItems}
      />
    </>
  );
};

export default Header;
