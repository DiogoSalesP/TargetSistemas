const caracteres = 'Target Sistemas';

const inverteCaracteres = (caractere) => {
  let result = '';
  for (index = caractere.length; index > 0; index--) {
    result += caractere[index - 1];
  }
  return result;
}

console.log(inverteCaracteres(caracteres));