// Mostra o overlay de pagamento com o GIF por 5 segundos ao confirmar a compra
document.addEventListener('DOMContentLoaded', function() {
  const confirmar = document.getElementById('confirmarCompra');
  const overlay = document.getElementById('paymentOverlay');
  if (!confirmar || !overlay) return;

  confirmar.addEventListener('click', function() {
    const isRegistered = sessionStorage.getItem('registered') === 'true';
    if (!isRegistered) { alert('Faça login para confirmar a compra.'); window.location.href = 'Cadastro.html'; return; }
    const count = document.querySelectorAll('.item-carrinho').length;
    if (count === 0) { alert('Seu carrinho está vazio.'); return; }
    overlay.style.display = 'flex';
    overlay.setAttribute('aria-hidden', 'false');
    confirmar.disabled = true;
    setTimeout(function() {
      overlay.style.display = 'none';
      overlay.setAttribute('aria-hidden', 'true');
      confirmar.disabled = false;
      // opcional: aqui você pode redirecionar ou mostrar confirmação
      alert('Compra confirmada! Obrigado pela preferência.');
      // limpar carrinho
      try { localStorage.removeItem('cart'); } catch (e) {}
    }, 5000);
  });
});