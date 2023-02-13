var altura;
var largura;
var vidas = 1;
var tempo = 5;

var criaMosquitoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "normal") {
} else if (nivel === "dificil") {
	criaMosquitoTempo = 1000;
} else if (nivel === "chucknorris") {
	criaMosquitoTempo = 750;
}
function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight;
	largura = window.innerWidth;

	console.log(largura, altura);
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(() => {
	if (tempo < 0) {
		//vitoria
		clearInterval(cronometro);
		clearInterval(criaMosca);
		window.location.href = "vitoria.html";
	}
	tempo -= 1;
	document.getElementById("cronometro").innerHTML = tempo;
}, 1000);

function posicaoRandomica() {
	//remover o mosquito anterior caso exista
	if (document.getElementById("mosquito")) {
		document.getElementById("mosquito").remove();

		if (vidas > 3) {
			//game over
			window.location.href = "end_game.html";
		} else {
			document.getElementById("v" + vidas).src = "../img/coracao_vazio.png";

			vidas++;
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90;
	var posicaoY = Math.floor(Math.random() * altura) - 90;

	posicaoX = posicaoX < 0 ? 0 : posicaoX;
	posicaoY = posicaoY < 0 ? 0 : posicaoY;

	//criar elemento html

	var mosquito = document.createElement("img");

	mosquito.src = "img/mosca.png";
	mosquito.classList.add(tamanhoAleatorio());
	mosquito.classList.add(ladoAleatorio());
	mosquito.style.left = posicaoX + "px";
	mosquito.style.top = posicaoY + "px";
	mosquito.style.position = "absolute";
	mosquito.id = "mosquito";
	mosquito.onclick = function () {
		this.remove();
	};

	document.body.appendChild(mosquito);
}

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3);
	if (classe === 0) {
		return "mosquito1";
	} else if (classe === 1) {
		return "mosquito2";
	} else {
		return "mosquito3";
	}
}

function ladoAleatorio() {
	classe = Math.floor(Math.random() * 2);
	if (classe === 0) {
		return "ladoa";
	} else {
		return "ladob";
	}
}
