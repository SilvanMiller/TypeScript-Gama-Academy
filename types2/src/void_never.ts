function showFeedback(message: string, type: string): void {
    alert(type.toLocaleUpperCase() + ":" + message)
}// ao passar o mause pela função ela ja me informa que a mesma é do tipo void que ñ tem retorno, posso especificar após os parentes :void ou passar o q essa função deve me retornar. :string, :number, :boolean   

const feedback = showFeedback("olá", "info")

function showError(message: string): never{
    throw new Error("função marcada com never nunca retorna nada")
}//nesse casso a funcção qndo é chamada ela lança um error e nada mais é executado

const errorn = showError("message de error")