// Função pra pegar parametros da url de acordo com o nome do parametro
function getParam(param) {
    let urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}



// Lista de teclas pressionadas
const walkDirections = ["ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]; // Lista de teclas de direções
var currentDirections = []; // Lista das teclas (direções) que estão sendo pressionadas atualmente

document.addEventListener("keydown", (event) => {
    if (walkDirections.includes(event.key)) {
        if (currentDirections.indexOf(event.key) == -1) {
            currentDirections.unshift(event.key);
        }
    }
})
document.addEventListener("keyup", (event) => {
    if (walkDirections.includes(event.key)) {
        let index = currentDirections.indexOf(event.key);
        if (index != -1) {
            currentDirections.splice(index, 1);
        }
    }
})