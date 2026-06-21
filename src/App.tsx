import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { ThemeProvider } from '@/hooks/useTheme'
import HomePage from '@/pages/HomePage'
import ServicesPage from '@/pages/ServicesPage'
import PortfolioPage from '@/pages/PortfolioPage'
import ProjectDetailsPage from '@/pages/ProjectDetailsPage'
import PricingPage from '@/pages/PricingPage'
import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="portfolio/:id" element={<ProjectDetailsPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
