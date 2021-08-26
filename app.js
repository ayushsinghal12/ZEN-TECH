var images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg'

]

var time = 3000
var i = 0
var ref = document.getElementById('showimg')

ref.src = images[i]

function image() {

    if (i < images.length - 1) {
        i++
    } else {
        i = 0
    }
    ref.src = images[i]
}

setInterval('image()', time)

window.addEventListener('scroll', animation)
var card = document.querySelectorAll('.card')

function animation() {
    for (var i = 0; i < card.length; i++) {
        if (elementInViewport(card[i])) {
            card[i].classList.add('card_')
        }
    }
}

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}

function appear() {
    document.getElementById('form').style.transform = 'translate(-50%,-50%) scale(1,1)'
    document.getElementById('form').style.visibility = 'visible'
    document.getElementById('form').style.opacity = 1;
    document.getElementById('container').style.opacity = 0.4;
}

function disappear() {
    document.getElementById('form').style.transform = 'translate(-50%,-50%) scale(0.01,0.01)'
    document.getElementById('form').style.visibility = 'hidden'
    document.getElementById('form').style.opacity = 0;
    document.getElementById('container').style.opacity = 1
}