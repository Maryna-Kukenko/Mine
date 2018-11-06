'use strict';

window.onload = function () {
  showPokemons()
    .then(function (data) {
      data.results.length = 10;
      console.log(data.results);
      newList(data.results);
    })
};

function showPokemons() {
  return fetch('https://pokeapi.co/api/v2/pokemon/', {method: 'GET'})
    .then(function (response) {
      return response.json();
    })
    .catch(function (err) {
      console.log('ERORR');
    });
}

function newList(data) {
  data.forEach(function (item) {
    poke.appendChild(onePocemon(item));
  })
}

function onePocemon(data) {
  var div = document.createElement('div');
  var h = document.createElement('h2');
  var p = document.createElement('p');

  div.className = 'one_poke';
  h.className = 'name_poke';
  p.className = 'info_poke';


  h.innerText = data.name;
  p.innerText = 'URL: ' + data.url;

  poke.appendChild(div);
  div.appendChild(h);
  div.appendChild(p);

  return div;
}
