
function evento() {
  const tdDrop = document.querySelectorAll('#dropzone2 tr');
  const div = document.querySelector('div');
tdDrop.forEach(tr => {
  // tr.children[0].removeEventListener('mouseover', entra)
  // tr.children[0].removeEventListener('mouseleave', sale)

  tr.children[0].addEventListener('mouseover', entra)
  tr.children[0].addEventListener('mouseleave', sale)
  function sale() {
    div.textContent = '';
  }
  
  function entra(){
    div.textContent = parseFloat(tr.children[1].textContent.replace(/[^0-9.,]/g, "") * tr.children[2].textContent);
  }
});



}

