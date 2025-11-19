// Datos de ejemplo para cada provincia (flora y fauna)
const provinceData = {
  Jujuy: {
    flora: [
      {
        name: "Cardón",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZorx1RB9S2mU7d4hTXV6UOyZh3y6Sx2Pgw&s",
      },
      {
        name: "Algarrobo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbwKS8SbDzXUuGHBgtuLg0EJesAkCvPqs5Q&s",
      },
      {
        name: "Queñoa",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDX4WBeqAV1bJt598WMBG1VtANKPGLnErSw&s",
      },
    ],
    fauna: [
      {
        name: "Llama",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYN2sSuYov1XAAgTVQ-qh5k0zO_Maf2aANg&s",
      },
      {
        name: "Cóndor",
        img: "https://statics.somosjujuy.com.ar/2022/08/63516b0ca4d80.jpg",
      },
      {
        name: "Vicuña",
        img: "https://www.animalesargentinos.com.ar/img/vicuna.jpg",
      },
    ],
  },
  Salta: {
    flora: [
      {
        name: "Palo Santo",
        img: "https://resizer.glanacion.com/resizer/v2/la-madera-de-palo-santo-comienza-a-desarrollar-TA6HYOBK7ZA3RDR7TIX22AKOL4.jpg?auth=7746a356b1f8f28db09a63e48d161422b6b3d897628b027e0ae3b372d458f32a&width=420&height=630&quality=70&smart=true",
      },
      {
        name: "Tala",
        img: "https://viverodelchaja.com.uy/wp-content/uploads/2023/09/FB_IMG_1656949329253.jpg",
      },
    ],
    fauna: [
      {
        name: "Yaguareté",
        img: "https://www.conicet.gov.ar/wp-content/uploads/Hembra-720x400.jpg",
      },
      {
        name: "Tapir",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Tapirus_terrestris.jpg",
      },
    ],
  },
  Catamarca: {
    flora: [
      {
        name: "Retamo",
        img: "https://inaturalist-open-data.s3.amazonaws.com/photos/20650139/large.jpeg",
      },
      {
        name: "Jarilla",
        img: "https://peninsulavaldes.org.ar/wp-content/uploads/2023/10/Larrea-divaricata-e1696859110752.jpg.webp",
      },
    ],
    fauna: [
      {
        name: "Guanaco",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVpdEQwup-B-ysKoA022wbSuYN84VteHdmw&s",
      },
      {
        name: "Águila Mora",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRQTpkA7W_N9jK29TcIIMJF9YVTiqWv42qw&s",
      },
    ],
  },
  "La Rioja": {
    flora: [
      {
        name: "Retamo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xG2EGRYjKJNV9GwZc3GOG-3rzkfohrMZIQ&s",
      },
      {
        name: "Chañar",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/0335.jpg",
      },
    ],
    fauna: [
      {
        name: "Cóndor andino",
        img: "https://mymodernmet.com/wp/wp-content/uploads/2020/07/Andean-Condor-Flying-6-1.jpg",
      },
      {
        name: "Vizcacha",
        img: "https://masneuquen.com/wp-content/uploads/2020/06/Chinchill%C3%B3n-Lagidium-viscacia-.jpg",
      },
    ],
  },
  Tucumán: {
    flora: [
      {
        name: "Lapacho",
        img: "https://www.viveroazahares.com.ar/web/media/k2/items/cache/f710044bf79a4b1f5d8b085e5e5d9711_XL.jpg",
      },
      {
        name: "Cebil",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/35667.jpg",
      },
    ],
    fauna: [
      {
        name: "Coatí",
        img: "https://cdn0.expertoanimal.com/es/posts/1/3/7/el_coati_como_mascota_21731_600.jpg",
      },
      {
        name: "Tucotuco",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNjEbJzISZOJGtxUcuPMDqsfyhiWxRc4t6w&s",
      },
    ],
  },
  "Santiago del Estero": {
    flora: [
      {
        name: "Algarrobo blanco",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08VI7cz9od-osy3ovYrrkaEJgGN2_iKCtjw&s",
      },
      {
        name: "Quebracho colorado",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/3570.jpg",
      },
    ],
    fauna: [
      {
        name: "Ñandú",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRen2e5pMajz9xnlmufUSNWGSTqOhDAt4AcOQ&s",
      },
      {
        name: "Zorro Gris",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg3ZZa9qbHMq44IQO2ndxAlW7ROgO24e_fFQ&s",
      },
    ],
  },
  Formosa: {
    flora: [
      {
        name: "Palma Caranday",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jb8wVFokmzhmHA9k60sVjjIhZyZ20L6ZaA&s",
      },
      {
        name: "Palo borracho",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiv5avb_KSI9oMoF4WvOUNt9u3KNO1gNTkw&s",
      },
    ],
    fauna: [
      {
        name: "Yacaré",
        img: "https://www.animalesargentinos.com.ar/img/yacare.jpg",
      },
      {
        name: "Monito del Monte",
        img: "https://upload.wikimedia.org/wikipedia/commons/5/51/Monito_del_Monte_ps6.jpg",
      },
    ],
  },
  Chaco: {
    flora: [
      {
        name: "Quebracho colorado",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZWrBEbCa9YSCFMm1a8mf2sN4z6fXBgaLrbw&s",
      },
      {
        name: "Palo borracho",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFiv5avb_KSI9oMoF4WvOUNt9u3KNO1gNTkw&s",
      },
    ],
    fauna: [
      {
        name: "Yacaré overo",
        img: "https://www.animalesargentinos.com.ar/img/yacare.jpg",
      },
      {
        name: "Pecarí de collar",
        img: "https://www.ecoregistros.org/site/images/dataimages/2018/11/06/296654/tatetoeco.JPG",
      },
    ],
  },
  Misiones: {
    flora: [
      {
        name: "Araucaria misionera",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/34267.jpg",
      },
      {
        name: "Yerba mate",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/7311.jpg",
      },
    ],
    fauna: [
      {
        name: "Yaguareté",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyayRrSdb21Z9D7fmSeqh6IL3EB5wlSnEvw&s",
      },
      {
        name: "Mono caí",
        img: "https://static.inaturalist.org/photos/34444461/large.jpg",
      },
    ],
  },
  Corrientes: {
    flora: [
      {
        name: "Urunday",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/2538.jpg",
      },
      {
        name: "Lapacho rosado",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCb_NUa69CXM8YVRct6uURCcNBiNoQAUyoQ&s",
      },
    ],
    fauna: [
      {
        name: "Carpincho",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxoHVALjbjGQAQE8JW0UJ-3z6JwlSdpQ9yA&s",
      },
      {
        name: "Ciervo de los pantanos",
        img: "https://www.ramsar.org/sites/default/files/styles/small_width_450/public/pictures/news/parque_nacional_ciervo_de_los_pantanos.jpg?itok=X7I7bsDe",
      },
    ],
  },
  "San Juan": {
    flora: [
      {
        name: "Jarilla",
        img: "https://peninsulavaldes.org.ar/wp-content/uploads/2023/10/Larrea-divaricata-e1696859110752.jpg.webp",
      },
      {
        name: "Algarrobo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbwKS8SbDzXUuGHBgtuLg0EJesAkCvPqs5Q&s",
      },
    ],
    fauna: [
      {
        name: "Cóndor Andino",
        img: "https://statics.somosjujuy.com.ar/2022/08/63516b0ca4d80.jpg",
      },
      {
        name: "Chinchillón",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNjEbJzISZOJGtxUcuPMDqsfyhiWxRc4t6w&s",
      }
    ],
  },
  "Santa Fe": {
    flora: [
      {
        name: "Espinillo",
        img: "https://www.todouruguay.net/wp-content/uploads/2014/03/Usos_y_propiedades_del_espinillo4.jpg",
      },
      {
        name: "Ceibo",
        img: "https://dcdn-us.mitiendanube.com/stores/002/094/351/products/arbol-ceibo-6aff5767363def695017387181716780-640-0.webp",
      },
    ],
    fauna: [
      {
        name: "Carpincho",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwawsHX5u9tmk0R23LvVKhsE_wTGvCJ_sGDA&s",
      },
      {
        name: "Lobito de río",
        img: "https://cloudfront-us-east-1.images.arcpublishing.com/grupooctubre/GYZTSZRZHA4WKZJTMQ3DAOBSHE.jpg",
      },
    ],
  },
  "San Luis": {
    flora: [
      {
        name: "Quebracho colorado",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/2538.jpg",
      },
      {
        name: "Chañar",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/0335.jpg",
      },
    ],
    fauna: [
      {
        name: "Puma",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtT86pCpFQOxAN6PFnRc8ZkPV3f4eUzJ77Ig&s",
      },
      {
        name: "Choique",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxIyH93nAddjJ_jhBdjAl_l99ny89Dcw1zmw&s",
      },
    ],
  },
  "Buenos Aires": {
    flora: [
      {
        name: "Ombú",
        img: "https://i0.wp.com/www.masrionegro.com/wp-content/uploads/2023/06/D_NQ_NP_791547-MLA49601040419_042022-O.webp?fit=500%2C374&ssl=1",
      },
      {
        name: "Cina-cina",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWoF7JXeZfu0ea-DONrSQkYXW5iEhUCruFuQ&s",
      },
    ],
    fauna: [
      {
        name: "Hornero",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Q9sAQrL31VRAHaQq6CraM1MJWDXxkTJobQ&s",
      },
      {
        name: "Carpincho",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjxoHVALjbjGQAQE8JW0UJ-3z6JwlSdpQ9yA&s",
      },
    ],
  },
  Córdoba: {
    flora: [
      {
        name: "Algarrobo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDbwKS8SbDzXUuGHBgtuLg0EJesAkCvPqs5Q&s",
      },
      {
        name: "Espinillo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QTxnMGM--0q5vux41fiB56GkILntYA1wHw&s",
      },
    ],
    fauna: [
      {
        name: "Zorro Gris",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FgQ8-ZJQ5eBaUsf-prTUwH5PjSAPdsRbEA&s",
      },
      {
        name: "Ñandú",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4gkZIERa1f6PGhhwFsP6oYQkPPPZPam-tg&s",
      },
    ],
  },
  "Entre Ríos": {
    flora: [
      {
        name: "Timbó",
        img: "https://puropaisajismo.com.ar/uploads/Enterolobium-contortisiliquum.jpg",
      },
      {
        name: "Espinillo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-QTxnMGM--0q5vux41fiB56GkILntYA1wHw&s",
      },
    ],
    fauna: [
      {
        name: "Carau",
        img: "https://inaturalist-open-data.s3.amazonaws.com/photos/186280/large.jpg",
      },
      {
        name: "Lobito de río",
        img: "https://cloudfront-us-east-1.images.arcpublishing.com/grupooctubre/GYZTSZRZHA4WKZJTMQ3DAOBSHE.jpg",
      },
    ],
  },
  "La Pampa": {
    flora: [
      {
        name: "Caldén",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn3LT0hilDug7Sf0wcK6aJbTlNOSlJ3qZk_A&s",
      },
      {
        name: "Jarilla",
        img: "https://peninsulavaldes.org.ar/wp-content/uploads/2023/10/Larrea-divaricata-e1696859110752.jpg.webp",
      },
    ],
    fauna: [
      {
        name: "Zorro gris pampeano",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeieBjgMO095UIE1FVmMd_UtpPe9Yh9aA62g&s",
      },
      {
        name: "Ñandú",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4gkZIERa1f6PGhhwFsP6oYQkPPPZPam-tg&s",
      },
    ],
  },
  Mendoza: {
    flora: [
      {
        name: "Algarrobo Dulce",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ236WWIEqi145xT1COVxNeW9CuGGB1TlqO2g&s",
      },
      {
        name: "Jarilla",
        img: "https://peninsulavaldes.org.ar/wp-content/uploads/2023/10/Larrea-divaricata-e1696859110752.jpg.webp",
      },
    ],
    fauna: [
      {
        name: "Cóndor Andino",
        img: "https://statics.somosjujuy.com.ar/2022/08/63516b0ca4d80.jpg",
      },
      {
        name: "Puma",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtT86pCpFQOxAN6PFnRc8ZkPV3f4eUzJ77Ig&s",
      },
    ],
  },
  Neuquén: {
    flora: [
      {
        name: "Pehuen",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/8365.jpg",
      },
      {
        name: "Ñire",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxDxt_eOE8Zr5aSnwoYwBdTmgYAQ81OZaSA&s",
      },
    ],
    fauna: [
      {
        name: "Puma",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtT86pCpFQOxAN6PFnRc8ZkPV3f4eUzJ77Ig&s",
      },
      {
        name: "Ciervo Rojo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDmNIbNgUU2ils8W5jzRZ_vJBJ4PreGT_eQ&s",
      },
    ],
  },
  "Río Negro": {
    flora: [
      {
        name: "Radal",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKFBndkXOtFkuNEvB4_UeqI0zYV3f4Hwj4sA&s",
      },
      {
        name: "Maitén",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB36Arwe9hHEy5-Q2GkrZ3T9Y7o9f4lA8CA&s",
      },
    ],
    fauna: [
      {
        name: "Huemul",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtje9Sggy62j0kLxBYvfTgeIX4r46kR2avMw&s",
      },
      {
        name: "Puma",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtT86pCpFQOxAN6PFnRc8ZkPV3f4eUzJ77Ig&s",
      },
    ],
  },
  Chubut: {
    flora: [
      {
        name: "Neneo",
        img: "https://sib.gob.ar/api/2.0.0/resized?filename=20121121100940_LB___598_Larg.jpg&size=400",
      },
      {
        name: "Calafate",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXVVSywLLENXS6Lgi73-m2SmmdUFXmnvKsw&s",
      },
    ],
    fauna: [
      {
        name: "Piche patagónico",
        img: "https://laderasur.com/wp-content/uploads/2022/03/tomaes-ramierez-saldanto-.jpg",
      },
      {
        name: "Pingüino de Magallanes",
        img: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/116085001/900",
      },
    ],
  },
    "Santa Cruz": {
    flora: [
      {
        name: "Lenga",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/8429.jpg",
      },
      {
        name: "Guindo",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6mWA-Lvr9juXttKb-HOeJJwqLOaTj62kXw&s",
      },
    ],
    fauna: [
      {
        name: "Guanaco",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVpdEQwup-B-ysKoA022wbSuYN84VteHdmw&s",
      },
      {
        name: "Pingüino de Magallanes",
        img: "https://cdn.download.ams.birds.cornell.edu/api/v2/asset/116085001/900",
      },
    ],
  },
  "Tierra del Fuego": {
    flora: [
      {
        name: "Lenga",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/8429.jpg",
      },
      {
        name: "Coihue",
        img: "https://www.fca.unl.edu.ar/prodocova/IRUPE/ImagHerb/6391.jpg",
      },
    ],
    fauna: [
      {
        name: "Zorro Fueguino",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycloaSq6kv5EmX6Cts-wLgJHiF51xUkXDXA&s",
      },
      {
        name: "Cormorán Imperial",
        img: "https://sib.gob.ar/api/2.0.0/resized?filename=20110808144356_Cormoran_5.JPG&size=500",
      },
    ],
  },
};

// Seleccionar elementos del DOM
const provinces = document.querySelectorAll(".province");
const emptyState = document.querySelector(".empty-state");
const contentDisplay = document.querySelector(".content-display");
const floraGallery = document.querySelector(".flora-gallery");
const faunaGallery = document.querySelector(".fauna-gallery");
const panelTitle = document.querySelector(".panel-title");

// Añadir event listeners a cada provincia
provinces.forEach((province) => {
  province.addEventListener("click", function () {
    // Remover clase active de todas las provincias
    provinces.forEach((p) => p.classList.remove("active"));

    // Añadir clase active a la provincia clickeada
    this.classList.add("active");

    // Obtener el nombre de la provincia
    const provinceName = this.getAttribute("name");

    // Actualizar el título del panel
    panelTitle.textContent = provinceName;

    // Mostrar contenido y ocultar estado vacío
    emptyState.style.display = "none";
    contentDisplay.style.display = "block";

    // Cargar imágenes de flora y fauna
    loadProvinceData(provinceName);
  });
});

// Función para cargar los datos de la provincia
function loadProvinceData(provinceName) {
  // Limpiar galerías
  floraGallery.innerHTML = "";
  faunaGallery.innerHTML = "";

  // Verificar si existen datos para la provincia
  if (provinceData[provinceName]) {
    // Cargar imágenes de flora
    provinceData[provinceName].flora.forEach((item) => {
      const imgElement = document.createElement("div");
      imgElement.className = "gallery-item";
      imgElement.innerHTML = `
                        <img src="${item.img}" alt="${item.name}">
                    `;
      floraGallery.appendChild(imgElement);
    });

    // Cargar imágenes de fauna
    provinceData[provinceName].fauna.forEach((item) => {
      const imgElement = document.createElement("div");
      imgElement.className = "gallery-item";
      imgElement.innerHTML = `
                        <img src="${item.img}" alt="${item.name}">
                    `;
      faunaGallery.appendChild(imgElement);
    });
  } else {
    // Si no hay datos para la provincia
    floraGallery.innerHTML = "<p>No hay datos de flora disponibles</p>";
    faunaGallery.innerHTML = "<p>No hay datos de fauna disponibles</p>";
  }
}
