ocument.addEventListener("DOMContentLoaded", () => {
  atualizarTotal();

  document.querySelectorAll(".mais").forEach(botao => {
    botao.addEventListener("click", () => {
      const spanQuantidade = botao.parentElement.querySelector(".quantidade-valor");
      spanQuantidade.textContent = parseInt(spanQuantidade.textContent) + 1;
      atualizarTotal();
    });
  });

  document.querySelectorAll(".menos").forEach(botao => {
    botao.addEventListener("click", () => {
      const spanQuantidade = botao.parentElement.querySelector(".quantidade-valor");
      let atual = parseInt(spanQuantidade.textContent);
      if (atual > 1) {
        spanQuantidade.textContent = atual - 1;
        atualizarTotal();
      }
    });
  });

  document.querySelectorAll(".remover").forEach(botao => {
    botao.addEventListener("click", () => {
      const item = botao.closest(".item-carrinho");
      item.remove();
      atualizarTotal();
    });
  });
});

function atualizarTotal() {
  let total = 0;
  const itens = document.querySelectorAll(".item-carrinho");

  itens.forEach(item => {
    const preco = parseFloat(item.querySelector(".valor-unitario").textContent);
    const quantidade = parseInt(item.querySelector(".quantidade-valor").textContent);
    total += preco * quantidade;
  });

  document.getElementById("total-geral").textContent = total.toFixed(2);
}