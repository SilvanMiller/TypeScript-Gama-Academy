function abb3(x: number, y?: number) {
    if (y === undefined) {
        return null
    }
    return x + y 
}
const teste2 = abb3(10)

type testAlias = number| string| boolean

let teste3: testAlias
teste3 = 10;
//teste3 = "teste_3";// gera um erro "teste_3" não pode ser atribuído ao tipo 'number | boolean"
teste3 = false

let teste4: testAlias
teste4 = true //"teste_4" //10 //pode ver q tst4 aceita os 3 sem dar erro

type userAlias = {
    nome: string,
    idade?: number
} //gero um odj que pode ser reaproveitado mais facilmente

const Silvan: userAlias = {
    nome: "Silvan",
    //idade: 10 // aqui so poso passar number ou undefined, porem se no objeto tiver um ?, ai ele passar a ser opcional. ai ñ quebra o código.
}
const Deborah: userAlias = {
    nome: "Deborah",
    idade: 36
}

const Miguel: userAlias = {
    nome: "Miguel",
    idade: 21
}

type Sizes = "12px" | "16px" | "25px"

const small: Sizes = "12px"
//const large: Sizes = "28px"// o valor ñ pode ser informado != do que esta em Sizes.
const large: Sizes = "25px"


export default 1 // e so para fins de teste ñ vamos exporta assim