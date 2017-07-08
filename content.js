var div = document.createElement("video");
div.id = "browCam";
div.style.width = "300px";
div.style.height = "300px";
div.style.background = "black";
div.style.position = "absolute";
div.style.top = "50px";
div.style.left = "50px";

var button = document.createElement("button");
button.style.position = "absolute";
button.style.top = "500px";
button.style.left = "50px";
button.style.width = "10px";
button.style.height = "5px";

var pic = document.createElement("canvas");
var drawable = pic.getContext('2d');
pic.id = "holder";
pic.style.position = "absolute";
pic.style.top = "500px";
pic.style.left = "800px";

$(document).ready(function() {
	$('#browCam').draggable({
		stop: function(event, ui) {
			load();
		}
	});
	$('#holder').draggable();
});

function streamWebCam(stream) {
	div.src = window.URL.createObjectURL(stream);
	div.play();
}

function throwError(error) {
	alert(error.name);
}

function load() {
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
	if (navigator.getUserMedia) {
		navigator.getUserMedia({video: true}, streamWebCam, throwError);
	}
}

document.children[0].appendChild(div);
document.children[0].appendChild(button);
document.children[0].appendChild(pic);
button.onclick = function() {
	pic.width = div.clientWidth;
	pic.height = div.clientHeight;
	drawable.drawImage(div, 0, 0);
}
load();