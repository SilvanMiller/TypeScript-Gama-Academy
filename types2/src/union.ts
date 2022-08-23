function abb3(x: number, y?: number) {
    if (y === undefined) {
        return null
    }
    return x + y 
}
const teste2 = abb3(10)

let teste3: number | boolean
teste3 = 10;
//teste3 = "teste_3";// gera um erro "teste_3" não pode ser atribuído ao tipo 'number | boolean"
teste3 = false

const User: {
    nome: string,
    idade?: number
} = {
    nome: "Silvan",
    //idade: 10 // aqui so poso passar number ou undefined, porem se no objeto tiver um ?, ai ele passar a ser opcional. ai ñ quebra o código.
}

export default 2 // e so para fins de teste ñ vamos exporta assim