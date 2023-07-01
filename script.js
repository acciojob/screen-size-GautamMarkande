//your JS code here. If required.
const divEle = document.createElement("div");
divEle.id = "sizeInfo"
window.resize  = function(e) {
	let x = window.innerWidth;
	let y = window.innerHeight;
	divEle.innerHtml = `<h1>Width:${x} and Height:${y}`;
	document.body.appendChild(divEle);
}
resize();
	
}