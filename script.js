const inputSearch = document.querySelector('.search');
const ulList = document.querySelectorAll('li');
//let inputValue = inputSearch.value;

// ulList.forEach((element) => {
// 	element.addEventListener('keyup', (e) => {
// 		if (element.indexOf(inputSearch.value)) {
// 			console.log('dupa');
// 		}
// 		if (element != inputValue) {
// 			element.style.display = none;
// 		}
// 	});
// });

const searchEngine = (e) => {
	//const text = e.target; w tym momencie jest całym naszym inputem, musimy  dodać value
	const text = e.target.value.toLowerCase(); //teraz jest wartością po kazdum wpisaniu, tak ją przechwycimy
	//tolowerCase => zamienia wszystko na małe litery, zeby było bez znaczenia czy małe czy duze wpisze uzytkownik, nizej zamienimy tez na małe wszystkie wartosci li z któymi bedzie porównanie
	ulList.forEach((elementUlList) => {
		const task = elementUlList.textContent.toLowerCase(); //to jest zawartość kazdego li, zamieniamy je na małe listery
		if (task.indexOf(text) !== -1) {
			//indexOf przyjmuje wartość 1 jeśli tekst zawiera ciąg, lub -1 jeżeli nie zawiera, tutaj jak będzie różne od -1 to będzie wyswietlac wyrazy
			elementUlList.style.display = 'block';
		} else {
			elementUlList.style.display = 'none'; //w przeciwnym wypadku bedzie chować cały element li
		}
	});
};

inputSearch.addEventListener('keyup', searchEngine);
//searchEngine();
