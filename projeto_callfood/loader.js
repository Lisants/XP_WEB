window.onload = function() {
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.conteudo').style.display = 'block';
  }, 3500); // 1.5 segundos
};