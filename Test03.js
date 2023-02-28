const dados = require('./fonteDados.json')

const primeiroDiaMes = () => {
  return dados.find((faturamento) => faturamento.dia === 1);
};

const menorFaturamentoDia = () => {
  let menorValor = primeiroDiaMes().valor;
  dados.map((faturamento) => {
    if (faturamento.valor < menorValor && faturamento.valor !== 0) {
      menorValor = faturamento.valor;
    }
  })
  return `O menor valor de faturamento ocorrido em um dia do mês ${menorValor}`;
};

const maiorFaturamentoDia = () => {
  let maiorValor = primeiroDiaMes().valor;
  dados.map((faturamento) => {
    if (faturamento.valor > maiorValor && faturamento.valor !== 0) {
      maiorValor = faturamento.valor;
    }
  })
  return `O maior valor de faturamento ocorrido em um dia do mês ${maiorValor}`;
};

const diaLetivo = () => {
  return dados.filter((faturamento) => faturamento.valor !== 0).length
};

const mediaMensal = () => {
  let soma = 0
  dados.map((faturamento) => soma += faturamento.valor);
  return soma / diaLetivo();
};

const superiorMediaMensal = () => {
  const dias = [];
  dados.map((faturamento) => {
    if (faturamento.valor > mediaMensal()) {
      dias.push(faturamento.dia);
    };
  })
  return `Dias no mês em que o valor de faturamento diário foi superior à média mensal: ${dias}`;
};

console.log(menorFaturamentoDia());
console.log(maiorFaturamentoDia());
console.log(superiorMediaMensal());
