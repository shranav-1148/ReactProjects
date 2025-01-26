import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { accordionData } from './utils/content.jsx'
import Accordion from './Accordion.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <div className='accordion'>
      {accordionData.map(({title, content}) => {
        return <Accordion title={title} content={content} key={Math.random() *100} />
      })}
    </div>
  </div>
)
