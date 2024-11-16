if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}

const contentSection = document.getElementById('content');

//Es la forma mas guarra de hacerlo pero me sudan los cojonesy la polla
document.getElementById("1").addEventListener("click",() => imprimirPokemonById(1))
document.getElementById("258").addEventListener("click",() => imprimirPokemonById(258))
document.getElementById("390").addEventListener("click",() => imprimirPokemonById(390))
document.getElementById("387").addEventListener("click",() => imprimirPokemonById(387))
document.getElementById("728").addEventListener("click",() => imprimirPokemonById(728))


const imprimirPokemonById = id => {
    console.log("Cargando pokemon numero: "+id)
    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then(response => {
        return response.json()
    })
    .then(response => {
        const POKEMON_NAME =  response.name.charAt(0).toUpperCase() + response.name.slice(1)
        const POKEMON_SPRITE = response.sprites.other.home.front_default
        console.log("Cargado: "+POKEMON_NAME)

        // Limpiar el contenido previo del <section>
        contentSection.innerHTML = '';

        // Crear la imagen
        const img = document.createElement('img');
        img.src = POKEMON_SPRITE;
        img.alt =POKEMON_NAME;

        // Crear el encabezado <h4>
        const h4 = document.createElement('h4');
        h4.textContent =POKEMON_NAME;

        // Agregar la imagen y el encabezado al <section>
        contentSection.appendChild(img);
        contentSection.appendChild(h4);
    })
    .catch(err => {
        console.error("Error en la llamada a la pokeapi: \n"+err)
    })
}