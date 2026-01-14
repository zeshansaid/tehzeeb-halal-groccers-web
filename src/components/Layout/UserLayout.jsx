import Header from '../common/Header'
import Footer from '../common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <>
            {/* HEADER */}
            <Header />
            {/* MAIN */}
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