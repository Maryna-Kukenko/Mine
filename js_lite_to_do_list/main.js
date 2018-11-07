var block = document.querySelector('.popup');
var info = document.querySelector('.popupInner');
var almost = document.querySelector('.progress');
var ready = document.querySelector('.relized');

openPopup.onclick = function () {
  block.style.display = 'block';
};

block.onclick = function () {
  block.style.display = 'none';
};

info.onclick = function (e) {
  e.stopPropagation();
  e.preventDefault();
};

var button = document.querySelector('button');

button.onclick = function () {
  var name = info.children[0];
  var desc = info.children[1];
  var tasks = document.querySelector('.tasks');

  var task = document.createElement('div');
  var p1 = document.createElement('p');
  var p2 = document.createElement('p');

  task.onclick = function (e) {
    almost.appendChild(e.currentTarget);
    task.onclick = function (e) {
      ready.appendChild(e.currentTarget);
      task.onclick = function (e) {
        e.currentTarget.remove();
      }
    }
  };

  p1.innerText = name.value;
  p2.innerText = desc.value;
  task.className = "taskName";
  p1.className = "pName";
  p2.className = "pDesc";
  tasks.appendChild(task);
  task.appendChild(p1);
  task.appendChild(p2);

  name.value = "";
  desc.value ="";
  block.style.display = 'none';
}
