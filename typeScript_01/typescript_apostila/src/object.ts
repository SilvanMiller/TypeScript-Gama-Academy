import { IPerson } from "./interface";
//importação de interface para tipagem de nossos objetos

//obj persona A
const PersonaA: IPerson = {
    name: "Silvan",
    age: 42,
    occupation: "Developer",
    gender: "Male"
}

const PersonaB: IPerson = {
    name: "Deborah",
    age: 36,
    occupation: "Tec. do Trabalho",
    gender: "Female"
}

const AllPersons: IPerson[] = [PersonaA, PersonaB]
// array compondo 2 objetos e interface compondo array

export default AllPersons
// exportando array por padrão em nosso arquivo

