import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStore, faUtensils, faStar, faComments } from '@fortawesome/free-solid-svg-icons';

library.add(faStore, faUtensils, faStar, faComments);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
