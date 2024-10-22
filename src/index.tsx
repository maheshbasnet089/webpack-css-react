import {createRoot} from 'react-dom/client'
import React from 'react'

const App = ()=>{
    return <div>Hello world</div>
}

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)