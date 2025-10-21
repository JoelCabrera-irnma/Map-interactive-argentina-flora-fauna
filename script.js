
// Datos de ejemplo para cada provincia (flora y fauna)
const provinceData = {
    "Jujuy": {
        flora: [
            { name: "Cardón", img: "https://via.placeholder.com/150/74b72e/FFFFFF?text=Cardón" },
            { name: "Algarrobo", img: "https://via.placeholder.com/150/2d5016/FFFFFF?text=Algarrobo" },
            { name: "Queñoa", img: "https://via.placeholder.com/150/1a2a6c/FFFFFF?text=Queñoa" }
        ],
        fauna: [
            { name: "Llama", img: "https://via.placeholder.com/150/b21f1f/FFFFFF?text=Llama" },
            { name: "Cóndor", img: "https://via.placeholder.com/150/fdbb2d/000000?text=Cóndor" },
            { name: "Vicuña", img: "https://via.placeholder.com/150/666666/FFFFFF?text=Vicuña" }
        ]
    },
    "Salta": {
        flora: [
            { name: "Palo Santo", img: "https://via.placeholder.com/150/74b72e/FFFFFF?text=Palo+Santo" },
            { name: "Tala", img: "https://via.placeholder.com/150/2d5016/FFFFFF?text=Tala" }
        ],
        fauna: [
            { name: "Yaguareté", img: "https://via.placeholder.com/150/b21f1f/FFFFFF?text=Yaguareté" },
            { name: "Tapir", img: "https://via.placeholder.com/150/fdbb2d/000000?text=Tapir" }
        ]
    },
    "Buenos Aires": {
        flora: [
            { name: "Ombú", img: "https://via.placeholder.com/150/74b72e/FFFFFF?text=Ombú" },
            { name: "Cina-cina", img: "https://via.placeholder.com/150/2d5016/FFFFFF?text=Cina-cina" }
        ],
        fauna: [
            { name: "Hornero", img: "https://via.placeholder.com/150/b21f1f/FFFFFF?text=Hornero" },
            { name: "Carpincho", img: "https://via.placeholder.com/150/fdbb2d/000000?text=Carpincho" }
        ]
    },
    "Mendoza": {
        flora: [
            { name: "Algarrobo Dulce", img: "https://via.placeholder.com/150/74b72e/FFFFFF?text=Algarrobo+Dulce" },
            { name: "Jarilla", img: "https://via.placeholder.com/150/2d5016/FFFFFF?text=Jarilla" }
        ],
        fauna: [
            { name: "Cóndor Andino", img: "https://via.placeholder.com/150/b21f1f/FFFFFF?text=Cóndor+Andino" },
            { name: "Puma", img: "https://via.placeholder.com/150/fdbb2d/000000?text=Puma" }
        ]
    },
    "Córdoba": {
        flora: [
            { name: "Algarrobo", img: "https://via.placeholder.com/150/74b72e/FFFFFF?text=Algarrobo" },
            { name: "Espinillo", img: "https://via.placeholder.com/150/2d5016/FFFFFF?text=Espinillo" }
        ],
        fauna: [
            { name: "Zorro Gris", img: "https://via.placeholder.com/150/b21f1f/FFFFFF?text=Zorro+Gris" },
            { name: "Ñandú", img: "https://via.placeholder.com/150/fdbb2d/000000?text=Ñandú" }
        ]
    }
    // Podrías agregar más provincias aquí
};

// Seleccionar elementos del DOM
const provinces = document.querySelectorAll('.province');
const emptyState = document.querySelector('.empty-state');
const contentDisplay = document.querySelector('.content-display');
const floraGallery = document.querySelector('.flora-gallery');
const faunaGallery = document.querySelector('.fauna-gallery');
const panelTitle = document.querySelector('.panel-title');

// Añadir event listeners a cada provincia
provinces.forEach(province => {
    province.addEventListener('click', function () {
        // Remover clase active de todas las provincias
        provinces.forEach(p => p.classList.remove('active'));

        // Añadir clase active a la provincia clickeada
        this.classList.add('active');

        // Obtener el nombre de la provincia
        const provinceName = this.getAttribute('name');

        // Actualizar el título del panel
        panelTitle.textContent = provinceName;

        // Mostrar contenido y ocultar estado vacío
        emptyState.style.display = 'none';
        contentDisplay.style.display = 'block';

        // Cargar imágenes de flora y fauna
        loadProvinceData(provinceName);
    });
});

// Función para cargar los datos de la provincia
function loadProvinceData(provinceName) {
    // Limpiar galerías
    floraGallery.innerHTML = '';
    faunaGallery.innerHTML = '';

    // Verificar si existen datos para la provincia
    if (provinceData[provinceName]) {
        // Cargar imágenes de flora
        provinceData[provinceName].flora.forEach(item => {
            const imgElement = document.createElement('div');
            imgElement.className = 'gallery-item';
            imgElement.innerHTML = `
                        <img src="${item.img}" alt="${item.name}">
                    `;
            floraGallery.appendChild(imgElement);
        });

        // Cargar imágenes de fauna
        provinceData[provinceName].fauna.forEach(item => {
            const imgElement = document.createElement('div');
            imgElement.className = 'gallery-item';
            imgElement.innerHTML = `
                        <img src="${item.img}" alt="${item.name}">
                    `;
            faunaGallery.appendChild(imgElement);
        });
    } else {
        // Si no hay datos para la provincia
        floraGallery.innerHTML = '<p>No hay datos de flora disponibles</p>';
        faunaGallery.innerHTML = '<p>No hay datos de fauna disponibles</p>';
    }
}

