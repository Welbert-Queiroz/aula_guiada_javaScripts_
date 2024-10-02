let logo = document.getElementById("logo")

let postAutores = document.getElementsByClassName("post-autor")

let post2 = document.getElementById("post02")

let formulario = document.getElementById("formulário")

let ambosPosts = document.getElementsByClassName("post")

let dataPosts = document.getElementsByClassName("post-data")

let textoPosts = document.getElementsByClassName("post-texto")

let redesSociais = document.getElementsByClassName("lista_redes")

let texto02 = document.querySelector("post02 .post-texto")

let listasRedesFooter = document.querySelectorAll("footer.lista_redes li")

let linkTexto01 = document.querySelector("aside li a")

let palavraNegritoPost02 = document.querySelector("#post02 .post-autor first-strong")

let nomeFormulario = document.querySelector("#formulario #nome")

let linksListaRedesFooter = document.querySelectorAll("#lista_redes a")

let linksNavegacao = document.querySelectorAll("#elementos_nav a")

let autoresNegrito = document.querySelectorAll("#post #post-autor strong")

let datasNegrito = document.querySelectorAll("#post #post-data strong")

function percorrerArray(lista) {
    for (let i = 0; i < lista.length; i++){
        console.log(lista [i]);
    }
}

percorrerArray(postAutores)

