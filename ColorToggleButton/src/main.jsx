import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ToggleButtonColor from './ToggleButtonColor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToggleButtonColor />
  </StrictMode>,
)
