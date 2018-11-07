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
    articles.appendChild(itemes(item));
  })
}

function itemes(data) {
  var div = document.createElement('div');
  var img = document.createElement('img');
  var title = document.createElement('p');

  div.className = 'newsItem';
  div.addEventListener('click', function () {
    oneNews(data);
  });
  img.className = 'newsItem-img';
  title.className = 'newsItem-tittle';

  img.src = data['title_images']['400'] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCVOyx4dIwguw89FuzUb5yy0pX6O9K44pQMMXykjbprK1vM5y';
  title.innerText = data.title;

  div.appendChild(img);
  div.appendChild(title);
  return div;
}

function oneNews(info) {
  articles.innerHTML = '';

  var div = document.createElement('div');
  var btn = document.createElement('button');
  var img = document.createElement('img');
  var h = document.createElement('h2');
  var author = document.createElement('p');
  var p = document.createElement('p');

  div.className = 'info-div';
  btn.className = 'info-btn';
  btn.addEventListener('click', function () {
    div.innerText = '';
    getArticle().then(function (data) {
      pageCount = data.count / 10;
      console.log(data);
      list(data.results);
    });
  });
  img.className = 'info-img';
  h.className = 'info-tittle';
  author.className = 'info-author';
  p.className = 'info-text';

  btn.innerText = 'BACK';
  img.src = info['title_images']['400'] || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCVOyx4dIwguw89FuzUb5yy0pX6O9K44pQMMXykjbprK1vM5y';
  author.innerText = 'Author: ' + info.author;
  h.innerText = info.title;
  p.innerText = info['full_description'];

  articles.appendChild(div);
  div.appendChild(btn);
  div.appendChild(img);
  div.appendChild(author);
  div.appendChild(h);
  div.appendChild(p);

  return articles;
}

window.addEventListener('scroll', function () {
  var windowSiteY = window.pageYOffset + window.innerHeight;
  var pageButtonSite = articles.offsetHeight + articles.offsetTop;

  if (pageButtonSite <= windowSiteY) {
    page = +10;
    console.log("THE END");
    getArticle().then(function (data) {
      list(data.results);
    });
  }
});





