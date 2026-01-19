import React, { useState } from 'react'
import { HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { IoMdClose } from 'react-icons/io'

import Logo from '../../assets/logo1.png'
import NavDropdown from '../navbar-submenus/NavDropdown'
import CategoriesMegaMenu from '../navbar-submenus/CategoriesMegaMenu'
import MobileNavAccordion from '../navbar-submenus/MobileNavAccordion'
import MobileCategoriesAccordion from '../navbar-submenus/MobileCategoriesAccordion'

const Navbar = () => {

    const [openDrawer, setOpenDrawer] = useState(false)
    const [openMobileDrawer, setOpenMobileDrawer] = useState(false)
    const toggleMobileNavDrawer = () => {
        setOpenMobileDrawer(!openMobileDrawer)
    }
    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer)
    }


    return (
        <>
            <nav className='w-full flex items-center justify-between md:py-4 md:px-6'>

                {/* CENTER NAVIGATION */}
                <div className='hidden md:flex flex-1 justify-center space-x-6'>
                    <Link to='/' className=' text-xl  text-rabbit font-medium hover:text-black  '>Home</Link>
                    <CategoriesMegaMenu />
                    {/* <NavDropdown
                        title="About"
                        to="/about"
                        items={[
                            { label: "Who We Are", to: "/about/who-we-are" },
                            { label: "Our Mission", to: "/about/our-mission" },
                            { label: "Our Story", to: "/about/contact" },
                        ]}
                    /> */}
                    <NavDropdown
                        title="Pages"
                        to="/"
                        items={[
                            { label: "About us", to: "/about" },
                            { label: "Testimonials", to: "/#testimonials" },
                            { label: "FAQs", to: "/#faqs" },
                            

                        ]}
                    />
                    <NavDropdown
                        title="Features"
                        to="/"
                        items={[
                            { label: "What We offer", to: "/#offers" },
                            { label: "Our benefits", to: "/#benefits" },
                        ]}
                    />
                    <Link to='/contact' className=' text-xl text-rabbit  font-medium hover:text-zinc-700 '>Contact us</Link>

                    <Link to='/store' className=' text-xl text-rabbit  font-medium hover:text-zinc-700 '> Our Store</Link>
                </div>
                {/* RIGHT NAVIGATION */}
                <div className='md:hidden min-w-full flex justify-between items-center px-2'>

                    {/* MOBILE MENU */}
                    <button
                        onClick={toggleMobileNavDrawer}
                        className='md:hidden hover:text-zinc-700'>
                        <HiBars3BottomRight className='h-8 w-8 text-gray-700' />
                    </button>

                    <div className="md:hidden">
                        <Link to="/">
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-15 md:h-22 cursor-pointer"
                            />
                        </Link>

                    </div>

                </div>

            </nav>


            {/* Mobile  Navigation Drawer */}
            <div className={`fixed top-0 left-0  flex flex-col w-full sm:w-3/4 md:w-1/2 h-full bg-white shadow-lg 
                    z-50 transform transition-transform duration-300 ease-in-out 
                    ${openMobileDrawer ? 'translate-x-0' : '-translate-x-full'}`}
            >

                {/* Header */}
                <div className="p-4">
                    {/* Close Button */}
                    <div className="flex justify-end">
                        <button onClick={toggleMobileNavDrawer}>
                            <IoMdClose className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>

                    {/* Centered Logo */}
                    <div className="flex justify-center ">
                        <Link to="/" onClick={toggleMobileNavDrawer}>
                            <img
                                src={Logo}
                                alt="Logo"
                                className="h-16 cursor-pointer"
                            />
                        </Link>

                    </div>
                </div>



                <div className="flex-1 overflow-y-auto px-4 py-2">
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav className='space-y-4'>
                        <Link to='/' onClick={toggleMobileNavDrawer} className='block text-gray-600 hover:text-zinc-700'>Home</Link>
                        <MobileCategoriesAccordion onItemClick={toggleMobileNavDrawer} />

                         
                        <MobileNavAccordion
                            title="Pages"
                            onItemClick={toggleMobileNavDrawer}
                            items={[
                                { label: "About us", to: "/about" },
                                { label: "Testimonials", to: "/#testimonials" },
                                { label: "FAQs", to: "/#faqs" },
                               
                            ]}
                        />



                        <MobileNavAccordion
                            title="Features"
                            onItemClick={toggleMobileNavDrawer}
                            items={[
                                { label: "What We offer", to: "/#testimonials" },
                                { label: "Our benefits", to: "/#faqs" },
                            ]}
                        />
                        <Link to='/contact' onClick={toggleMobileNavDrawer} className='block text-gray-600 hover:text-zinc-700'>Contact us</Link>
                        <Link to='/store' onClick={toggleMobileNavDrawer} className='block text-gray-600 hover:text-zinc-700'> Our Store</Link>
                    </nav>
                </div>

            </div>

        </>
    )
}

export default Navbar