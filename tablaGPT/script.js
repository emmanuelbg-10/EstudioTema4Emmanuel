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

  // Obtener el tipo de datos del elemento arrastrado
  const draggedType = draggableElement.dataset.type;

  // Obtener la zona de drop más cercana y su tipo permitido
  const dropzone = event.target.closest(".dropzone");
  const dropzoneType = dropzone ? dropzone.dataset.type : null;

  // Validar si los tipos coinciden
  if (dropzone && draggedType === dropzoneType) {
    dropzone.appendChild(draggableElement);
    event.dataTransfer.clearData();
  } else {
    alert("No puedes soltar este elemento aquí.");
  }
}

// Agregar eventos a elementos arrastrables
document.querySelectorAll(".draggable").forEach((item) => {
  item.addEventListener("dragstart", onDragStart);
});

// Agregar eventos a zonas de drop
document.querySelectorAll(".dropzone").forEach((zone) => {
  zone.addEventListener("dragover", onDragOver);
  zone.addEventListener("drop", onDrop);
});
