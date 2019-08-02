

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.png') {
      myImage.setAttribute ('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute ('src','images/firefox.png');
    }
}

var myHeading = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.getItem('Name',myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }