'use strict';

var page = 1;
var pageCount = 0;

window.onload = function () {
  getArticle().then(function (data) {
    pageCount = data.count / 10;
    console.log(data);
    list(data.results);
  });
}

function getArticle() {
  return fetch('https://codeguida.com/api/v1/posts/?   category=programming&limit=10&o=-moderated_at&offset=' + (page - 1) * 10 + '&tags=')
    .then(function (res) {
      return res.json()
    })
    .catch(function () {
      console.log('ERROR');
    })
}

function list(data) {
  data.forEach(function (item) {
    arcticles.appendChild(itemes(item));
  })
}

function itemes(data) {
  var div = document.createElement('div');
  var img = document.createElement('img');
  var title = document.createElement('p');

  div.className = 'newsItem';
  img.className = 'newsItem-img';
  title.className = 'newsItem-tittle';

  img.src = data['title_images']['400'] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCVOyx4dIwguw89FuzUb5yy0pX6O9K44pQMMXykjbprK1vM5y';
  title.innerText = data.title;

  div.appendChild(img);
  div.appendChild(title);
  return div;
}

window.addEventListener('scroll', function () {
  var windowSiteY = window.pageYOffset + window.innerHeight;
  var pageButtonSite = arcticles.offsetHeight + arcticles.offsetTop;

  if (pageButtonSite <= windowSiteY) {
    page = +10;
    console.log("THE END");
    getArticle().then(function (data) {
      list(data.results);
    });
  }
});





