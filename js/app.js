// Lanzador del modal para pdf
$('.btn-modal-pdf').click(function(e) {
    e.preventDefault();
    $('.modal-pdf .modal-content iframe').attr('src',$(this).attr('data-pdf-file'));
  });

// Scroll, triangulito pequeño del lado inferior derecho, que hace que suba a la seccion principal
jQuery(window).scroll(() => {
  if (jQuery(this).scrollTop() > 1) {
      jQuery('.dmtop').css({
          bottom: "10px"
      });
  } else {
      jQuery('.dmtop').css({
          bottom: "-100px"
      });
  }
}) 

// Seccion Proyectos //
const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault();
			enlaces.forEach((enlace) => enlace.classList.remove('activo'));
			evento.target.classList.add('activo');

			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
		});
	});

	
	// Agregamos listener para las imagenes
	const overlay = document.getElementById('overlay');
	document.querySelectorAll('.grid .item img').forEach((elemento) => {
		elemento.addEventListener('click', () => {
			const ruta = elemento.getAttribute('src');
			const descripcion = elemento.parentNode.parentNode.dataset.descripcion;

			overlay.classList.add('activo');
			document.querySelector('#overlay img').src = ruta;
			document.querySelector('#overlay .descripcion').innerHTML = descripcion;
		});
	});

	// Eventlistener del boton de cerrar
	document.querySelector('#btn-cerrar-popup').addEventListener('click', () => {
		overlay.classList.remove('activo');
	});

	// Eventlistener del overlay
	overlay.addEventListener('click', (evento) => {
		evento.target.id === 'overlay' ? overlay.classList.remove('activo') : '';
	});
});


/** SCROLL ANIMACION **/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  });
  
  /*SCROLL HOME*/
  sr.reveal('.home__title',{}); 
  sr.reveal('.button',{delay: 200}); 
  sr.reveal('.home__img',{delay: 400}); 
  sr.reveal('.home__social-icon',{ interval: 200}); 
  
  /*SCROLL ABOUT*/
  sr.reveal('.about__img',{}); 
  sr.reveal('.about__subtitulo',{delay: 400}); 
  sr.reveal('.about__texto',{delay: 400}); 
  
  /*SCROLL SKILLS*/
  sr.reveal('.skills__subtitle',{}); 
  sr.reveal('.skills__text',{}); 
  sr.reveal('.skills__data',{interval: 200}); 
  sr.reveal('.skills__img',{delay: 600});
  
  /*SCROLL WORK*/
  sr.reveal('.work__img',{interval: 200}); 
  
  /*SCROLL CONTACT*/
  sr.reveal('.contact__input',{interval: 200}); 
