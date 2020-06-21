/** @format */

//use of yield to break the chunk of code in to smaller pieces

function* genCOmputePi() {
  var k = 0;
  var pi = 0;
  for (k = 1; k <= 100000000; k++) {
    pi += (4 * Math.pow(-1, k + 1)) / (2 * k - 1);
    if (Math.trunc(k / 1000) * 1000 === k) yield pi;
  }
  return pi;
}

function computePiAsync() {
  var computePi = genCOmputePi();
  var pi;
  var dispResPi = document.createElement('p');
  document.body.appendChild(dispResPi);
  function resume() {
    pi = computePi.next();
    dispResPi.innerHTML = pi.value;
    if (!pi.done) {
        setTimeout(resume,0);
    }
  }
  setTimeout(resume,0);
}
var yieldBtn = document.querySelector('.btn-nonBlocking-yield');
yieldBtn.addEventListener('click', computePiAsync);