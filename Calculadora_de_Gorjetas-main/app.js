
  const campoValor = document.getElementById('valor');
const botao = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');

botao.addEventListener('click', () => {
    const valor = parseFloat(campoValor.value);

    // Correção da lógica de validação
    if (isNaN(valor) || valor <= 0) {
        resultadoDiv.textContent = "🙄 Digite um valor válido";
        resultadoDiv.style.color = "#e74c3c";
        return;
    }

    const valorFinal = valor * 1.10;

    // Usando a função que você já tinha criado!
    resultadoDiv.textContent = formatarReal(valorFinal);
    resultadoDiv.style.color = "#11998e";

    console.log("Valor calculado:", valorFinal);
});

// Função para formatar como moeda brasileira (R$)
function formatarReal(valor) {
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}
    