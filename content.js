var div = document.createElement("div");
div.id = "browCam";
div.style.width = "50px";
div.style.height = "100px";
div.style.background = "black";
div.style.position = "absolute";
div.style.top = "50px";
div.style.left = "50px";
$(function() {
	$('#browCam').draggable();
});

document.children[0].appendChild(div);