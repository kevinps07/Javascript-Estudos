//      No js só existe 6 tipos de dados do tipo primitivos : 
/*
        [
          String
          Number
          Boolean
          Null
          undefined
          Symbol  (novo no ECMAScript 6)
        ] 

        todos os primitivos são imútaveis (não podem ter o seu valor modificado)
*/


// [# Variáveis]

// usar o var é um habito RUIM, pois pode gerar bugs e dificultar a leitura do codigo!
// é preferível usar let ou const, se declarado dentro de escopo de blocos não fará interfência externa
// veja o exemplo a seguir:
// [# Exemplo 1]
var foo = 'bar'  //RUIM
{
  var foo = 'bartoo'  
  const poo = 'bar' // BOM
}
console.log(foo) // imprime bartoo 
console.log(poo) // Gera erro ReferenceError: poo is not defined
// acontece esse erro porque, estamos tentando acessar a variavel [poo] fora do escopo de bloco