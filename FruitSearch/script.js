const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const search = (str) => {
	let results = [];
	fruit.forEach((f) => {
	  if (f.toLowerCase().includes(str.toLowerCase())) {
		results.push(f);
	  }
	});
	return results;
  };

function searchHandler(evt) {
	// TODO
	showSuggestions(search(evt.target.value));

	document.body.addEventListener('click', hideSuggestions);
}

const showSuggestions = (results, inputVal) => {
	const fruitList = results.map(list => `<li>${list}</li>`).join('');
  
	suggestions.innerHTML = `<ul>${fruitList}</ul>`;
	suggestions.style.display = 'block';
  };
  

function useSuggestion(evt) {
	// TODO
	input.value = evt.target.innerHTML;
	suggestions.style.display='none';
}

function hideSuggestions(evt) {
	if(!evt.target.matches('#fruit') && !evt.target.closest('.suggestions')){
		suggestions.style.display ='none';
		document.body.removeEventListener('click', hideSuggestions);
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);