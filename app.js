/** @format */

var btnBlocking = document.querySelector('.btn-blocking');
var btnAlert = document.querySelector('.btn-alert');

btnBlocking.addEventListener('click', function () {
  var pi = 0;
  var k = 0;
  var resultElem = document.createElement('p');
  var countElem = document.createElement('p');
  document.body.appendChild(resultElem);
  document.body.appendChild(countElem);
  for (k = 1; k <= 1000000; k++) {
    pi += (4 * Math.pow(-1, k + 1)) / (2 * k - 1);
    resultElem.innerHTML = pi;
    countElem.innerHTML = k;
  }
});


btnAlert.addEventListener('click',function(){
    alert('I am suppose to alert...');
});