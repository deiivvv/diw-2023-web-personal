const checkbox = document.getElementById('toggleTheme');
const body = document.getElementsByTagName('body');

checkbox.addEventListener('change', function () {
  if(body[0].classList.contains('tema-claro')){
    body[0].classList.replace('tema-claro','tema-oscuro')

  }else{
    body[0].classList.replace('tema-oscuro','tema-claro')
  
  }
  if(body[0].classList.contains('con-sombra')){
    body[0].classList.replace('con-sombra','sin-sombra')

  }else{
    body[0].classList.replace('sin-sombra','con-sombra')
  
  }
});
