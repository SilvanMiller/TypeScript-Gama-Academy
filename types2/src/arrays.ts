let arrayNumber: number[];
//foi atribuido let pois se atribuir const ela não aceita novos valores

//arrayNumber = [1, 2, 3, true]
// nessa condição ele ja informa um erro "O tipo 'boolean' não pode ser atribuído ao tipo 'number'"
arrayNumber = [1, 2, 3]


let arrayStrings: string[]
arrayStrings = ["a", "B", "c", "2"]
//tudo ok nesse segundo exemplo tanto q o "2" nesse caso e string ne

let arrayGeneric: Array<number>//aqui vc entre <--> vc determina o que o Array vai aceitar strings, number, boolean e etc...
arrayGeneric = [1, 3, 5, 7]