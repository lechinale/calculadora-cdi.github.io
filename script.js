let grafico;

// Função auxiliar para formatar números no formato internacional (ponto como separador de milhar, vírgula como decimal)
function formatarInternacional(numero) {
    return new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(numero);
}

function calcular() {
  const aporteInicial = parseFloat(document.getElementById('aporteInicial').value);
  const aporteMensal = parseFloat(document.getElementById('aporteMensal').value);
  const cdi = parseFloat(document.getElementById('cdi').value) / 100;
  const percentualCdi = parseFloat(document.getElementById('percentualCdi').value) / 100;
  // A Selic e Poupança foram removidas, mas o cálculo do CDI depende do CDI e do percentual do CDI.
  const meses = parseInt(document.getElementById('meses').value);

  // Rentabilidade mensal aproximada do CDI
  const rentCDI = Math.pow(1 + (cdi * percentualCdi), 1/12) - 1;

  const resultados = calcularInvestimento(aporteInicial, aporteMensal, rentCDI, meses);

  exibirResultados(resultados, rentCDI);
  gerarGrafico(resultados.valores);
}

function calcularInvestimento(P, A, rentCDI, meses) {
  let totalInvestido = P;
  let valorCDI = P;

  const valores = { CDI: [] };

  for (let i = 1; i <= meses; i++) {
    valorCDI = valorCDI * (1 + rentCDI) + A;
    totalInvestido += A;
    valores.CDI.push(valorCDI);
  }

  return {
    totalInvestido,
    valorCDI,
    valores
  };
}

function exibirResultados(r, rentCDI) {
  const lucroCDI = r.valorCDI - r.totalInvestido;

  // IR regressivo (mantido apenas para o CDI)
  // Assumindo investimento de 1 a 2 anos (17.5%) para o cálculo de exemplo.
  let aliquota = 0.175; 
  const irCDI = lucroCDI * aliquota;

  const liquidoCDI = r.valorCDI - irCDI;

  document.getElementById('resultado').innerHTML = `
    💵 <strong>Total Investido:</strong> R$ ${formatarInternacional(r.totalInvestido)}<br><br>
    
    🏦 <strong>CDI (${formatarInternacional(rentCDI * 100 * 12)}% a.a.)</strong><br>
    • Valor Final Bruto: R$ ${formatarInternacional(r.valorCDI)}<br>
    • Lucro Bruto: R$ ${formatarInternacional(lucroCDI)}<br>
    • Imposto de Renda (IR - 17.5%): R$ ${formatarInternacional(irCDI)}<br>
    • <strong>Valor Líquido (após IR):</strong> R$ ${formatarInternacional(liquidoCDI)}
  `;
}

function gerarGrafico(valores) {
  const ctx = document.getElementById('grafico').getContext('2d');
  if (grafico) grafico.destroy();

  grafico = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: valores.CDI.length }, (_, i) => i + 1),
      datasets: [
        { label: 'CDI (%)', data: valores.CDI, borderColor: '#007bff', borderWidth: 2, fill: false }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: false, title: { display: true, text: 'Valor (R$)' } },
        x: { title: { display: true, text: 'Meses' } }
      },
      plugins: {
        legend: {
            display: false // Oculta a legenda, já que só há uma linha
        }
      }
    }
  });
}
