
function calcularMetragemParaPeso(pesoDesejadoKg, tipoBobina, larguraBobinaMm) {
    // Define a densidade com base no tipo de bobina selecionado
    let densidade = 0;
  
    if (tipoBobina === 'bopp20') {
      densidade = 0.905;
    } else if (tipoBobina === 'bopp17') {
      densidade = 0.905;
    } else if (tipoBobina === 'pet12') {
      densidade = 1.4;
    } else {
      return -1; // Retorna -1 se o tipo de bobina for inválido 
    }
  
    // Converter a largura da bobina para centímetros
    let larguraBobinaCm = larguraBobinaMm / 10;
  
    // Inicializa a metragem e o peso com valores iniciais
    let metragem = 1;
    let peso = densidade * larguraBobinaCm * metragem * 0.0001; // Convertendo de centímetros cúbicos para kg
  
    // Loop para aumentar a metragem até atingir o peso desejado
    while (peso < pesoDesejadoKg) {
      metragem++;
      peso = densidade * larguraBobinaCm * metragem * 0.0001;
    }
  
    return metragem;
  }
  function calcularMetragem() {
    // Obtém o valor do peso desejado digitado pelo usuário
    let pesoDesejadoKg = parseFloat(document.getElementById('pesoDesejado').value);
  
    // Verifica se o usuário digitou um valor válido para o peso desejado
    if (isNaN(pesoDesejadoKg) || pesoDesejadoKg <= 0) {
      alert('Por favor, digite um valor válido para o peso desejado (em kg).');
      return;
    }
  
    // Obtém o tipo de bobina selecionado pelo usuário
    let tipoBobina = document.getElementById('tipoBobina').value;
  
    // Obtém a largura da bobina digitada pelo usuário
    let larguraBobinaMm = parseFloat(document.getElementById('largura').value);
  
    // Verifica se o usuário digitou um valor válido para a largura da bobina
    if (isNaN(larguraBobinaMm) || larguraBobinaMm <= 0) {
      alert('Por favor, digite um valor válido para a largura da bobina (em milímetros).');
      return;
    }
  
    // Chama a função para calcular a metragem necessária
    let metragemNecessaria = calcularMetragemParaPeso(pesoDesejadoKg, tipoBobina, larguraBobinaMm);
  
    if (metragemNecessaria === -1) {
      alert('Selecione um tipo de bobina válido.');
      return;
    }
  
    // Exibe o resultado na página
    document.getElementById('resultado').innerText = 'Para obter ' + pesoDesejadoKg + ' kg, são necessários ' + metragemNecessaria.toFixed(0) + ' metros de bobina.';
  }
