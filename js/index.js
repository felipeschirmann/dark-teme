const $html = document.querySelector('html')
const $boox = document.querySelector('#switch')

// $checkbox.addEventListener('change', function () {
//   $html.classList.toggle('dark-mode')
// })

if (localStorage.modoCor == 'dark-mode') {
  $html.classList.toggle('dark-mode')
  $boox.checked = true
}

$boox.onchange = function () {
  if ($boox.checked) {
    localStorage.setItem('modoCor', 'dark-mode')
    $html.classList.toggle('dark-mode')
  } else {
    $html.classList.remove('dark-mode')
    localStorage.removeItem('modoCor', 'white-mode')
  }
}
