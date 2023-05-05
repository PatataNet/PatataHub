const input = document.getElementById('search-input');
const list = document.getElementById('my-list');
const items = list.getElementsByTagName('li');

function buscar() {
  const filter = input.value.toLowerCase();

  for (let i = 0; i < items.length; i++) {
    const text = items[i];
    const a2 = text.getElementsById('textoxd');
    const texto = a2.textContent.toLowerCase();

    if (texto.includes(filter)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
});
