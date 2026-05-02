function revelar() {

    document.getElementById("jogador-img").src = "img/_vinicius_junior.png";

    document.getElementById("nome").textContent = "Vinícius José Paixão de Oliveira Júnior";
    document.getElementById("data").textContent = "12/07/2000 (25 anos)";
    document.getElementById("altura").textContent = "1,76 m";
    document.getElementById("posicao").textContent = "Ponta-esquerda / Atacante";
    document.getElementById("rank").textContent = "9,5";

    let elementos = ["nome", "data", "altura", "posicao", "rank"];

    elementos.forEach(id => {
        let el = document.getElementById(id);
        el.classList.remove("placeholder");
        el.classList.add("card-text");
    });
}