let escComentario = document.querySelector('input');

let comentario = document.querySelector('.comentarios ul');


function inserir(){
    comentario.innerHTML += `<li>${escComentario.value}</li>`;
    comentario.style.listStyleType = 'none';
    escComentario.value= '';
}