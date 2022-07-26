const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString)
console.log(`A primeira string tem ${minhaString.length} caracteres!`)
const novaString = "Eu não sou supersticioso, mas sou um pouco ________.";
console.log(novaString.trim())
console.log(`A segunda string tem ${novaString.length} caracteres!`)

const fraseFormada = novaString.replace("________","sticioso ")
console.log((fraseFormada))