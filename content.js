var div = document.createElement("video");
div.id = "browCam";
div.style.width = "150px";
div.style.height = "300px";
div.style.background = "black";
div.style.position = "absolute";
div.style.top = "50px";
div.style.left = "50px";

$(document).ready(function() {
	$('#browCam').draggable({
		stop: function(event, ui) {
			navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
			if (navigator.getUserMedia) {
				navigator.getUserMedia({video: true}, streamWebCam, throwError);
			}
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

document.children[0].appendChild(div);

navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
	navigator.getUserMedia({video: true}, streamWebCam, throwError);
}