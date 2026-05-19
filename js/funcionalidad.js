let p = {
    teclas: document.querySelectorAll(".calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadSigno: 0,
    cantDecimal: false,
    resultado: false,
<<<<<<< HEAD
};

=======
    borrar: document.querySelector("#borrar")
};

// Crear los métodos
>>>>>>> fad1aa00b31f705cafdddf5bee6d84c54cfc6ca4
let m = {

    inicio: function () {

<<<<<<< HEAD
        for (let i = 0; i < p.teclas.length; i++) {

            p.teclas[i].addEventListener("click", m.oprimirTecla);

        }

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

                p.operaciones.innerHTML += p.digito;

                break;

            case "decimal":

                p.operaciones.innerHTML += p.digito;

                break;

            case "igual":

                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);

                break;

        }

    },
    borrarCalculadora: function(){
        p.operaciones.innerHTML = 0;
    }

};

=======
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


>>>>>>> fad1aa00b31f705cafdddf5bee6d84c54cfc6ca4
m.inicio();