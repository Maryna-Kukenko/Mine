export default function() {
  return fetch('https://simple-blog-api.crew.red/posts', {
    method: 'GET'
  }).then(res => res.json())
}
