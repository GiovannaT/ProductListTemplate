import React from 'react'

interface Produtoprops{
    imagem: string; 
    name: string; 
    category: string; 
    price: number;}

const Produto = ({imagem, name, category, price}: Produtoprops) => {
  return (
    <div>
        <img src = {imagem} alt='test'></img>
        <button>add to cart</button>

        <div>
            <p>
                {name}
                {category}
                {price}
            </p>
        </div>
    </div>
    
  )
}

export default Produto