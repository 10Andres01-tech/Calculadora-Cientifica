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

// Crear los métodos
let m = {

    inicio: function () {

        // Eventos para las teclas
        for (let i = 0; i < p.teclas.length; i++) {
            p.teclas[i].addEventListener("click", m.oprimirTecla);
        }

        // Evento borrar
        p.borrar.addEventListener("click", m.limpiar);
    },

    oprimirTecla: function (tecla) {

        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;

        m.calculadora(p.accion, p.digito);
    },

    calculadora: function (accion, digito) {

        switch (accion) {

            
            case "numero":
                    console.log("numero");
            break;

           
            case "simbolo":
                    console.log("numero");
                break;

 
            case "decimal":
                    console.log("decimal");
                break;


            case "igual":
                    console.log("igual");
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