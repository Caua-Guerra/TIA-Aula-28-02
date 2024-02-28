import { palavrasFutebol, palavrasMundialPalmeiras, palavrasRegras, palavrasTimeGosta, mostProbablyQuestion } from './can-i-answer.js'

// O que ele vai poder responder?
const pergunta = "Quais sao as regras do futebol?"
const perguntaArray = pergunta.split(" ")

let bancos = [
    palavrasFutebol.probablyWords,
    palavrasMundialPalmeiras.probablyWords,
    palavrasRegras.probablyWords,
    palavrasTimeGosta.probablyWords
]
// - Quais as regras do futebol?


// - Que time ele mais gosta?


// - Palmeiras tem mundial?


// console.log(palavrasTimeGosta)

// TENSIONAR ALGUM DOS PONTOS
palavrasFutebol.matched = 9

// Verfica quem foi mais tensionado
console.log(mostProbablyQuestion())