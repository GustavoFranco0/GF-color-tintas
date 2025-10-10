document.getElementById("btnCalcular").addEventListener("click", function() {
  const largura = parseFloat(document.getElementById('largura').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const rendimento = parseFloat(document.getElementById('rendimento').value);
  const resultado = document.getElementById('resultado');

  if (isNaN(largura) || isNaN(altura) || isNaN(rendimento) || largura <= 0 || altura <= 0 || rendimento <= 0) {
    resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  const area = largura * altura;
  const litros = area / rendimento;

  resultado.innerHTML = `
    Área total: <strong>${area.toFixed(2)} m²</strong><br>
    Quantidade de tinta necessária: <strong>${litros.toFixed(2)} L</strong>
  `;
});
