let myImage = document.querySelector('img');

myImage.onclick = function() {
    if (myImage.getAttribute('src') == 'images/donuts.webp') {
        myImage.setAttribute('src', 'images/donuts2.webp');
    } else {
        myImage.setAttribute('src', 'images/donuts.webp');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserCondition(){
    let myCond = prompt('Please enter your condition.');
    if (!myCond) {
        myHeading.textContent = 'Once I was afraid';
    } else {
    localStorage.setItem('condition', myCond);
    myHeading.textContent = 'Once I was ' + myCond;
    }
}

if (!localStorage.getItem('condition')) {
    setUserCondition();
} else {
    let myCond = localStorage.getItem('condition');
    myHeading.textContent = 'Once I was ' + myCond;
}

myButton.onclick = function() {
    setUserCondition();
}