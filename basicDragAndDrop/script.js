//esto lo que hace es que cuando inicie el coger la etiqueta tendra color amarillo
function onDragStart(event) {
  event
  .dataTransfer
  .setData('text/plain', event.target.id);

  event
  .currentTarget
  .style
  .backgroundColor = 'yellow';
}

//cuando se deje la etiqueta donde este esta funcion se quitara el color amarillo
function onDragOver(event) {
  event.preventDefault();
}

function onDrop(event) {
  const id = event
  .dataTransfer
  .getData('text');
  const draggableElement = document.getElementById(id);
  const dropzone = event.target;
  dropzone.appendChild(draggableElement);
  event
    .dataTransfer
    .clearData();
}