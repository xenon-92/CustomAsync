/** @format */
/**
 * Non blocking code by breaking up a large chunk of code 
 * into multiple small chunk of code
 * This gives an advantage of the UI being not blocked...
 */


var state = {};
state.k = 0;
state.pi = 0;

var result = document.createElement('p');
var count = document.createElement('p');
document.body.appendChild(result);
document.body.appendChild(count);
function computePi() {
  if (state.k >= 100000000) {
    return;
  }
  for (var i = 0; i < 1000; i++) {
    state.k++;
    state.pi += (4 * Math.pow(-1, state.k + 1)) / (2 * state.k - 1);
  }
  result.innerHTML = state.pi;
  count.innerHTML = state.k;
  setTimeout(computePi,0);
}

var btnNonBlocking = document.querySelector('.btn-nonBlocking');
btnNonBlocking.addEventListener('click', computePi);
