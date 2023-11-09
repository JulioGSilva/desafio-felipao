// ## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let nomeDoHeroi = "julio";
let experiencia = 4526;
let nivel = 'ferro';

if (experiencia <= 1000) {
    nivel = 'Ferro';
} else if (experiencia >= 1001 && experiencia <= 2000) {
    nivel = 'Bronze';
} else if (experiencia >= 2001 && experiencia <= 5000) {
    nivel = 'Prata';
} else if (experiencia >= 6001 && experiencia <= 7000) {
    nivel = 'Ouro';
} else if (experiencia >= 7001 && experiencia <= 8000) {
    nivel = 'Platina';
} else if (experiencia >= 8001 && experiencia <= 9000) {
    nivel = 'Acendente';
} else if (experiencia >= 9001 && experiencia <= 10000) {
    nivel = 'Imortal';
} else if (experiencia >= 10001) {
    nivel = 'Radiante';
}

console.log(`O Herói  de nome ${nomeDoHeroi}, está no nível de ${nivel}`)