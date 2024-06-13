/**45. Dado um array de strings, crie um objeto onde 
 * cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array. */

function qtdDeStrings(){
    let array = ["java", "php", "javascript", "java", "python", "php"];
    let objeto = {};
    for(let string of array){
        if(objeto[string]){
            objeto[string]++;
        }
        else{
            objeto[string] = 1;
        }
    }
    console.log(objeto);
}

qtdDeStrings();
