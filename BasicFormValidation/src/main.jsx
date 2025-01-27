import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Validate from './Validate'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Validate />
  </StrictMode>,
)
