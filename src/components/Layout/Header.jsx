import { useState } from 'react';
import { FiMenu, FiBell, FiSearch } from 'react-icons/fi';

function Header({ toggleSidebar }) {
  const [notifications, setNotifications] = useState(3);

  return (
    <header className="bg-white border-b border-neutral-200 py-4 px-4 md:px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar} 
            className="p-2 mr-2 text-neutral-500 rounded-lg hover:bg-neutral-100 md:hidden"
          >
            <FiMenu size={24} />
          </button>
          
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <FiSearch className="absolute left-3 top-3 text-neutral-400" size={18} />
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="relative mr-4">
            <button className="p-2 text-neutral-500 rounded-full hover:bg-neutral-100">
              <FiBell size={22} />
              {notifications > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
          </div>
          
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="font-medium">JS</span>
            </div>
            <div className="ml-3 hidden md:block">
              <h3 className="font-medium text-sm">John Smith</h3>
              <p className="text-xs text-neutral-500">Premium Member</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;