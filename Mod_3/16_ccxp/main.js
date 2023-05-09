const ingreesos = []


function addRedBorder (id) {
    element = document.querySelector("#" + id)
    element.style.border = "10px solid red"
}
// objetivo dessa function é fazer o item selector, aparecer o boxshdow, destacando de uma melhor forma onde o cursor está 
function highLightCard (selector) {
    var element = document.querySelector(selector);
    // A função toggle ela insere e tira a classe ao mesmo tempo
    element.classList.toggle("card-highlight");
}

function checkKeyboardCode() {
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;

        alert(`Tecla pressionada ${name} \r\n Key code: ${code}`);
    }, false)
}

function addKeyboardEventListeners() {
    document.addEventListener ('keydown', (event) => {
        
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("esgotado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'Digit1') {
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Digit2') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Digit3') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Digit4') {
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }
    }, false);
}
// função para realizar as seleções dos ingressos
function selectCard(selector) {
    // função via querry onde pegao id que colocamos como selector no html e aplica uma classe realizada via css
    var element = document.querySelector(selector);

    element.classList.toggle("card-select");
    // função para se tiver algum item selelcionado, ele enviar esse item para o array se estiver nos conformes  
    if (ingreesos.includes(selector)) ingreesos.pop(selector);
    else (ingreesos.push(selector));

}
// arrow function =>, substituin a escrita da function, fazer em casos que não se repita muita a função
showSelectCards = () => {
    if (ingreesos.length > 0) alert("ingressos selecionados:" + ingreesos); 
    console.log(ingreesos)

    button = document.getElementById("oi")
    button.style.background = "red"
    button.style.color = "black"
    button.innerHTML = "Adicionado"
    button.style.border = "10px solid blue"
}

// checkKeyboardCode()1
addKeyboardEventListeners()