var reproductor = document.getElementById('audio');

function retroceder() {
    reproductor.currentTime = reproductor.currentTime - 2;
}

function parar() {
    console.log('tada');
    //lo devuelve a 0
    reproductor.currentTime = 0;
    //lo pausa
    reproductor.pause();
}

function avanzar() {
    reproductor.currentTime = reproductor.currentTime + 2;
}