import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PageNavigation from './components/pageNavigation.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PageNavigation />
  </StrictMode>
)
