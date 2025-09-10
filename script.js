 const cambio_palabras = document.getElementById('Texto');
 const boton_cambio = document.getElementById('accion');
 const botonSi = document.getElementById('btnSi');
const botonNo = document.getElementById('btnNo');

 const perdon = [
    'Holiii amiguita, como estas??',
    'vengo a pedirte que me perdones',
    'lo siento mucho en serio.',
    'No queria que te molestaras',
    'y que me dejaras de hablar :(',
    'te prometo que no lo volvere a hacer',
    'y pensare mas en lo que hago',
    'TE PIDO QUE ME PERDONES '
 ]


 let indice = 0;

 boton_cambio.addEventListener('click',() => {
    cambio_palabras.textContent = perdon[indice];
    indice = (indice + 1) % perdon.length;
});


botonSi.addEventListener('click', () => {
    window.location.href = "https://gifft.me/es/o/3d/mkzpq8v0oaeby7cfj1fwu31b";
});

botonNo.addEventListener('click', () => {
    const maxX = window.innerWidth - botonNo.offsetWidth; // Ancho máximo (evita que el botón se salga de la pantalla)
    const maxY = window.innerHeight - botonNo.offsetHeight; // Altura máxima

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    botonNo.style.position = 'absolute';
    botonNo.style.left = `${randomX}px`;
    botonNo.style.top = `${randomY}px`;
});

