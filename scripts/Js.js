var myImage = document.getElementById('Res');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/icon.png') {
      myImage.setAttribute ('src','images/icon1.png');
    } else {
      myImage.setAttribute ('src','images/icon.png');
    }
}


var Myhead = document.getElementById('head_name');
var Mybutton = document.getElementById('name_button');

function UseRname(){
    var Name = prompt('Please enter your name');
    localStorage.setItem('name', Name);
    Myhead.innerHTML = 'Mozilla is cool ' + Name;
}

if(!localStorage.getItem('name')){
    UseRname();
} else {
    var storedName = localStorage.getItem('name');
  Myhead.innerHTML  = 'Mozilla is cool, ' + storedName;
}

function Click() {
    UseRname();
}