import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Layout } from 'antd'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import CompareProdocutsPage from './pages/CompareProdocutsPage.jsx'
import ProductsDetailsPage from './pages/ProductsDetailsPage.jsx'
import CompareProduct from './components/CompareProduct.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
