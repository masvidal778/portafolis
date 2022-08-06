function majuscules(){
    let textDemanat = prompt("Escriu un text");
    let textIntroduit = "";
    for(let i=0;i<textDemanat.length;i++){
        if (i-1 < 0 || textIntroduit.charAt(i-1) === " "){
            textIntroduit += textDemanat.charAt(i).toUpperCase();
        }else{
            textIntroduit += textDemanat.charAt(i).toLowerCase();
        }
    }
    alert(textIntroduit);
}

function aillarNum() {
    function obtenirNumeros(cadena) {
        let numeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        return cadena.filter((lletra) => {
            let flag = false;
            let j = -1;
            while (j++ < numeros.length && !flag) flag = lletra === numeros[j];
            return flag;
        })
    }

    let cadenaIntroduida = prompt("Escriu un llistat de números i lletres");
    let nombres = cadenaIntroduida.split(" ");
    let totalCadena = "";
    for (let i = 0; i < nombres.length; i++) {
        if (i < nombres.length - 1) {
            totalCadena += obtenirNumeros(nombres[i].split("")).join("") + ', ';
        } else {
            totalCadena += obtenirNumeros(nombres[i].split("")).join("");
        }
    }

    alert(totalCadena);
}

function ordenacioInv(){
    let cadena = prompt("Escriu un llistat de paraules, separades de la següent manera: 'Palamós, Manresa, Sort...'");
    let paraules = cadena.split(", ");
    let paraulesAux = [];

    for(let i=0; i < paraules.length; i++){
        let cadenaAux = paraules[i].split("");
        paraulesAux[i] = cadenaAux.reverse().join("");
    }
    a = paraulesAux.sort((a, b) => a.localeCompare(b));

    for(let i=0; i < paraulesAux.length; i++){
        let aux = paraulesAux[i].split("");
        paraules[i] = aux.reverse().join("");
    }

    alert(paraules);
}


    function multipliquem() {

        let nombre;
        nombre = parseInt(document.getElementById("nombre").value);

        if (nombre.length==0 || isNaN(nombre) || (nombre < 1) || (nombre > 10)) {
            alert("Has d'entrar un nombre entre 1 i 10");
        } else {
            let resposta = "";
            for (let i = 0; i <= 10; i++) {
                let producte = nombre * i;
                resposta += `${nombre} x ${i} = ${producte}<br/>`;
            }
            document.getElementById("resultat").innerHTML = resposta;
        }

}

//Desplegables

const desplegable1 = document.getElementById("desplegable1");
const desplegable2 = document.getElementById("desplegable2");

/**
 *
 * Mou tots els elements del desplegable 2 al desplegable 1, i reinicia tots els comptadors
 *
 */
function reiniciar() {
    let comptador = desplegable2.length;
    while (desplegable2.length > 0) {
        desplegable1.add(desplegable2.options[desplegable2.selectedIndex]);
    }
    alert(`S'han mogut ${comptador} elements`);
}

/**
 *
 * Mou l'element seleccionat del desplegable 2, al desplegable1
 *
 */
function moure1() {
    if(desplegable1.length===0){
        alert("No hi ha elements en el desplegable");
    }else{
        let selectedOption = desplegable1.options[desplegable1.selectedIndex];
        desplegable2.add(selectedOption);
        selectedOption.value++;
        alert(
            `L'element ${selectedOption.textContent} s'ha mogut ${selectedOption.value} vegades`
        );
    }
}

/**
 *
 * Mou l'element seleccionat del desplegable 1, al desplegable2
 *
 */
function moure2() {
    if(desplegable2.length===0){
        alert("No hi ha elements en el desplegable");
    }else{
        let selectedOption = desplegable2.options[desplegable2.selectedIndex];
        desplegable1.add(selectedOption);
        selectedOption.value++;
        alert(
            `L'element ${selectedOption.textContent} s'ha mogut ${selectedOption.value} vegades`
        );
    }
}


//Gràfiques

$(document).ready(function(){
    barChart();

    $(window).resize(function(){
        barChart();
    });

    function barChart(){
        $('.bar-chart').find('.progress').each(function(){
            var itemProgress = $(this),
                itemProgressWidth = $(this).parent().width() * ($(this).data('percent') / 100);
            itemProgress.css('width', itemProgressWidth);
        });
    }
});

$(document).ready(function(){

    $('.pujar').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function(){
        if( $(this).scrollTop() > 0 ){
            $('.pujar').slideDown(300);
        } else {
            $('.pujar').slideUp(300);
        }
    });

});