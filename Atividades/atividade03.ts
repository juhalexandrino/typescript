interface Produto{
    nome: string;
    preco: number;
    categoria: string;
}

let produto1: Produto ={
    nome: 'Pato de borracha',
    preco: 26.00,
    categoria: 'Banho'
}

let produto2: Produto ={
    nome: 'Vaso de planta',
    preco: 50.00,
    categoria: 'Jardim'
}

const listaProdutos: Produto[] = [produto1, produto2];
console.log(...listaProdutos);