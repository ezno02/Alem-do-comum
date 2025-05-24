window.addEventListener('wheel', function (e) {
    e.preventDefault(); // Impede scroll vertical
window.scrollBy({
    left: e.deltaY * 2,
    behavior: 'smooth'
    });
}, { passive: false });

function voltar(){
    let pagVoltarAction = document.getElementById("pag1")
    let divAction = document.getElementById("quadro01")
    let sombraAction = document.getElementById("sombraQuadro01")

    pagVoltarAction.style.backgroundColor = "white"
    setTimeout(() => {
        pagVoltarAction.style.backgroundColor = "black"
        divAction.style.backgroundColor = "black"
        sombraAction.style.backgroundColor = "black"
        setTimeout(() => {
            open("index.html", "_self")
        }, 900);
    }, 800);
}