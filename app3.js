/** @format */

var elmCount= document.createElement('p');
var elmResult = document.createElement('p');
document.body.appendChild(elmResult);
document.body.appendChild(elmCount);
function computePiAsyncByPostMessage() {
  var state = {};
  state.k = 0;
  state.pi = 0;
  function computePi() {
    if (state.k >= 100000000) {
      return;
    }
    var i = 0;
    for (i = 0; i < 1000; i++) {
      state.k++;
      state.pi += (4 * Math.pow(-1, state.k + 1)) / (2 * state.k - 1);
    }
    elmCount.innerHTML=state.k;
    elmResult.innerHTML = state.pi;
    window.postMessage('fireEvent','*');
  }
  window.addEventListener('message', computePi,false);
  window.postMessage('fireEvent', '*');
}

var btnPostMessage = document.querySelector('.btn-postMessage');
btnPostMessage.addEventListener('click', computePiAsyncByPostMessage);