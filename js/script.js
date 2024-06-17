import peliculas from './peliculas.js'

console.log(peliculas);



const generos = {
    accion: 28,
    hriller: 53,
    aventura: 12,
}


console.log(generos)


const crearPelicula = (pelicula) => {
    const contenedorPeli = document.createElement('div');
    contenedorPeli.classList.add('pelicula');

    const imagenPeli = document.createElement('img');
    imagenPeli.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`

    const tituloPeli = document.createElement('<p>');
    tituloPeli.textContent = pelicula.tittle;

    contenedorPeli.appendChild(imagenPeli);
    contenedorPeli.appendChild(tituloPeli);

    return contenedorPeli;
}

