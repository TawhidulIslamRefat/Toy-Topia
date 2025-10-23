import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import{router} from './Router/Router.jsx'
import AuthProvider from './Provider/AuthProvider/AuthProvider.jsx'
import OrderProvider from './Provider/OrderProvider/OrderProvider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OrderProvider>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </OrderProvider>
  </StrictMode>,
)
