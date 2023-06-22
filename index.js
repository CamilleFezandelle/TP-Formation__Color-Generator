const box = document.querySelector('.box-container');

setInterval(() => {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);

	const color = `rgb(${r},${g},${b})`;

	document.body.style.background = color;
	box.innerHTML = `<h3>Couleur : RGB(${r},${g},${b})</h3>`;
}, 2000);
