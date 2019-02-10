export default function () {
  return fetch ('catalog.json')
    .then((res) =>{
      console.log(res.text())
    })
}