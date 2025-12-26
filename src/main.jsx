import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ChordLibrary from './ChordLibrary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChordLibrary />
  </StrictMode>,
)
