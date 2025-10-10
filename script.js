document.getElementById("btnCalcular").addEventListener("click", function() {
  const largura = parseFloat(document.getElementById('largura').value);
  const altura = parseFloat(document.getElementById('altura').value);
  const litrosPorLata = parseFloat(document.getElementById('litrosPorLata').value);
  const resultado = document.getElementById('resultado');

  // Rendimento médio fixo de 10 m² por litro (você pode ajustar)
  const rendimentoPadrao = 10;

  if (isNaN(largura) || isNaN(altura) || isNaN(litrosPorLata) ||
      largura <= 0 || altura <= 0 || litrosPorLata <= 0) {
    resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
    return;
  }

  const area = largura * altura;
  const coberturaPorLata = litrosPorLata * rendimentoPadrao;
  const latasNecessarias = Math.ceil(area / coberturaPorLata);

  resultado.innerHTML = `
    Área total: <strong>${area.toFixed(2)} m²</strong><br>
    Cada lata cobre aproximadamente: <strong>${coberturaPorLata.toFixed(2)} m²</strong><br>
    Você vai precisar de aproximadamente: <strong>${latasNecessarias} lata(s)</strong>
  `;
});
