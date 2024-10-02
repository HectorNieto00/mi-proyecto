let currentIndex = 0;
function cambiarFrase() {
    const frases = [
        "Tienes que irme leyendo y seguir aplastando el botón 😊",
        "🎂 Feliz cumpleaños, amor ❤️",
        "Que cada día sea tan especial como tú lo eres para mí 😊",
        "Que este nuevo año de vida te llene de sonrisas y momentos inolvidables 😎",
        "Hoy celebro no solo tu cumpleaños, sino también la bendición de tenerte en mi vida 👏",
        "Cada segundo contigo hace que el mundo sea más hermoso 🌻",
        "Eres el mejor regalo que la vida le dio a tus papis, nunca olvides eso ! ✊",
        "Hoy espero que tengas un día increíble 🌵",
        "Que cada vela que apagues sea un deseo que el universo cumpla por ti 🍁",
        "Mi mayor deseo es seguir celebrando muchos más cumpleaños juntos 😜",
        "Hoy celebro tu vida y cada uno de los logros que has obtenido ✌️",
        "Es un feliz cumpleaños a la persona que ilumina los días de muchas personas 🌈",
        "Hoy es tu turno de ser la protagonista 😱",
        "Espero que este cumpleaños sea tan brillante y lleno de amor 🏆",
        "Cada año es una aventura nueva que tu terminas conquistando 🕰️✨",
        "Te amo con todo mi corazón 😍, que tengas el cumpleaños más hermoso ⭐",
        "Eres mi sueño hecho realidad, te deseo el cumpleaños más feliz y especial 🤟",
        "Hoy es el día perfecto para recordarte lo increíble que eres. Feliz cumpleaños, reina ❤️",
        "No te olvides que hoy tenemos una llamada pendiente 🕶️",
        "Disfruta tu día 🎒 y en la noche te veo ✌️",
        "Copiame: https://drive.google.com/file/d/168oCcd_gS-fa_e0sNpdQjSgGEf521CWp/view?usp=sharing",
        "Nos veremos muy pronto ❤️, Bye !!!"
    ];
    const fraseElement = document.getElementById("frase");
    fraseElement.innerText = frases[currentIndex];
    currentIndex++;
    if (currentIndex >= frases.length) {
        currentIndex = 0;
    }
}