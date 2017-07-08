var div = document.createElement("video");
div.id = "browCam";
div.style.width = "300px";
div.style.height = "300px";
div.style.background = "black";
div.style.position = "absolute";
div.style.top = "50px";
div.style.left = "50px";

var snap = document.createElement("button");
snap.id = "snap";
snap.style.position = "absolute";
snap.style.top = "500px";
snap.style.left = "50px";
snap.style.width = "40px";
snap.style.height = "10px";
snap.innerText = "Snap!";

var hide = document.createElement("button");
hide.id = "hide";
hide.style.position = "absolute";
hide.style.width = "40px";
hide.style.height = "10px";
hide.innerText = "Hide!";

var pic = document.createElement("canvas");
var drawable = pic.getContext('2d');
pic.id = "holder";
pic.style.position = "absolute";
pic.style.top = "200px";
pic.style.left = "800px";

$(document).ready(function() {
	$('#browCam').draggable({
		stop: function(event, ui) {
			load();
		}
	});
	$('#holder').draggable();
	$('#hide').click(function() {
		if (document.getElementById('browCam')) {
			document.children[0].removeChild(document.getElementById('browCam'));
			document.children[0].removeChild(document.getElementById('snap'));
		} else {
			document.children[0].appendChild(div);
			document.children[0].appendChild(snap);
			load();
		}
	});
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
document.children[0].appendChild(snap);
document.children[0].appendChild(pic);
document.children[0].appendChild(hide);
snap.onclick = function() {
	pic.width = div.clientWidth;
	pic.height = div.clientHeight;
	drawable.drawImage(div, 0, 0);
}
load();