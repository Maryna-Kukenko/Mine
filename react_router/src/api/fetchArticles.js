export default function () {
  return fetch('https://codeguida.com/api/v1/posts/?category=programming&limit=8&o=-moderated_at&offset=8&tags=',
    {
      method:'GET'
    })
    .then(res =>
    res.json())
}