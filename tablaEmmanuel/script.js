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
  const dropzone = event.target.closest(".dropzone");
  if (dropzone) {
    dropzone.appendChild(draggableElement);
    evento();
  }

  event.dataTransfer.clearData();
}

document.querySelectorAll(".draggable").forEach((item) => {
  item.addEventListener("dragstart", onDragStart);
});

document.querySelectorAll(".dropzone").forEach((zone) => {
  zone.addEventListener("dragover", onDragOver);
  zone.addEventListener("drop", onDrop);
});


