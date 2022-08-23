const spaceships = [];
// O array spaceships vai ser usado para salvar as naves de forma mais simplificada

// função de adicionar naves, piloto e limite maximo de tripulantes
function addSpaceship(name: string, piloto: string, limiteMaxTripulantes: number) {
    const spaceship = {
        name,
        piloto,
        limiteMaxTripulantes,
        tripulantes: [],
        emMissao: false
    }
    spaceships.push(spaceship);

    alert(`A nave ${spaceship.name} foi registrada.`)
}

function acharSpaceship(nome: string) {
    let spaceship: {
        name: string,
        piloto: string,
        limiteMaxTripulante: number,
        tripulantes: string[],
        emMissao: boolean
    }
    spaceship = spaceships.find(ship => ship.name === nome);

    return spaceship
}

//função de adicionar um tripulantes
function addTripulante(membros:string, spaceship: {name:string, limiteMaxTripulante:number, tripulantes:string[]}) {
    if (spaceship.tripulantes.length >= spaceship.limiteMaxTripulante) {
        alert(`${membros} não pode ser adicionado. Limite atingido.`)
    } else {
        spaceship.tripulantes.push(membros)
        alert(`${membros} foi adicionado a tripulação da ${spaceship.name}`)
    }
}

//função de enviar para uma missão
function sendEmMissao(spaceship: { name: string, limiteMaxTripulante: number, tripulantes: string[], emMissao: boolean }) {
    if (spaceship.emMissao) {
        alert(`${spaceship.name} não pode ser enviada, já esta em missão.`);
    } else if (spaceship.tripulantes.length < Math.floor(spaceship.limiteMaxTripulante / 3)) {
        alert(`${spaceship.name} não pode ser enviada, tripulação insuficiente.`);
    } else {
        spaceship.emMissao = true;
        alert(`${spaceship.name} enviada para a missão.`)
    }
}

//primeira opção
function firstMenuOption() {
    const name = prompt(`Digite o nome da sua nave para registro`);
    const piloto = prompt(`Qual o nome do piloto da ${name}?`);
    const limiteMaxTripulante = Number(prompt(`Quantos tripulantes a ${name} suporta?`));

    const confirmation = confirm(`Confirma o registro da nave ${name}\nPiloto: ${piloto}\nLimite de máximo de tripulantes ${limiteMaxTripulante}`);
    
    if (confirmation) {
        addSpaceship(name, piloto, limiteMaxTripulante)

    }
}

//segunda opção
function secondMenuOption() {
    const membros = prompt('Qual é o nome do tripulante?')
    const spaceshipName = prompt(`Para qual nave ${membros} deverá ser designado?`)

    const spaceship = acharSpaceship(spaceshipName)

    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${membros} na tripulação da ${spaceship.name}?`)

    if (confirmation) {
        addTripulante(membros, spaceship)
    }
    }
}

//terceira opção
function thirdMenuOption() {
    const spaceshipName = prompt('Qual é o nome da nave a ser enviada?')

    const spaceship = acharSpaceship(spaceshipName);

    if (spaceship) {
        const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`)

    if (confirmation) {
            sendEmMissao(spaceship)
        }
    }
}

//quarta opção
function fourthMenuOption() {
    let list = 'Naves Registradas:\n'

    spaceships.forEach((spaceship: {
        name: string,
        piloto: string,
        limiteMaxTripulantes:number,
        tripulantes: string[],
        emMissao: boolean
    }) => { list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.piloto}
        Em missão? ${spaceship.emMissao ? 'Sim' : 'Não'}
        Tamanho Máximo da Tripulação: ${spaceship.limiteMaxTripulantes}
        Tripulantes: ${spaceship.tripulantes.length}
        `
        spaceship.tripulantes.forEach(membros => {
            list += `    - ${membros}\n`
        })

    })

    alert(list)
}

/** * Menu  */
let userOption = 0;

while (userOption !== 5) {
    const menu = `Painel Principal
        1 - Registrar uma nova nave
        2 - Adicionar membro da tripulação
        3 - Enviar nave em missão
        4 - Listar naves registradas
        5 - Encerrar`

    userOption = Number.parseInt(prompt(menu))

    switch (userOption) {
        case 1:
        firstMenuOption()
        break
        case 2:
        secondMenuOption()
        break
        case 3:
        thirdMenuOption()
        break
        case 4:
        fourthMenuOption()
        break
        case 5:
        alert('Encerrando o sistema...')
        break
        default:
        alert('Opção inválida! Retornando ao painel principal...')
        break;
    }
}
