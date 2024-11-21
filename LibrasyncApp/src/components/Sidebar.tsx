import { SidebarProps } from "../types/SidebarProps";
import Profile from "../assets/profile.png";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, menuItems }) => {
  return (
    <>
      <div className={`fixed top-16 left-0 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform duration-300 z-10 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center py-4 pl-2 gap-2">
          <img className="h-10 w-10 rounded-full" src={Profile} alt="Profile"/>
          <span className="font-semibold">Carlo R. Garcia</span>
        </div>
        <ul className="">
          {menuItems &&
            menuItems.map((item, index) => (
              <li className="px-4 py-4 hover:bg-sky-600 cursor-pointer" key={index} onClick={item.onClick}>
                {item.label}
              </li>
            ))}
        </ul>
      </div>

      {isOpen && (
        <div className="fixed z-40" onClick={onClose}></div>
      )}
    </>
  );
};

export default Sidebar;
