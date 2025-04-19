import { Link, useLocation } from 'react-router-dom';
import { 
  FiHome, 
  FiUser, 
  FiActivity, 
  FiCoffee, 
  FiMoon, 
  FiSun, 
  FiTarget, 
  FiSettings 
} from 'react-icons/fi';

function Sidebar({ isOpen }) {
  const location = useLocation();
  
  const menuItems = [
    { path: '/', label: 'Dashboard', icon: <FiHome /> },
    { path: '/profile', label: 'Profile', icon: <FiUser /> },
    { path: '/activities', label: 'Activities', icon: <FiActivity /> },
    { path: '/nutrition', label: 'Nutrition', icon: <FiCoffee /> },
    { path: '/sleep', label: 'Sleep', icon: <FiMoon /> },
    { path: '/meditation', label: 'Meditation', icon: <FiSun /> },
    { path: '/goals', label: 'Goals', icon: <FiTarget /> },
    { path: '/settings', label: 'Settings', icon: <FiSettings /> },
  ];

  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-10 w-64 bg-white shadow-lg transform transition-transform duration-300 md:translate-x-0 md:static md:block ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-6">
        <div className="flex items-center mb-8">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">WB</span>
          </div>
          <h1 className="ml-2 text-xl font-bold">Wellness Buddy</h1>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-white'
                      : 'text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;