// Exportamos una funcion llamada loadCards que acepta:
// -containerSelector: un selector css para el contenedor donde van las cards 
// -cardIds: un array es opcional con los id de las cards que se quieran mostrar

export async function loadCards(containerSelector, cardIds = []){
    // obtenemos el contenedor del DOM
    const container = document.querySelector(containerSelector);

    if(!container)return; //si no existe nos salimos

    try{
        
        const[templateRes, dataRes] = await Promise.all([
            // Hacer dos fetch al mismo tiempo
            // 1- es para la plantillas
            // 2- es para los datos
            fetch("/frontend/public/views/components/card.html"),
            fetch("/frontend/public/data/card.json"),
        ]);

        // converti las respuestas a texto y a json
        const template = await templateRes.text();
        const cards = await dataRes.json();

        // filtramos las cards si se proporcionan los IDs especificos
        const filteredCards = cardIds.length 
        ?  cards.filter(card => cardIds.includes(card.id)) //solo las que estan en el arreglo
        :cards;//si no hay filtro, uselas todas

        filteredCards.forEach(card => {
            //reemplazar los paceholder{{...}} del template con los datos reales 
            let html = template
            .replace("{{title}}",card.title)
            .replace("{{icon1}}",card.icon1)
            .replace("{{icon2}}",card.icon2)
            .replace("{{description}}",card.description);

            container.innerHTML += html;
            
        });
    }catch(error){
        console.error("error cargando las cards",error);
    }

}