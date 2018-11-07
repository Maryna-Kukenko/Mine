export default function () {
  return fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9b7838e56b6335810f8353f05dc70dfd',
    {
      method:'GET'
    })
    .then(res =>
    res.json())
}