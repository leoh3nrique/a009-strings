//Crie a const para a frase aqui
const fraseJorge = " Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS," 
const extra = "mas não deixe o gato sair\" "//SEPAREI EM DUAS PARTES PARA CONSEGUIR FAZER O EX EXTRA
console.log(fraseJorge,extra)

const fraseNovaJorge = fraseJorge.replaceAll("verde","rosa") 
const fraseNovaJorge2 = fraseNovaJorge.replaceAll("azul","laranja")
console.log(fraseNovaJorge2,extra)

//EXTRA
console.log(fraseJorge , (extra.toUpperCase()))