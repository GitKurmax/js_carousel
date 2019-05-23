const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
const elemToScroll = document.querySelector('.scroll');
const imgContainer = document.querySelector('.img_wrapper');
const imgAmount = imgContainer.querySelectorAll('.img');
const imgWidth = imgContainer.querySelector('img').offsetWidth;
let x = 0;
let left;

document.querySelector('.wrapper').addEventListener('click', scroll(elemToScroll));

function scroll(elem) {
  return function (event) {
    if (event.target.classList.contains('left')){
      arrowRight.classList.remove('disabled');
      left = x - imgContainer.offsetWidth;
      if (left <= -910) {
        left = -910;
        arrowLeft.classList.add('disabled');
      }
      elem.style.left = left + "px";
      x = left;
    } else if (event.target.classList.contains('right')) {
      arrowLeft.classList.remove('disabled');
      left = x + imgContainer.offsetWidth;
      if (left >= 0) {
        left = 0;
        arrowRight.classList.add('disabled');
      }
      elem.style.left = left + "px";
      x = left;
    }
  }
}  