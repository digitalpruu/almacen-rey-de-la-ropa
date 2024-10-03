const title = "Almacén rey de la ropa";
const email = "xdiana21@hotmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573125166991"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Almacén Rey de la Ropa, nos dedicamos a ofrecer una amplia gama de prendas que te permiten expresar tu estilo personal con confianza. Desde ropa casual hasta opciones más formales, nuestro objetivo es brindarte piezas que se adapten a cada momento de tu vida.\n" +
            "Creemos que la ropa no solo cubre, sino que define quién eres. Por eso, cada artículo en nuestro almacén está seleccionado para ofrecerte la mejor combinación de calidad, moda y comodidad. Queremos que cada prenda te haga sentir auténtico y seguro.\n" +
            "En Almacén Rey de la Ropa, tu estilo es nuestra prioridad. Descubre nuestras colecciones y encuentra las piezas perfectas que reflejen tu verdadero yo.\n" +
            "Visítanos y experimenta cómo nuestra ropa puede transformar tu estilo y realzar tu individualidad. ¡Estamos aquí para ayudarte a definir tu estilo real!"
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Ropa para toda la familia.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566091847313&mibextid=ZbWKwL", // Enlace base de Facebook
        instagram: "https://www.instagram.com/", // Enlace base de Instagram
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
