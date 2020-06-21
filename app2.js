/** @format */





var piElem = document.createElement('p');
var counterElem = document.createElement('p');
document.body.appendChild(piElem);
document.body.appendChild(counterElem);
function computePiAsync() {
  var state = {};
  state.pi = 0;
  state.k = 0;
  function computePi() {
    if (state.k >= 100000000) {
      return;
    }
    var i = 0;
    for (i = 0; i <= 1000; i++) {
        state.k++;
        state.pi += (4 * Math.pow(-1, state.k + 1)) / (2 * state.k - 1);
    }
    piElem.innerHTML = state.pi;
    counterElem.innerHTML = state.k;
    setTimeout(computePi,0);
  }
//   setTimeout(computePi,0);
computePi();
}

var btnAsync = document.querySelector('.btn-nonBlocking-async');
btnAsync.addEventListener('click', computePiAsync);