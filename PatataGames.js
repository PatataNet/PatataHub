document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('search-input');
  const list = document.getElementById('my-list');
  const items = list.getElementsByClassName('juego');

  function buscar() {
    const filter = input.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
      const text = items[i].querySelector('#textoxd');
      const texto = text.textContent.toLowerCase();

      if (texto.includes(filter)) {
        items[i].style.display = 'block';
      } else {
        items[i].style.display = 'none';
      }
    }
  }

  input.addEventListener('input', buscar);
});
