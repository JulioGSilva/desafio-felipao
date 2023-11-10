// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

function saldoVitorias(win=0, lose=0) {
    let rate = win - lose;
    if (rate < 0) {
        rate = 0
    }
    return rate
}

function nivel(win=0) {
    if (win <= 10 || win < 0) {
        return 'Ferro'
    } else if (win >= 11 && win <= 20) {
        return 'Bronze'
    } else if (win >= 21 && win <= 50) {
        return 'Prata'
    } else if (win >= 51 && win <= 80) {
        return 'Ouro'
    } else if (win >= 81 && win <= 90) {
        return 'Diamante'
    } else if (win >= 91 && win <= 100) {
        return 'Lendario'
    } else if (win > 100) {
        return 'Imortal'
    }
}

let win = 21;
let lose = 30;

console.log(`O herói com o saldo de vitórias ${saldoVitorias(win, lose)}, está no nível ${nivel(win)}`)
