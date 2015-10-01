var state = 2014;
console.log('wired');
console.log(names[state][0][0]);
var nameShow = document.getElementById('nameshow');
var stateshowboys = document.getElementById('stateshowboys');
var stateshowgirls = document.getElementById('stateshowgirls');
var timeout

window.onload = populateNames

function populateNames() {
  stateshowboys.innerHTML = '';
  stateshowgirls.innerHTML = '';
  nameShow.innerHTML = ''
  var h1 = document.createElement('h1');
  h1.innerHTML = 'Top Baby Names for ' + state;
  nameShow.appendChild(h1);
  var olGirls = document.createElement('ol');
  var olBoys = document.createElement('ol');
  names[state][0].forEach(function (name) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href= 'http://www.famousbirthdays.com/names/'+name.toLowerCase()+'.html';
    a.target = '_blank';
    a.innerHTML = name;
    li.appendChild(a);
    olGirls.appendChild(li);
  })
  stateshowgirls.appendChild(olGirls)
  names[state][1].forEach(function (name) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href= 'http://www.famousbirthdays.com/names/'+name.toLowerCase()+'.html';
    a.target = '_blank';
    a.innerHTML = name;
    li.appendChild(a);
    olBoys.appendChild(li);
  })
  stateshowboys.appendChild(olBoys);
}

function stateSwitch (x){
  if (x < 0 && state > 1980) {
    state--
  } else if (x > 0 && state < 2014){
    state++
  }
  console.log('state changed to :', state)
}

document.body.addEventListener('wheel', function (e) {
  console.log('yo', e.wheelDelta)
  clearTimeout(timeout)
  timeout = setTimeout(function(){
    stateSwitch(e.wheelDelta)
    console.log(state)
    populateNames()
  }, 40)
})
