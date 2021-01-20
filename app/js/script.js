const btnHamburguer = document.querySelector('#btnHamburger')

btnHamburguer.addEventListener('click', function () {
	console.log('open hamburguer')
	if (btnHamburguer.classList.contains('open')) {
		btnHamburguer.classList.remove('open')
	} else {
		btnHamburguer.classList.add('open')
	}
})
