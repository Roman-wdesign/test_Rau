import * as $ from 'jquery';


import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var canvas = document.getElementById('canvas');
if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(35.5,25);
    ctx.lineTo(50,35.5);
    ctx.lineTo(50,12.5);
    ctx.fill();


}



square.onmousedown = function(event) {
    square.ondragstart = function() {
        return false;
    };

    square.style.position = 'absolute';
    square.style.zIndex = 1000;


    document.body.append(square);


    function moveAt(pageX, pageY) {
        square.style.left = pageX - square.offsetWidth / 2 + 'px';
        square.style.top = pageY - square.offsetHeight / 2 + 'px';
    }


    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }


    document.addEventListener('mousemove', onMouseMove);


    square.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        square.onmouseup = null;
    };

};