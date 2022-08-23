function somar(x:number, y:number) {
    return x + y
}

const multiply = (x: number, y: number) => x * y  

const subtract: (x: number, y: number) => number = (x, y) => x - y
let testSub = subtract(3, 1)

type User = {
    nome: string,
    id: number
}

type UserLevel = "Iniciante" | "Senior" | "Pleno"

type Admin = {
    isAdmin: boolean,
    isLevel: UserLevel
}

type UserAdmin = User & Admin // aqui é feito a interseção ou a soma de todos os campos para criar um usuário

let Silvan: UserAdmin = {
    nome : "Silvan",
    id : 7,
    isAdmin : true,
    isLevel : "Pleno"
}

let Miguel: User = {
    nome : "Miguel",
    id : 9,
}

let Micaela: UserAdmin = {
    nome : "Micaela",
    id : 3,
    isAdmin : true,
    isLevel : "Iniciante"
}













export default 4 // e so para fins de teste ñ vamos exporta assim