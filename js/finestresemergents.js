/*Espai per variables globals*/

let filla = null;

/**
 *
 *   S'ha d'obrir una finestra filla. En cas que estigui oberta, mostrar un error
 *
 */
function obreFinestra() {
    if (filla === null) {
        filla = window.open(
            "finestrafilla.html",
            "filla",
            "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=960,width=800,height=700"
        );
    } else {
        alert("La finestra filla està oberta");
    }
}

/**
 *
 * Tanca la finestra filla (des de la finestra mare)
 *	En cas que no estigui oberta, mostra un error
 *
 */
function tancaFinestra() {
    if (filla !== null) {
        filla.close();
        filla = null;
    } else {
        alert("La finestra filla està tancada");
    }
}

/**
 *
 *  Mostra a la divisio missatgesMare de la finestra filla una frase generada
 *   a partir dels elements seleccionats dels desplegables de la finestra mare.
 */
function genera() {
    const subjecte = document.getElementById("subjecte");
    const selectedSubject = getSelectedOption(subjecte);

    const verb = document.getElementById("verb");
    const selectedVerb = getSelectedOption(verb);

    const complement = document.getElementById("complement");
    const selectedComplement = getSelectedOption(complement);

    let wholeSentence = `${selectedSubject} ${selectedVerb} ${selectedComplement}`;

    if (filla === null) {
        alert("La finestra filla està tancada");
    } else {
        let missatges = filla.document.getElementById("missatgesMare");
        missatges.innerHTML = wholeSentence;
    }
}

function getSelectedOption(selector) {
    let selectedIndex = selector.selectedIndex;
    return selector.options[selectedIndex].text;
}

/**
 *
 *  Mostra a la divisio missatgesMare de la finestra filla una frase generada
 *   a partir d'elements aleatoris dels desplegables de la finestra mare.
 */
function tindre_sort() {
    let index;
    let wholeSentence = "";

    let subjecte = document.getElementById("subjecte");
    let selectedSubject = selectRandomOption(subjecte);

    let verb = document.getElementById("verb");
    let selectedVerb = selectRandomOption(verb);

    let complement = document.getElementById("complement");
    let selectedComplement = selectRandomOption(complement);

    wholeSentence = `${selectedSubject} ${selectedVerb} ${selectedComplement}`;

    if (filla === null) {
        alert("La finestra filla està tancada");
    } else {
        let missatges = filla.document.getElementById("missatgesMare");
        missatges.innerHTML = wholeSentence;
    }

    function selectRandomOption(sel) {
        let length = sel.length;
        index = Math.floor(Math.random() * length);
        return sel.options[index].text;
    }
}
/**
 *
 *  Afegeix al desplegable amb id="subjecte" de la finestra mare
 *        el text entrat a la casella "entrada_subjecte" de la finestra filla
 */

function afegir_subjecte() {
    const entrada_subjecte = document.getElementById("entrada_subjecte");
    const subjecte = opener.document.getElementById("subjecte");

    const option = document.createElement("option");
    option.value = entrada_subjecte.value;
    if (option.value === "") {
        alert("Escriu quelcom");
    } else {
        option.innerHTML = entrada_subjecte.value;
        subjecte.appendChild(option);
    }
}

/**
 *
 *  Afegeix al desplegable amb id="verb" de la finestra mare
 *        el text entrat a la casella "entrada_verb" de la finestra filla
 */
function afegir_verb() {
    const entrada_verb = document.getElementById("entrada_verb");
    const subjecte = opener.document.getElementById("verb");

    const option = document.createElement("option");
    option.value = entrada_verb.value;
    if (option.value === "") {
        alert("Escriu quelcom");
    } else {
        option.innerHTML = entrada_verb.value;
        subjecte.appendChild(option);
    }
}

/**
 *
 *  Afegeix al desplegable amb id="complement" de la finestra mare
 *        el text entrat a la casella "entrada_complement" de la finestra filla
 */
function afegir_complement() {
    const entrada_complement = document.getElementById("entrada_complement");
    const complement = opener.document.getElementById("complement");

    const option = document.createElement("option");
    option.value = entrada_complement.value;
    if (option.value === "") {
        alert("Escriu quelcom");
    } else {
        option.innerHTML = entrada_complement.value;
        complement.appendChild(option);
    }
}