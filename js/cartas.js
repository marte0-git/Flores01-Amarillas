/* ============================================================
   1) POLEN COMPARTIDO
   ============================================================ */
iniciarPolen();
iniciarMusica();

/* ============================================================
   2) CARTAS — cada una con su mensaje e imagen
   👉 Aquí editas los mensajes y las rutas cuando quieras
   ============================================================ */
const CARTAS = [
    {
        mensaje: "Ojitos lindos...",
        imagen: "../imagenes/imagen42.png"
    },{
        mensaje: "Hay personas que pueden pasar desapercibidas entre tanta gente, pero tú nunca has sido una de ellas.",
        imagen: "../imagenes/imagen40.png"
    },
    {
        mensaje: "Y este año no quería que fueras solo una espectadora...",
        imagen: "../imagenes/imagen43.png"
    },
    {
        mensaje: "tú también merecías tus flores amarillas",
        imagen: "../imagenes/imagen49.png"
    },
    {
        mensaje: "Una chica como tú no debería quedarse sin un detalle bonito ",
        imagen: "../imagenes/imagen58.png"
    },
    {
        mensaje: "Y no sé por qué, pero imaginar que todo esto pueda sacarte aunque sea una pequeña sonrisa…",
        imagen: "../imagenes/imagen45.png"
    },
    {
        mensaje: "hace que valga la pena",
        imagen: "../imagenes/imagen51.png"
    },
    {
        mensaje: "Quizás el momento no sea el adecuado, quizás la vida haya llevado muchas cosas por caminos distintos…",
        imagen: "../imagenes/imagen52.png"
    },
    {
        mensaje: "Pero no podía dejar pasar por alto esta fecha sin que, aunque sea por un momento, te hicieran sentir especial y recordarte lo linda e importante que eres para algunas personas.",
        imagen: "../imagenes/imagen54.png"
    },
    {
        mensaje: "Por más dura que pueda ponerse la vida, por más días malos que aparezcan…",
        imagen: "../imagenes/imagen60.png"
    },
    {
        mensaje: "no dejes que nada te quite esa forma tan bonita que tienes de ver y de sonreír.",
        imagen: "../imagenes/imagen61.png"
    },
       {
        mensaje: "Ojalá la vida te devuelva algún día todo lo bonito que das sin siquiera darte cuenta.",
        imagen: "../imagenes/imagen63.png"
    },
   {
        mensaje: "Que te lleguen personas, momentos y razones que te hagan sentir tan especial como realmente eres.",
        imagen: "../imagenes/imagen64.png"
    },
       {
        mensaje: "Y sobre todo… que nunca se te olvide lo mucho que vales.",
        imagen: "../imagenes/imagen66.png"
    },
       {
        mensaje: "Porque incluso las flores necesitan una estación para volver a florecer.",
        imagen: "../imagenes/imagen65.png"
    },
       {
        mensaje: "Y hoy comienza una muy especial...",
        imagen: "../imagenes/imagen68.png"
    },
    {
        mensaje: 'Feliz inicio de la "PRIMAVERA."',
        imagen: "../imagenes/imagen55.png"
    },
     {
        mensaje: 'Y hablando de PRIMAVERA... creo que todavía falta algo. Después de todo... qué sería de una primavera sin flores?',
        imagen: "../imagenes/imagen67.png"
    }
];

const TOTAL = CARTAS.length;

let indiceActual = 0;

/* ============================================================
   3) FADE DE ENTRADA
   ============================================================ */
window.addEventListener('load', () => {
    setTimeout(() => {
        const fade = document.getElementById('fadeEntrada');
        if (fade) fade.classList.add('oculto');
    }, 100);
});

/* ============================================================
   4) ELEMENTOS DEL DOM
   ============================================================ */
const carta          = document.getElementById('carta');
const cartaMensaje   = document.getElementById('cartaMensaje');
const btnContinuar   = document.getElementById('btnContinuar');
const btnAtras       = document.getElementById('btnAtras');
const contador       = document.getElementById('contador');
const cartaFlor      = document.getElementById('cartaFlor');
const cintaRecuerdo  = document.getElementById('cintaRecuerdo');

/* ============================================================
   5) MARIPOSAS (SVG + vuelo animado)
   ============================================================ */
const mariposasCont = document.getElementById('mariposas');
const coloresMariposa = [
    { a: '#F7B7C4', b: '#E48FB0' },   // rosa
    { a: '#C9B6E4', b: '#A48ED0' },   // lavanda
    { a: '#F5D76E', b: '#E6B93F' },   // amarillo
    { a: '#A8DDB5', b: '#7BC48F' },   // verde menta
    { a: '#A6D8F0', b: '#7BB8DC' }    // azul suave
];

function svgMariposa(c) {
    return `
        <svg viewBox="0 0 100 100">
            <!-- ala izquierda -->
            <g class="ala ala-izq" style="transform-origin: 50% 50%">
                <ellipse cx="35" cy="42" rx="22" ry="26" fill="${c.a}" opacity="0.95"/>
                <ellipse cx="35" cy="65" rx="15" ry="18" fill="${c.b}" opacity="0.85"/>
            </g>
            <!-- ala derecha -->
            <g class="ala ala-der" style="transform-origin: 50% 50%">
                <ellipse cx="65" cy="42" rx="22" ry="26" fill="${c.a}" opacity="0.95"/>
                <ellipse cx="65" cy="65" rx="15" ry="18" fill="${c.b}" opacity="0.85"/>
            </g>
            <!-- cuerpo -->
            <ellipse cx="50" cy="52" rx="2.6" ry="18" fill="#5b4636"/>
            <!-- antenas -->
            <path d="M50 36 Q46 26 42 24" stroke="#5b4636" stroke-width="1.4" fill="none" stroke-linecap="round"/>
            <path d="M50 36 Q54 26 58 24" stroke="#5b4636" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        </svg>
    `;
}

function crearMariposas(cantidad = 5) {
    if (!mariposasCont) return;
    for (let i = 0; i < cantidad; i++) {
        const div = document.createElement('div');
        div.className = 'mariposa';
        const color = coloresMariposa[i % coloresMariposa.length];
        div.innerHTML = svgMariposa(color);
        mariposasCont.appendChild(div);

        animarMariposa(div, i);
    }
}

function animarMariposa(el, seed) {
    const W = () => window.innerWidth;
    const H = () => window.innerHeight;

    const ampX = 120 + Math.random() * 160;
    const ampY = 60 + Math.random() * 110;
    const speedX = 0.0006 + Math.random() * 0.0009;
    const speedY = 0.0009 + Math.random() * 0.0013;
    const phase = Math.random() * Math.PI * 2;

    const baseX = () => W() * (0.25 + Math.random() * 0.5);
    const baseY = () => H() * (0.25 + Math.random() * 0.5);

    let bx = baseX();
    let by = baseY();
    let tUltimoCambio = 0;

    function frame(t) {
        if (t - tUltimoCambio > 6000) {
            bx = baseX();
            by = baseY();
            tUltimoCambio = t;
        }

        const x = bx + Math.sin(t * speedX + phase) * ampX + Math.sin(t * speedX * 2.3) * 30;
        const y = by + Math.cos(t * speedY + phase) * ampY + Math.sin(t * speedY * 1.7) * 20;
        const rot = Math.sin(t * speedX + phase) * 18;

        el.style.transform = `translate(${x}px, ${y}px) rotate(${rot}deg)`;

        requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
}

crearMariposas(5);

/* ============================================================
   6) PÉTALOS CAYENDO DENTRO DE LA CARTA
   ============================================================ */
const petalosCont = document.getElementById('petalos');
const coloresPetalo = ['#F7B7C4', '#F5D76E', '#C9B6E4', '#A8DDB5', '#FFD9A0'];

function crearPetalo() {
    if (!petalosCont) return;
    const p = document.createElement('span');
    p.className = 'petalo';
    p.style.background = coloresPetalo[Math.floor(Math.random() * coloresPetalo.length)];
    p.style.left = Math.random() * 100 + '%';

    const tamaño = 6 + Math.random() * 8;
    p.style.width = tamaño + 'px';
    p.style.height = tamaño + 'px';
    p.style.opacity = 0.5 + Math.random() * 0.4;

    const duracion = 6 + Math.random() * 6;
    const deriva = (Math.random() - 0.5) * 80;
    const giro = (Math.random() - 0.5) * 720;
    p.style.setProperty('--deriva', deriva + 'px');
    p.style.setProperty('--giro', giro + 'deg');

    p.style.animation = `caerPetalo ${duracion}s linear forwards`;
    petalosCont.appendChild(p);

    setTimeout(() => p.remove(), duracion * 1000 + 200);
}

/* Inyectar keyframes dinámicamente */
(function inyectarKeyframes() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes caerPetalo {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0;
            }
            10% { opacity: 0.85; }
            100% {
                transform: translateY(560px) translateX(var(--deriva)) rotate(var(--giro));
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
})();

/* Generar pétalos de forma continua */
setInterval(() => {
    if (petalosCont && petalosCont.childElementCount < 14) crearPetalo();
}, 900);

/* Pre-poblar algunos al cargar */
for (let i = 0; i < 6; i++) {
    setTimeout(() => crearPetalo(), i * 250);
}

/* ============================================================
   7) ANIMACIÓN LETRA POR LETRA (B2)
   ============================================================ */
/* ============================================================
   ANIMACIÓN PALABRA POR PALABRA (B2) — v2
   Anima cada palabra completa (no cada letra) para que
   el texto no se corte por la mitad.
   ============================================================ */
function animarTextoLetraPorLetra(elemento) {
    if (!elemento) return;

    const textoOriginal = elemento.textContent || '';
    elemento.textContent = '';

    // Separar por palabras conservando los espacios
    const palabras = textoOriginal.split(/(\s+)/);

    let delay = 0;
    for (let i = 0; i < palabras.length; i++) {
        const palabra = palabras[i];

        // Si es solo espacio, lo añadimos directo
        if (/^\s+$/.test(palabra)) {
            elemento.appendChild(document.createTextNode(palabra));
            continue;
        }

        // Envolvemos la palabra completa
        const span = document.createElement('span');
        span.className = 'palabra';
        span.style.animationDelay = `${delay}s`;
        span.textContent = palabra;
        elemento.appendChild(span);

        delay += 0.15;   // 150ms entre palabras (ajusta a gusto)
    }
}

/* ============================================================
   8) RENDERIZAR CARTA ACTUAL
   ============================================================ */
function renderCarta() {
    const carta = CARTAS[indiceActual];

    // Actualiza mensaje
    cartaMensaje.innerHTML = carta.mensaje;

    // Actualiza la imagen con un fade suave
    if (cartaFlor) {
        cartaFlor.style.transition = 'opacity 0.35s ease';
        cartaFlor.style.opacity = '0';
        setTimeout(() => {
            cartaFlor.src = carta.imagen;
            cartaFlor.style.opacity = '1';
        }, 200);
    }

    // Contador arriba derecha ("1 / 6")
    if (contador) {
        contador.textContent = `${indiceActual + 1} / ${TOTAL}`;
    }

    // Cinta superior "Recuerdo nº X"
    if (cintaRecuerdo) {
        cintaRecuerdo.textContent = `Recuerdo nº ${indiceActual + 1}`;
    }

    // Botón atrás oculto en la primera
    if (btnAtras) {
        if (indiceActual === 0) btnAtras.classList.add('oculto');
        else btnAtras.classList.remove('oculto');
    }

    // Texto del botón continuar
    if (btnContinuar && btnContinuar.firstChild) {
        if (indiceActual === TOTAL - 1) {
            btnContinuar.firstChild.textContent = 'Ver mi ramo ';
        } else {
            btnContinuar.firstChild.textContent = 'Continuar ';
        }
    }

    // 🎯 Animación letra por letra al renderizar
    animarTextoLetraPorLetra(cartaMensaje);
}

/* ============================================================
   9) TRANSICIÓN ENTRE CARTAS
   ============================================================ */
function irA(nuevoIndice) {
    if (nuevoIndice < 0 || nuevoIndice >= TOTAL) return;

    carta.classList.add('saliendo');

    setTimeout(() => {
        indiceActual = nuevoIndice;
        renderCarta();

        carta.classList.remove('saliendo');
        carta.classList.add('entrando');

        // Forzar reflow y luego quitar "entrando"
        void carta.offsetWidth;
        carta.classList.remove('entrando');
    }, 1000);   // 1 segundo → coincide con la transición CSS
}

/* ============================================================
   10) EVENTOS
   ============================================================ */
if (btnContinuar) {
    btnContinuar.addEventListener('click', () => {
        if (indiceActual === TOTAL - 1) {
            // Última carta → ir al ramo
            document.body.style.transition = 'opacity 0.6s ease';
            document.body.style.opacity = '0';
            setTimeout(() => {
                window.location.href = 'ramo.html';
            }, 600);
        } else {
            irA(indiceActual + 1);
        }
    });
}

if (btnAtras) {
    btnAtras.addEventListener('click', () => {
        if (indiceActual > 0) irA(indiceActual - 1);
    });
}

/* ============================================================
   11) INICIO
   ============================================================ */
renderCarta();