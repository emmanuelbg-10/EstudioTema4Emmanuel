const divAnimales = document.getElementById('animals');
data.forEach(element => {
  const span = document.createElement('span');
  span.innerHTML = '&#' + element.code + ';';
  span.id = 'animal_'+ element.code;
  span.title = element.name;
  span.draggable = "true";
  span.addEventListener('click', (e) =>  {
    if(e.altKey){
      e.target.remove();
      checkIfEmpty();
    }
  });
  divAnimales.append(span);
});

function onDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id); // Guarda el ID del elemento arrastrado.
  // event.currentTarget.style.backgroundColor = "yellow"; // Cambia el color del elemento mientras es arrastrado (estético).
}

function onDragOver(event) {
  event.preventDefault(); // Permite soltar el elemento al cancelar el comportamiento predeterminado.
}

function onDrop(event) {
  const id = event.dataTransfer.getData("text"); // Recupera el ID del elemento arrastrado.
  const draggableElement = document.getElementById(id); // Obtiene el elemento usando el ID.
  const dropzone = event.target; // Identifica el contenedor donde se suelta.
  const categoria = data.filter( (d) => d.name === draggableElement.title)[0].category;
  if(categoria === dropzone.id){
    dropzone.appendChild(draggableElement); // Mueve el elemento al contenedor destino.
    event.dataTransfer.clearData(); // Limpia los datos transferidos.
    checkIfEmpty();
  } else {
    alert("Opcion no valida ");
  }
}

document.querySelectorAll("span").forEach((item) => {
  item.addEventListener("dragstart", onDragStart); // Asigna el evento dragstart a los elementos arrastrables.
});

document.querySelectorAll(".panel").forEach((zone) => {
  zone.addEventListener("dragover", onDragOver); // Permite que el contenedor acepte elementos arrastrados.
  zone.addEventListener("drop", onDrop); // Maneja el evento de soltar en el contenedor.
});


function checkIfEmpty() {
  if(divAnimales.childElementCount === 0){
    const h2 = document.createElement('h2');
    h2.textContent = '¡Lo conseguiste!';
    divAnimales.append(h2);
  }
}
