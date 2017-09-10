"use strict";
function CalcularImpares() {
    var numero = document.getElementById("txtNumero").value;
    var xhttp = new XMLHttpRequest();
    var esNumero = true;
    for (var i = 0; i < numero.length; i++) {
        if (isNaN(parseInt(numero.charAt(i)))) {
            esNumero = false;
            break;
        }
    }
    if (esNumero) {
        xhttp.open("GET", "./admin.php?txtValor=" + numero);
        xhttp.send();
        xhttp.onreadystatechange = function () {
            if (xhttp.status == 200 && xhttp.readyState == 4) {
                document.getElementById("txtImpares").value = xhttp.responseText;
            }
        };
    }
    else {
        alert("Valor ingresado no valido");
    }
}
//# sourceMappingURL=ajax.js.map