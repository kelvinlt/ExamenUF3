window.addEventListener("load", ini, false);
var selected = false;
function ini() {
    document.getElementById('start').addEventListener("click", getImagen, false);
    document.getElementById('image').addEventListener("mouseover", getPistaJson, false);
    document.getElementById('image').addEventListener("mouseleave", getRespuestasJson, false);
}

function getImagen() {
    if (!selected) {
        var xmlHttp = new XMLHttpRequest();
        urlDestino = "resposta.php?inicio=si";
        xmlHttp.open("GET", urlDestino, true);
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4) {
                putImagen(xmlHttp);
            }
        };
        xmlHttp.send(null);
    }
};

function getRespuestasJson() {
    var xmlHttp = new XMLHttpRequest();
    urlDestino = "resposta.php?respuestas=si";
    xmlHttp.open("GET", urlDestino, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            showRespuestasJson(xmlHttp);
        }
    };
    xmlHttp.send(null);
};

function getPistaJson() {
    var xmlHttp = new XMLHttpRequest();
    urlDestino = "resposta.php?pista=si";
    xmlHttp.open("GET", urlDestino, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            showPistaJson(xmlHttp);
        }
    };
    xmlHttp.send(null);
};


function putImagen(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseText;
        var respJSON = JSON.parse(resp);
        var txt = respJSON.ruta;
        var img = "<img src='" + txt + "'/>";
        document.getElementById("image").innerHTML = img;
    }
};

function showRespuestasJson(xmlHttp) {
    if (xmlHttp.status == 200) {
        document.getElementById("image").innerHTML = "";
        var resp = xmlHttp.responseText;
        var respJSON = JSON.parse(resp);
        var txt = respJSON.good;

        var goodAns = document.createElement('DIV');
        var badAns = document.createElement('DIV');
        goodAns.innerHTML = '<button  type="button" class="btn btn-block btn-default">' + respJSON.good;
        +"</button>";
        badAns.innerHTML = '<button  type="button" class="btn btn-block btn-default">' + respJSON.bad;
        +"</button>";
        document.getElementById('pregunta').appendChild(goodAns);
        document.getElementById('pregunta').appendChild(badAns);
        
        goodAns.addEventListener("click", selectGoodAns, false);
        badAns.addEventListener("click", selectBadAns, false);
    }
};

function showPistaJson(xmlHttp) {
    if (xmlHttp.status == 200) {
        var resp = xmlHttp.responseText;
        var respJSON = JSON.parse(resp);
        var pista = respJSON.pista;
        var p = "<h3>" + pista + "</h3>";
        document.getElementById("pista").innerHTML = p;
    }
};

function selectGoodAns(event) {
    if (!selected) {
        console.log(event.target);
        event.target.className = 'btn btn-block btn-success';
    }
    selected = true;
}

function selectBadAns(event) {
    if (!selected) {
        event.target.className = 'btn btn-block btn-danger';
    }
    selected = true;
}



