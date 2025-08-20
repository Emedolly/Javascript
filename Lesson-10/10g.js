function toggleButton(button) {
    if (!button.classList.contains('is-toggled')) {
      turnOffPreviosButton();
      button.classList.add('is-toggled');
    } else {
      button.classList.remove('is-toggled');
    }
  }
function turnOffPreviosButton(){
  const previousbutton = document.querySelector('.is-toggled');
  if(previousbutton){
    previousbutton.classList.remove('is-toggled');
  }
}