function likesTotal () {
    let cantidadPublicaciones = 0;
    let cantidadLikes = [];
    let filtradoLikes = [];

    cantidadPublicaciones = parseInt(prompt("¿Cuántas publicaciones tienes?"));

    for (i=0; i < cantidadPublicaciones; i++) {
        cantidadLikes = prompt("¿Cuántos likes tiene la Publicación " + (i + 1))
        console.log("La publicación " + (i+1) + " tiene " + cantidadLikes + " likes")
    };

}
likesTotal();