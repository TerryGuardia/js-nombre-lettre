let chiffre = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let chiffre_diz = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let chiffre_cent = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let unite = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf'];
let unitediz = ['', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
let diz = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante-dix', 'quatre-vingt', 'quatre-vingt-dix'];
let cents = ['', 'cent', 'deux cent', 'trois cent', 'quatre cent', 'cinq cent', 'six cent', 'sept cent', 'huit cent', 'neuf cent'];
let mils = ['', 'mille', 'deux mille'];
let resultat;

function affichage(nombre) {

	function remp_unit() {
		for (let i = 0; i <= 9; i++) {
			if (nombre[nombre.length - 1] == chiffre[i]) {
				resultat = unite[i];
			}
		}
	}
	function remp_diz() {
		for (let i = 0; i <= 9; i++) {
			if (nombre[nombre.length - 2] == chiffre[i]) {

				if (chiffre_diz[i] >= 1 && nombre[nombre.length - 1] == 0) {
					resultat = diz[i] + resultat;
				} else if (chiffre_diz[i] == 1 && (nombre[nombre.length - 1] == 1 || nombre[nombre.length - 1] == 2 || nombre[nombre.length - 1] == 3 || nombre[nombre.length - 1] == 4 || nombre[nombre.length - 1] == 5 || nombre[nombre.length - 1] == 6)) {
					resultat = unitediz[nombre[nombre.length - 1]];
				} else if (chiffre_diz[i] > 1 && nombre[nombre.length - 1] == 1) {
					if (chiffre_diz[i] == 7) {
						resultat = unitediz[nombre[nombre.length - 1]];
						resultat = diz[i - 1] + '-et-' + resultat;
					} else if (chiffre_diz[i] == 8) {
						resultat = diz[i] + '-' + resultat;
					} else if (chiffre_diz[i] == 9) {
						resultat = unitediz[nombre[nombre.length - 1]];
						resultat = diz[i - 1] + '-' + resultat;
					} else {
						resultat = diz[i] + '-et-' + resultat;
					}
				} else if (chiffre_diz[i] == 7 && nombre[nombre.length - 1] > 1) {
					resultat = unitediz[nombre[nombre.length - 1]];
					resultat = diz[i - 1] + '-' + resultat;
				} else if (chiffre_diz[i] == 9 || chiffre_diz[i] == 9 && nombre[nombre.length - 1] > 1) {
					resultat = unitediz[nombre[nombre.length - 1]];
					resultat = diz[i - 1] + '-' + resultat;
				} else {
					resultat = diz[i] + ' ' + resultat;
				}
			}
		}
	}
	function remp_cent() {
		for (let i = 0; i <= 9; i++) {
			if (nombre[nombre.length - 3] == chiffre[i]) {
				resultat = cents[i] + ' ' + resultat;
			}
		}
	}
	function remp_mils() {
		for (let i = 0; i <= 2; i++) {
			if (nombre[0] == chiffre[i]) {
				resultat = mils[i] + ' ' + resultat;
			}
		}
	}

	if (nombre.length == 1) {
		remp_unit();
	}
	else if (nombre.length == 2) {
		remp_unit();
		remp_diz();

	}
	else if (nombre.length == 3) {
		remp_unit();
		remp_diz();
		remp_cent();
	}
	else if (nombre.length == 4) {
		remp_unit();
		remp_diz();
		remp_cent();
		remp_mils();
	}
	if (isNaN(nombre) != true && nombre > 2000 || nombre < 0) {
		alert('votre saisie doit etre comprise entre 0 et 2000');
	}
	if (isNaN(nombre) != true && nombre <= 2000 && nombre > 0) {
		console.log(nombre + ' ' + resultat);
	}
}
affichage("-1");

// function affichage_multiple(nombre) {
// 	for (let i = 0; i < nombre; i++) {
// 		affichage(String(i));
// 	}
// }
// affichage_multiple(2001);