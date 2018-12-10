const panels = document.querySelectorAll('.panel')

function toggleOpen() {
  this.classList.toggle('open')
}

panels.forEach(panels => panels.addEventListener('click', toggleOpen))