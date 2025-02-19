import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalProvider } from './Context/GlobalContext'

createRoot(document.getElementById('root')).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>
)

// npm i axios react-router-dom formik yup bootstrap sweetalert2