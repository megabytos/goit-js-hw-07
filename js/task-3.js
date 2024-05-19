document.querySelector('#name-input').addEventListener('input', event => {
  const inputValue = event.currentTarget.value.trim();
  document.querySelector('#name-output').textContent = inputValue ? inputValue : 'Anonymous';
});
