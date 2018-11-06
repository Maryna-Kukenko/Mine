var today = moment().format("YYYY-MM-DD");
console.log("Today:" + today);

var sсhedule = [];
var i = 0;

function sendReq() {
  var ago = moment().subtract(14, "days").add(i, "days").format("YYYY-MM-DD");
  var value = document.getElementById("get_currency").value;

  fetch('https://api.exchangeratesapi.io/' + ago + "?symbols=" + value, {method: 'GET'})
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      sсhedule.push(data);
      if (i < 13) {
        i++;
        sendReq();
      } else {
        console.log(sсhedule);
      }
    })
    .catch(function (err) {
      return err
    })
}





