import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from "./components/Layout/UserLayout"
import Home from "./pages/Home"
import Store from "./pages/Store"
import Contact from "./pages/Contact"  
import PrivacyPage from "./pages/PrivacyPage"
import TermsPage from "./pages/TermsPage"
import About from "./pages/About"


function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* USER LAYOUT */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='/store' element={<Store />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/privacy' element={<PrivacyPage />} />
          <Route path='/terms' element={<TermsPage />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
