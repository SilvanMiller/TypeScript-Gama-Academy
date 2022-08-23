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

export default 3 // e so para fins de teste ñ vamos exporta assim