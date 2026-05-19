let p = {
    teclas: document.querySelectorAll(".calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSigno: 0,
    cantDecimal: false,
    resultado: false,
    borrar: document.querySelector("#borrar")
};

let m = {

    inicio: function () {

        for (let i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla);
        }

        p.borrar.addEventListener("click", m.limpiar);
    },

    oprimirTecla: function (e) {

        p.accion = e.target.getAttribute("class");
        p.digito = e.target.innerHTML;

        m.calculadora(p.accion);
    },

    calculadora: function (accion) {

        switch (accion) {

            case "numero":

                if (p.operaciones.innerHTML == "0") {
                    p.operaciones.innerHTML = p.digito;
                } else {
                    p.operaciones.innerHTML += p.digito;
                }

                break;

            case "simbolo":

                let contenido = p.operaciones.innerHTML;
                let ultimo = contenido.slice(-1);

                // operadores permitidos
                let operadores = ["+", "-", "*", "/"];

                // NO permitir comenzar con operador
                if (contenido == "0") {
                    return;
                }

                // NO permitir operadores seguidos
                if (operadores.includes(ultimo)) {
                    return;
                }

                p.operaciones.innerHTML += p.digito;

                break;

            case "decimal":

                let texto = p.operaciones.innerHTML;

                // separar por operadores
                let partes = texto.split(/[\+\-\*\/]/);

                // obtener el último número
                let ultimoNumero = partes[partes.length - 1];

                // NO permitir más de un decimal
                if (ultimoNumero.includes(".")) {
                    return;
                }

                p.operaciones.innerHTML += p.digito;

                break;

            case "igual":

                try {

                    let resultado = eval(p.operaciones.innerHTML);

                    p.operaciones.innerHTML = resultado;

                } catch (error) {

                    p.operaciones.innerHTML = "Error";
                }

                break;
        }
    },

    limpiar: function () {

        p.operaciones.innerHTML = "0";
        p.cantDecimal = false;
        p.resultado = false;
    }
};

m.inicio();