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
        "imagen":"https://animapedia.org/wp-content/uploads/2019/08/liebre.jpg"
    },
    {
        "Nombre":"mapache",
        "imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Procyon_lotor_%28raccoon%29.jpg/230px-Procyon_lotor_%28raccoon%29.jpg"
    },
    {
        "Nombre":"colibri",
        "imagen":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Colibri_coruscans.jpg/800px-Colibri_coruscans.jpg"
    },
    {
        "Nombre":"camello",
        "imagen":"https://i.ytimg.com/vi/TUXJnCHqdMA/maxresdefault.jpg"
    },
    {
        "Nombre":"flamenco",
        "imagen":"https://cdn.shopify.com/s/files/1/0003/1916/0381/articles/1010083.jpg?v=1598464073"
    },
    {
        "Nombre":"zorro",
        "imagen":"https://static.wikia.nocookie.net/reinoanimalia/images/8/88/Zorro_rojo_4.png/revision/latest?cb=20130514223627&path-prefix=es"
    },
    {
        "Nombre":"leon",
        "imagen":"https://okdiario.com/img/2019/08/10/-por-que-el-leon-es-el-rey-de-la-selva_-1.jpg"
    },
    {
        "Nombre":"Pez leon",
        "imagen":"https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/08/26200153/lionfish-610769_1920-1200x800.jpg"
    },
    {
        "Nombre":"koi",
        "imagen":"https://imagenes.20minutos.es/files/og_thumbnail/uploads/imagenes/2020/01/22/pez-koi.jpeg"
    },
    {
        "Nombre":"camaleon",
        "imagen":"https://alponiente.com/wp-content/uploads/2021/09/02-camaleo%CC%81n.jpeg"
    }
]

function buscarAnimales(){

    let ObjetoAnimales= document.querySelector.value ;
    let BusquedaAnimal= document.querySelector("#buscador").value
    animales2.forEach(animal => {
        
    });
}
