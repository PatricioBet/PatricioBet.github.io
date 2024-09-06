// Datos de proyectos (podrías cargarlos desde un archivo JSON)
const projects = [
    {
        titulo: "Proyecto 1",
        descripcion: "Descripción del proyecto 1",
        link: "https://github.com/tu-usuario/proyecto-1"
    },
    {
        titulo: "Proyecto 2",
        descripcion: "Descripción del proyecto 2",
        link: "https://github.com/tu-usuario/proyecto-2"
    },
    {
        titulo: "Proyecto 3",
        descripcion: "Descripción del proyecto 3",
        link: "https://github.com/tu-usuario/proyecto-3"
    }
];

// Datos de certificaciones (puedes cargarlos desde un JSON como antes)
fetch('certificaciones.json')
    .then(response => response.json())
    .then(data => displayCertifications(data.certificaciones));

// Función para mostrar proyectos
const displayProjects = () => {
    const projectsCarousel = document.getElementById('projects-carousel');
    projects.forEach(proj => {
        const projectDiv = document.createElement('div');
        projectDiv.innerHTML = `
            <h3>${proj.titulo}</h3>
            <p>${proj.descripcion}</p>
            <a href="${proj.link}" target="_blank">Ver en GitHub</a>
        `;
        projectsCarousel.appendChild(projectDiv);
    });
};

// Función para mostrar certificaciones
const displayCertifications = (certificaciones) => {
    const certificationsCarousel = document.getElementById('certifications-carousel');
    certificaciones.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.innerHTML = `
            <img src="${cert.imagen}" alt="Imagen de ${cert.titulo}">
            <h3>${cert.titulo}</h3>
            <p><strong>Institución:</strong> ${cert.institucion}</p>
            <p><strong>Fecha:</strong> ${cert.fecha}</p>
            <p>${cert.descripcion}</p>
        `;
        certificationsCarousel.appendChild(certDiv);
    });
};

// Llamamos a la función para mostrar los proyectos
displayProjects();

// Función para manejar el carrusel
const handleCarousel = (carouselId, prevButtonId, nextButtonId) => {
    let currentIndex = 0;
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('div');
    const totalItems = items.length;

    document.getElementById(prevButtonId).addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        carousel.style.transform = `translateX(-${currentIndex * 300}px)`;
    });

    document.getElementById(nextButtonId).addEventListener('click', () => {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        carousel.style.transform = `translateX(-${currentIndex * 300}px)`;
    });
};

// Inicializamos los carruseles
handleCarousel('projects-carousel', 'prev-projects', 'next-projects');
handleCarousel('certifications-carousel', 'prev-cert', 'next-cert');
