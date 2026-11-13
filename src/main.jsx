import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { SavedProvider } from './Context/SavedContext.jsx';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <SavedProvider>
        <App />
      </SavedProvider>
  </StrictMode>
  </BrowserRouter>
  
)
