// components/AuthNavbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react'; // Optional: for Home icon

const AuthNavbar = () => {
  const location = useLocation();
  const currentPage = location.pathname === '/register' ? 'Register' : 'Account';

  return (
    <div className="bg-gray-100 py-4 px-6 flex justify-between items-center text-sm ">
      <h1 className="font-semibold text-lg text-gray-800 mx-auto">
        {currentPage === 'Register' ? 'Register' : 'My Account'}
      </h1>
      <div className="flex items-center space-x-2 text-gray-500">
        <Home size={16} className="text-gray-400" />
        <span>{'>'}</span>
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <span>{'>'}</span>
        <span className="text-gray-700">{currentPage}</span>
      </div>
    </div>
  );
};

export default AuthNavbar;
