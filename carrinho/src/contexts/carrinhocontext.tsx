import { createContext } from 'react';
import { useState } from 'react';

const CarrinhoContext = createContext(undefined);

export default CarrinhoContext
export function CarrinhoProvider(){
    const [Lista, setLista] = useState()

    const adicionarProduto(produto) => {

        setLista((anterior) => {[...anterior, produto]});
        localStorage.setItem(Lista)
    }

    return <CarrinhoContext.Provider value = {Lista}></CarrinhoContext.Provider>
}