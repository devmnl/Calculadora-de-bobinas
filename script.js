
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
    document.getElementById('resultadoMetragem').innerText = 'Para obter ' + pesoDesejadoKg + ' kg, são necessários ' + metragemNecessaria.toFixed(0) + ' metros de bobina.';
  }


    function exibirImagemSentidos() {
        var divImagem = document.getElementById("imagemSentidos");
        divImagem.style.display = "block";
    }
   
    function fecharImagemSentidos() {
      var imagemSentidos = document.getElementById("imagemSentidos");
      imagemSentidos.style.display = "none";
    }
    

//-----------------------//

function calcularResultado() {
    const diametro = document.getElementById('diametro').value;
    let resultado = '';
  
    switch (parseInt(diametro)) {
      case 220:
        resultado = '6,4';
        break;
      case 230:
        resultado = '6,9';
        break;
      case 240:
        resultado = '7,4';
        break;
      case 250:
        resultado = '7,9';
        break;
      case 260:
        resultado = '8,4';
        break;
      case 270:
        resultado = '8,9';
        break;
      case 280:
        resultado = '9,4';
        break;
      case 290:
        resultado = '9,9';
        break;
      case 300:
        resultado = '10,4';
        break;
      case 310:
        resultado = '10,9';
        break;
      case 320:
        resultado = '11,4';
        break;
      case 330:
        resultado = '11,9';
        break;
      case 340:
        resultado = '12,4';
        break;
      case 350:
        resultado = '12,9';
        break;
      case 360:
        resultado = '13,4';
        break;
      case 370:
        resultado = '13,9';
        break;
      case 380:
        resultado = '14,4';
        break;
      case 390:
        resultado = '14,9';
        break;
      case 400:
        resultado = '15,4';
        break;
      default:
        resultado = 'Número fora da faixa de cálculo.';
        break;
    }
  
    document.getElementById('resultadoDiametro').innerText = resultado;
  }

//------------------//

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevenir a exibição automática da solicitação de instalação
  e.preventDefault();
  
  // Armazenar o evento para usá-lo posteriormente
  deferredPrompt = e;
  
  // Mostrar um botão ou elemento no DOM que permita ao usuário iniciar a instalação manualmente
  // Exemplo: mostrar um botão "Instalar" na página
  const installButton = document.getElementById('install-button');
  installButton.style.display = 'block';
  
  // Lidar com o clique no botão de instalação
  installButton.addEventListener('click', () => {
    // Mostrar a solicitação de instalação manualmente
    deferredPrompt.prompt();
    
    // Esperar pelo resultado da solicitação
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário rejeitou a instalação');
      }
      
      // Limpar o evento
      deferredPrompt = null;
    });
    
    // Esconder o botão de instalação
    installButton.style.display = 'none';
  });
});

  
