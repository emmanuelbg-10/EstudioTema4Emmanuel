const divAnimals = document.getElementById('animals');
const Divcategories = document.getElementById('categories');

const categories = new Set(data.map(a => a.category));
categories.forEach(category => {
  console.log(category);
  const divCategory = document.createElement('div');
  divCategory.classList.add('category')
  const h2 = document.createElement('h2');
  h2.textContent = category;
  const panel = document.createElement('div');
  panel.classList.add('panel');
  panel.id = category;
  divCategory.append(h2, panel);
  Divcategories.append(divCategory);
});


data.forEach(element => {
  const span = document.createElement('span');
  span.id = element.name
  span.title = element.name
  span.innerHTML = "&#"+ element.code +";";
  span.draggable = "true";
  span.classList.add(element.category);
  divAnimals.append(span);
});

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  event.preventDefault();
  const id = event.dataTransfer.getData("text");
  const draggableElement = document.getElementById(id);
  const dropzone = event.target.closest(".panel");
  if (draggableElement.classList.contains(dropzone.id)) {
    dropzone.appendChild(draggableElement);
  } else{
    alert('No puedes');
  }

  event.dataTransfer.clearData();
}

document.querySelectorAll("span").forEach((item) => {
  item.addEventListener("dragstart", onDragStart);
});

document.querySelectorAll(".panel").forEach((zone) => {
  zone.addEventListener("dragover", onDragOver);
  zone.addEventListener("drop", onDrop);
});

