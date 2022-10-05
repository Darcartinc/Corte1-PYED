let animales= ["leon","salmon","mirla","gato","zorro","elefante","hipopotamo","flamenco","perro","delfi","mariposa","lobo","ligre","tigre","pantera","camaleon","condor","aguila","oso","camello","liebre","mapache"];



function mostrarAnimales(){
    let animal= document.querySelector.value ;
    for (let i=0;i<animales.length;i++){
        let animal=animales[i];
        let li=document.createElement("li");
        li.textContent=animal;
        animalesCont.appendChild(li);
    }
    
}

mostrarAnimales();

let animales2= [
    {
        "Nombre":"liebre",
        "imagen":"https://animapedia.org/wp-content/uploads/2019/08/liebre.jpg",
        "peso_promedio":8,
        "numero_de_patas":4,
        "color_predominante":"cafe",
        "alimentacion":"plantas",
        "habitat":"madrigueras"
    },
    {
        "Nombre":"mapache",
        "imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Procyon_lotor_%28raccoon%29.jpg/230px-Procyon_lotor_%28raccoon%29.jpg",
        "peso_promedio":5,
        "numero_de_patas":4,
        "color_predominante":"gris",
        "alimentacion":"omnívora y carroñera",
        "habitat":"lugares con árboles, cercanos a algún depósito de agua"
    },
    {
        "Nombre":"colibri",
        "imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Colibri_coruscans.jpg/800px-Colibri_coruscans.jpg",
        "peso_promedio":2.2,
        "numero_de_patas":2,
        "color_predominante":"verde",
        "alimentacion":"nectar",
        "habitat":"bosques lluviosos"
    },
    {
        "Nombre":"camello",
        "imagen":"https://i.ytimg.com/vi/TUXJnCHqdMA/maxresdefault.jpg",
        "peso_promedio":480,
        "numero_de_patas":"4",
        "color_predominante":"ocre",
        "alimentacion":"hervivora",
        "habitat":"desiertos"
    },
    {
        "Nombre":"flamenco",
        "imagen":"https://cdn.shopify.com/s/files/1/0003/1916/0381/articles/1010083.jpg?v=1598464073",
        "peso_promedio":3,
        "numero_de_patas":2,
        "color_predominante":"rosa",
        "alimentacion":" crustáceos y algas",
        "habitat":""
    },
    {
        "Nombre":"zorro",
        "imagen":"https://static.wikia.nocookie.net/reinoanimalia/images/8/88/Zorro_rojo_4.png/revision/latest?cb=20130514223627&path-prefix=es",
        "peso_promedio":10,
        "numero_de_patas":4,
        "color_predominante":"naranja",
        "alimentacion":"pequeños animales como lagartijas, ratones de campo, ratas, conejos y liebres",
        "habitat":"bosques caducifolios"
    },
    {
        "Nombre":"leon",
        "imagen":"https://okdiario.com/img/2019/08/10/-por-que-el-leon-es-el-rey-de-la-selva_-1.jpg",
        "peso_promedio":150,
        "numero_de_patas":4,
        "color_predominante":"amarillo",
        "alimentacion":"carnivora",
        "habitat":"sabanas africanas"
    },
    {
        "Nombre":"Pez leon",
        "imagen":"https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/26200153/lionfish-610769_1920-1200x800.jpg",
        "peso_promedio":0.30,
        "numero_de_patas":18,
        "color_predominante":"naranja",
        "alimentacion":"peces pequeños, moluscos e invertebrados",
        "habitat":"aguas marinas cálidas de los trópicos"
    },
    {
        "Nombre":"Koi",
        "imagen":"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/01/22/pez-koi.jpeg",
        "peso_promedio":9,
        "numero_de_patas":2,
        "color_predominante":"naranja",
        "alimentacion":"omnivora",
        "habitat":"desde el mar Caspio al mar de Aral."
    },
    {
        "Nombre":"camaleon",
        "imagen":"https://alponiente.com/wp-content/uploads/2021/09/02-camaleo%CC%81n.jpeg",
        "peso_promedio":30,
        "numero_de_patas":4,
        "color_predominante":"verde",
        "alimentacion":"insectos",
        "habitat":"smontañas, junglas, sabanas y a veces desiertos y estepas"
    }
]

function buscarAnimales(){

    let contenedor= document.querySelector("#animalesBusqueda") ;
    let BusquedaAnimal= document.querySelector("#buscador").value
    let acumulador="";
    animales2.forEach(animal => {
        if(animal.Nombre.toLowerCase().startsWith(BusquedaAnimal.toLowerCase()) && BusquedaAnimal!==""){

            acumulador=acumulador +`<img src="${animal.imagen}" width="400"/><h3>Nombre: ${animal.Nombre}</h3><h3>Peso promedio KG: ${animal.peso_promedio}</h3><h3>Numero de extremidades: ${animal.numero_de_patas}</h3><h3>Color predominante: ${animal.color_predominante}</h3><h3>Alimentacion :${animal.alimentacion}</h3><h3>Habitat: ${animal.habitat}</h3>`
        }
    });
    
contenedor.innerHTML=acumulador;
}
