console.log('SCRIPT RUNNING')

document.addEventListener('DOMContentLoaded', () => {
  document.body.style.backgroundColor = 'green';

  const span = document.createElement('span')
  span.textContent = 'Я добавлен из скрипта'
  document.body.appendChild(span)
})

