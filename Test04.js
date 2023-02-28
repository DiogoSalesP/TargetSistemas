const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
}

const faturamentoMensa = () => {
  return faturamento.SP + faturamento.RJ + faturamento.MG + faturamento.ES + faturamento.Outros;
}

const percentualRepresentação = (estado) => {
  const percentual =  ((estado / faturamentoMensa()) * 100).toFixed(2);
  return `${percentual}%`;
}

console.log(percentualRepresentação(faturamento.SP));
console.log(percentualRepresentação(faturamento.RJ));
console.log(percentualRepresentação(faturamento.MG));
console.log(percentualRepresentação(faturamento.ES));
console.log(percentualRepresentação(faturamento.Outros));