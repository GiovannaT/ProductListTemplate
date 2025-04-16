import { useState } from 'react'
import './App.css'
import produto from "../../data.json"
import Produto from './components/produto'

function App() {
  const [count, setCount] = useState(0)
  const carrinho = carrinhoContext()

  return (
    <>
      <div>
      </div>
        <h1 className='title'>Itens</h1>
        {produto.map((item) => {return <Produto imagem = {item.image.thumbnail} name = {item.name} 
                              category = {item.category} price = {item.price}>
        </Produto>})}
    </>
  )
}

export default App
