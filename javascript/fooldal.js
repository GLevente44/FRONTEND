let aktualisOldal = 0;

const oldalak = document.querySelectorAll(".movie-page");

function kovetkezoFilm() {

    if (aktualisOldal < oldalak.length - 1) {
        aktualisOldal++;
    } else {
        aktualisOldal = 0;
    }

    animacio("left");
}


function elozoFilm() {

    if (aktualisOldal > 0) {
        aktualisOldal--;
    } else {
        aktualisOldal = oldalak.length - 1;
    }

    animacio("right");
}


function animacio(irany) {

    oldalak.forEach(oldal => {
        oldal.classList.remove("active", "slide-left", "slide-right");
    });

    const aktualis = oldalak[aktualisOldal];

    aktualis.classList.add("active");

    if (irany === "left") {
        aktualis.classList.add("slide-left");
    } else {
        aktualis.classList.add("slide-right");
    }
}