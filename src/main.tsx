import React from 'react'
import ReactDOM from 'react-dom/client'
import AppClass from './AppClass.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppClass initialCount={0} />
  </React.StrictMode>,
)
