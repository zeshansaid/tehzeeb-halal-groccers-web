import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { TbBrandMeta } from 'react-icons/tb'
import { LuPhone } from "react-icons/lu";
import { LiaFacebookSquare } from "react-icons/lia";
import Logo from '../../assets/logo1.png'
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div
            className='bg-white text-zinc-950 hidden md:block'>
            <div className=' flex justify-between items-center py-4'>

                {/* Left Section - Logo */}
                <div className="flex cursor-pointer">
                    <Link to='/'>
                        <img src={Logo} alt="Logo" className="h-15 md:h-22 " />
                    </Link>
                </div>

                {/* Center Section - Call Us */}
                <div className="text-sm hidden md:flex items-center space-x-4">

                    <div className="flex flex-col items-end">
                        <p className='text-lg font-semibold text-[#D33737]'>call us today</p>
                        <a href="tel:+447815966395" className="text-xl font-semibold text-rabbit hover:text-zinc-700">
                            +44-7815-966395
                        </a>
                    </div>
                    <LuPhone className="h-8 w-8 text-rabbit" />
                </div>

                {/* Right Section - Social Media Icons */}
                <div className='hidden md:flex items-center space-x-4'>
                    <a href='#' className='text-rabbit font-semibold hover:text-zinc-700'>
                        <TbBrandMeta className='h-6 w-6' />
                    </a>
                    <a href='#' className='text-rabbit font-semibold hover:text-zinc-700'>
                        <IoLogoInstagram className='h-6 w-6' />
                    </a>
                    <a href='#' className='text-rabbit font-semibold hover:text-zinc-700'>
                        <RiTwitterXLine className='h-6 w-6' />
                    </a>
                    <a href='#' className='text-rabbit font-semibold hover:text-zinc-700'>
                        <LiaFacebookSquare className='h-6 w-6' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Topbar