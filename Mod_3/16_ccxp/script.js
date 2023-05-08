const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

function countDown() {
    // Na criação do objeto Date na constante dataLanc, o segundo parâmetro que representa o mês, 
    //começa a contar a partir de zero, ou seja, janeiro é representado por zero, fevereiro por 1 e assim por diante.
    const dataLanc = new Date(2023, 05, 06, 18, 11, 0);
    const hoje = new Date();


    const segTotal = (dataLanc-hoje)/1000;

    const diferencaEmDias = Math.floor(segTotal / 60 / 60 / 24);
    const diferencaEmHoras = Math.floor(segTotal / 60 / 60 ) % 24;
    const diferencaEmMinutos = Math.floor(segTotal / 60) % 60;
    const diferencaEmSegundos = Math.floor(segTotal) % 60;


    // console.log(`${diferencaEmDias}D`)
    // console.log(`${diferencaEmHoras}H`)
    // console.log(`${diferencaEmMinutos}M`)
    // console.log(`${diferencaEmSegundos}S`)
    // console.log(dataLanc)
    // console.log(hoje)

    dia.innerHTML = formatoTempo(diferencaEmDias)+"D";
    hora.innerHTML = formatoTempo(diferencaEmHoras)+"H";
    minuto.innerHTML = formatoTempo(diferencaEmMinutos)+"M";
    segundo.innerHTML = formatoTempo(diferencaEmSegundos)+"S";

}

//função para adicionar o 0 qunado for menos que 10
function formatoTempo( tempo ){
    return tempo < 10? `0${tempo}` : tempo;
}

//chamando a função
countDown()
//Função que faz a pagina ficar atualizando os segundos para o lancamento
setInterval(countDown, 1000)

