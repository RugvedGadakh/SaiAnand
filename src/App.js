import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import ServicesPage from "./pages/ServicesPage"
import DoctorsPage from "./pages/DoctorsPage"
import AppointmentPage from "./pages/AppointmentPage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"
import "./index.css"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App

