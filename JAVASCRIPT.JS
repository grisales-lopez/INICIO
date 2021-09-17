console.clear();

const slider = document.getElementsByClassName('SCROLL')[0];
let isDown = false;
let startX;
let scrollLeft;


// Cuando se monitorea el control deslizante, se presiona y se mantiene presionado el mouse, y se mantiene (está hacia abajo) dentro del rango
slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');

  // Encuentre la distancia = el eje x actual del clic del mouse: la distancia del elemento desde el lado izquierdo de la pantalla
  startX = e.pageX - slider.offsetLeft; // Registre las coordenadas actuales del clic
  scrollLeft = slider.scrollLeft; // Registre la distancia de desplazamiento actual del clic
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
  if (!isDown) return; // Si es falso, no hay acción
  e.preventDefault(); // Prohibir eventos preestablecidos

  // Calcule la distancia del eje x que se moverá: coordenada actual del eje x del mouse y haga clic en la coordenada actual del eje x
  const x = e.pageX - slider.offsetLeft;
  // console.log({x, startX})
  const walk = (x - startX) * 2.5;
  slider.scrollLeft = scrollLeft - walk;
});
