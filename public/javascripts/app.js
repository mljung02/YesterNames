var window = document.getElementById('button1')

document.body.addEventListener('wheel', function (e) {
  console.log(e.wheelDelta, 'yo');
})