function cuadradosCentrales() {
    let x0 = document.getElementById("semilla").value;
    let vec = document.getElementById("cantidad").value;
    let k = x0.toString().length;
    let m = Math.pow(10, k);
    let xi = [x0];
    let ri = [0];
    let bases = [0, 0];
    let start, end, baseXi, tempRandom;

    for (let i = 1; i <= vec; i++) {
        baseXi = Math.pow(xi[i - 1], 2);

        if ((baseXi.toString().length % 2 == 0 && xi[i - 1].toString().length % 2 != 0) || ((baseXi.toString().length % 2 != 0 && xi[i - 1].toString().length % 2 == 0))) {
            baseXi = "0" + baseXi;
        }

        start = Math.floor((baseXi.toString().length - k) / 2);
        end = (baseXi.toString()).length - start;
        tempRandom = baseXi.toString().substring(start, end);

        bases[i] = baseXi;
        xi[i] = tempRandom;
        ri[i] = xi[i] / m;
    }
    generarTabla(1, vec, bases, xi, ri);
}

function productosCentrales() {
    let x0 = document.getElementById("semilla1").value;
    let x1 = document.getElementById("semilla2").value;
    let vec = parseInt(document.getElementById("cantidad1").value) + 1;
    let k = x0.toString().length;
    let m = Math.pow(10, k);
    let xi = [x0, x1];
    let ri = [0, 0];
    let bases = [0, 0];
    let start, end, baseXi, tempRandom;

    if(x0.toString().length != x1.toString().length) {
        alert("Las semillas deben tener la misma longitud");
        location.reload();
    }

    for (let i = 2; i <= vec; i++) {
        baseXi = xi[i - 2] * xi[i - 1];

        if ((baseXi.toString().length % 2 == 0 && xi[i - 1].toString().length % 2 != 0) || ((baseXi.toString().length % 2 != 0 && xi[i - 1].toString().length % 2 == 0))) {
            baseXi = "0" + baseXi;
        }

        start = Math.floor((baseXi.toString().length - k) / 2);
        end = (baseXi.toString()).length - start;
        tempRandom = baseXi.toString().substring(start, end);

        bases[i] = baseXi;
        xi[i] = tempRandom;
        ri[i] = xi[i] / m;
    }
    generarTabla(2, vec, bases, xi, ri);
}


function generarTabla(vecInicio, vecFinal, bases, xi, ri) {
    document.getElementById("forms").style.display = "none"
    document.getElementById("results").innerHTML = "<pre>#      Xi Original         Xi Resultante       Ri<br>"

    for (let i = vecInicio; i <= vecFinal; i++) {
        document.getElementById("results").innerHTML +="<pre> " + i + "      " + bases[i] + "           " + xi[i] + "           " + ri[i] + "</pre>";
    }

    document.getElementById("results").innerHTML += '<input type="button" id="back" name="back" class="btn btn-success" onclick="location.reload(false);" value="Regresar"></input>';

}
