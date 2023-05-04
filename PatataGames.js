const input = document.getElementById('search-input');
const list = document.getElementById('my-list');
const items = list.getElementsByTagName('li');

input.addEventListener('keyup', function() {
  const filter = input.value.toLowerCase();

  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent.toLowerCase();

    if (text.includes(filter)) {
      items[i].style.display = 'block';
    } else {
      items[i].style.display = 'none';
    }
  }
});
