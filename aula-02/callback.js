const soma = (a, b) => a + b;
const diff = (a, b) => a - b;
console.log(soma(10, 23));
console.log(diff(10, 23));

const operacao = (operacao) => {
    return (a, b) => operacao(a, b);
}

console.log(operacao(soma)(1, 2));

setTimeout(() => console.log('hi'), 0);