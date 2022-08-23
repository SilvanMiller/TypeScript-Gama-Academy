let aluno2: { nome: string, aprovado: boolean, idade: number, notas:[number, number, number, number]} // conceito de tuplas onde determino a qntdd q o array pode receber. dando o erro "A origem tem 5 elementos, mas o destino permite somente 4.ts(2322)"

aluno2 = {
    nome: "Silvan",
    aprovado: false,
    idade: 43,
    notas: [1, 2, 3, 4, ]//5]
}