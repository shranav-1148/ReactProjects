import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HiddenSearchBar from './HiddenSearchBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HiddenSearchBar />
  </StrictMode>,
)
