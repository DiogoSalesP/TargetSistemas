const calculaSequenciaFibonacci = (numero) => {
  let sequencia = [0, 1];
   while (sequencia[sequencia.length - 1] < numero) {
    let soma = sequencia[sequencia.length -1] + sequencia[sequencia.length -2];
    sequencia.push(soma);
   }
   return sequencia;
 }


 const isFibonacci = (numero) => {
   const sequencia = calculaSequenciaFibonacci(numero);
   if (sequencia.includes(numero)) return `${numero} Pertence a sequência`;
   return `${numero} Não pertence a sequencia,`;
 }

console.log(isFibonacci(5));
