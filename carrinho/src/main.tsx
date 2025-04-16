import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CarrinhoProvider } from './contexts/carrinhocontext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarrinhoProvider>
           <App />
    </CarrinhoProvider>
  </StrictMode>,
)
