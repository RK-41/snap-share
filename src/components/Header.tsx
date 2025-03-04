import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  onPostClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onPostClick }) => {
  return (
    <header className="bg-blue-700 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SnapShare</Link>
        <Link to="#" onClick={onPostClick} className="text-2xl font-bold">Post</Link>
      </div>
    </header>
  );
};

export default Header; 