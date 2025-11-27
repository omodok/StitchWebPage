import React, { useState } from 'react';
import { NavItem } from '../types';
import { Menu, X, Hexagon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems: NavItem[] = [
  { label: 'ホーム', path: '/' },
  { label: 'スクールについて', path: '/about' },
  { label: 'コース紹介', path: '/courses' },
  { label: 'お問い合わせ', path: '/contact' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="text-[#197fe6] group-hover:scale-110 transition-transform">
              <Hexagon fill="currentColor" className="w-8 h-8" />
            </div>
            <span className="text-slate-900 text-lg font-bold tracking-tight">
              オモドック・スクール
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#197fe6]'
                      : 'text-slate-600 hover:text-[#197fe6]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className="bg-[#197fe6] hover:bg-[#156ac0] text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              無料相談
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white absolute w-full shadow-lg">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium px-4 py-2 rounded-lg ${
                  location.pathname === item.path
                    ? 'bg-blue-50 text-[#197fe6]'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-[#197fe6] text-center text-white font-bold py-3 rounded-lg mx-4"
            >
              無料相談
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
