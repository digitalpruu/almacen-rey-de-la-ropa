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
        description1: "En Almacén rey de la ropa, ofrecemos una amplia variedad de ropa para toda la familia, asegurando que cada miembro encuentre lo que necesita.",
        description2: "Nuestro compromiso es brindar prendas de calidad que se adapten a cada estilo y ocasión, haciendo que cada compra sea especial."
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
        facebook: "https://www.facebook.com/", // Enlace base de Facebook
        instagram: "https://www.instagram.com/", // Enlace base de Instagram
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
