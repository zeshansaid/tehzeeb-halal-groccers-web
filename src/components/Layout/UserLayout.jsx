import Header from '../common/Header'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToHash from '../common/ScrollToHash'
import ScrollToTopButton from '../common/ScrollToTopButton'
import TopMarquee from '../common/TopMarquee'

const UserLayout = () => {
    return (
        <>
            <ScrollToTopButton />
            <TopMarquee/>
            {/* HEADER */}
            <Header />
            {/* MAIN */}
            <ScrollToHash />
            <main>
                {/* CHILDREN */}
                <Outlet />
            </main>
            {/* FOOTER */}
            <Footer />
        </>
    )
}

export default UserLayout