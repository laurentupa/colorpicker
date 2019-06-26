
function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  var divtoedit = document.getElementById('pickacolor');
  divtoedit.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';

  document.getElementById('colorGenerated').innerHTML = 'rgb('+red+','+green+','+blue+')';
}
