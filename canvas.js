function crearCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";
    tablero.fillRect(0,0,1200,860);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLineas(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "#0A3871";

    let anchura = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        tablero.moveTo(500 + (anchura*i), 640)
        tablero.lineTo(550 + (anchura*i), 640)
    }
    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = "bold 63px Comic Sans MS";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0f1210";
    
    let anchura = 600/palabraSecreta.length
    tablero.fillText(palabraSecreta[index], 505 + (anchura * index), 620)
    tablero.stroke()
}

let cuentaError=0;

function escribirLetraIncorrecta(letra, errorsLeft){
    cuentaError = cuentaError+1
    tablero.font = "bold 40px Times Roman";
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0f1210";
    tablero.fillText("Letras Incorrectas: ",150, 710);
    tablero.fillText(letra, 535 + (40 * (10 - errorsLeft)), 710, 40);

    if(cuentaError === 1){
        poste();
    }
    if(cuentaError === 2){
        travesano();
    }
    if(cuentaError === 3){
        cabeza();
    }
    if(cuentaError === 4){
        cuerpo();
    }
    if(cuentaError === 5){
        brazoDereho();
    }
    if(cuentaError === 6){
        brazoIzquierdo();
    }
    if(cuentaError === 7){
        piernaDereha();
    }
    if(cuentaError === 8){
        piernaIzquierda();
        gameOver();
    }
}
function poste(){
    tablero.lineWidth = 8;
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(650,100);
    tablero.stroke();
    tablero.closePath();
}

function travesano(){
    tablero.lineWidth = 8;
    tablero.beginPath();
    tablero.moveTo(650,100);
    tablero.lineTo(800,100);
    tablero.moveTo(800,100);
    tablero.lineTo(800,150);
    tablero.stroke();
    tablero.closePath();
}

function cabeza(){
    tablero.lineWidth = 8;
    tablero.beginPath();
    //tablero.fillStyle = "#F3F5F6";
    //tablero.strokeStyle = "#0A3871";
    tablero.moveTo(650,200);
    tablero.arc(800,190,40,0,2*3.14);
    tablero.fill();
}

function cuerpo(){
    tablero.lineWidth = 8;
    tablero.beginPath();
    tablero.moveTo(800,225);
    tablero.lineTo(800,350);
    tablero.strokeStyle = "#000000";
    tablero.stroke();
    tablero.closePath();
}

function brazoDereho(){
    tablero.lineWidth = 8;
    tablero.beginPath();
    tablero.moveTo(800,225);
    tablero.lineTo(750,290);
    tablero.strokeStyle = "#000000";
    tablero.stroke();
    tablero.closePath();
}

function brazoIzquierdo(){
    tablero.lineWidth = 8;
    tablero.beginPath();
    tablero.moveTo(800,225);
    tablero.lineTo(850,290);
    tablero.strokeStyle = "#000000";
    tablero.stroke();
    tablero.closePath();
}

function piernaDereha(){
    tablero.lineWidth = 8;
    tablero.beginPath();
    tablero.moveTo(800,350);
    tablero.lineTo(750,450);
    tablero.strokeStyle = "#000000";
    tablero.stroke();
    tablero.closePath();
}

function piernaIzquierda(){
    tablero.lineWidth = 8;
    tablero.beginPath();
    tablero.moveTo(800,350);
    tablero.lineTo(850,450);
    tablero.strokeStyle = "#000000";
    tablero.stroke();
    tablero.closePath();
}

function gameOver(){
    tablero.font = "bold 100px Comic Sans MS";
    tablero.fillStyle = "#d11515";
    tablero.fillText("Juego Terminado", 300, 400);
    tablero.closePath
}

