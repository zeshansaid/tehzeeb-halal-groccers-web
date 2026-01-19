import Topbar from '../Layout/Topbar'
import Navbar from './Navbar'
 

const Header = () => {
    return (
        <header className='mx-3 md:mx-10 mt-5'> 
        
            {/* topbar */}
            <Topbar />
            {/* navbar */}
            <Navbar/>
            {/* cart drawer */}
        </header>
    )
}

export default Header