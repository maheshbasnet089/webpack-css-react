import {createRoot} from 'react-dom/client'
import React from 'react'
import styles from './index.css'

console.log(styles)
const Button = ()=>(
    <button className={styles.button}>Click me!</button>
)

createRoot(document.getElementById('root') as HTMLElement).render(
    <Button/>
)