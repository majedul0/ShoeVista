import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Search from './Search';
import { useWishList } from '../context/WishListContext';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { list } = useWishList();
    const { cartList } = useCart();

    // Toggle the menu
    const toggleMenu = () => setIsOpen(prev => !prev);

    return (
        <nav className='sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between px-6 py-3 gap-2 shadow-sm'>
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <Link
                    to="/"
                    className="logo text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent hover:from-black hover:to-gray-500 transition-all duration-300"
                    onClick={toggleMenu}
                >
                    ShoeVista
                </Link>

                {/* Toggle Button for Mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden flex items-center p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                >
                    {
                        isOpen ? (
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                <path d="M3 21.32L21 3.32001" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 3.32001L21 21.32" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        )
                    }
                </button>
            </div>

            {/* Navbar Links and Right Side Bar */}
            <div className={`flex flex-col md:flex-row md:items-center gap-1 md:gap-0 ${isOpen ? 'block mt-3 md:mt-0' : 'hidden md:flex'}`}>
                {/* Links */}
                <ul className='flex flex-col md:flex-row md:gap-1 md:pr-6'>
                    {['/', '/shoes/men', '/shoes/women', '/shoes/kids', '/about-us'].map((path, index) => {
                        const labels = ['Home', 'Men', 'Women', 'Kids', 'About Us'];
                        return (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    onClick={toggleMenu}
                                    className={({ isActive }) =>
                                        `relative block px-3 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-200 
                                        ${isActive
                                            ? 'text-black bg-gray-100 font-bold'
                                            : 'text-gray-500 hover:text-black hover:bg-gray-50'
                                        }`
                                    }
                                >
                                    {labels[index]}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>

                {/* Divider */}
                <div className='hidden md:block w-px h-6 bg-gray-200 mx-2'></div>

                {/* Right Side Bar */}
                <div className="flex items-center gap-4 mt-3 md:mt-0 pt-3 md:pt-0 border-t md:border-t-0 border-gray-100">
                    <Search />
                    <div className='flex items-center gap-3'>
                        <NavLink
                            to="/wishlist"
                            onClick={toggleMenu}
                            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className='relative'>
                                <span className='w-4 text-center rounded-full absolute -top-1.5 -right-1.5 text-[10px] leading-4 bg-gray-900 text-white font-medium'>
                                    {list.length > 0 ? list.length : ''}
                                </span>
                                <img src="/Navbar/wishlist.png" alt="wishlist" className='w-5 h-5 hover:scale-110 transition-transform' />
                            </div>
                        </NavLink>
                        <NavLink
                            to="/cart"
                            onClick={toggleMenu}
                            className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            <div className='relative'>
                                <span className='w-4 text-center rounded-full absolute -top-1.5 -right-1.5 text-[10px] leading-4 bg-gray-900 text-white font-medium'>
                                    {cartList.length > 0 ? cartList.length : ''}
                                </span>
                                <img src="/Navbar/cart.png" alt="cart" className='w-5 h-5 hover:scale-110 transition-transform' />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;