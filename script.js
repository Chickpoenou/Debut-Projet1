// Validation du formulaire
const formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (nom === "" || email === "" || message === "") {
        alert("Merci de remplir tous les champs.");
        return;
    }

    fetch(formulaire.action, {
        method: "POST",
        body: new FormData(formulaire),
        headers: { "Accept": "application/json" }
    })
    .then(function(response) {
        if (response.ok) {
            alert("Merci " + nom + " ! Votre message a bien été reçu.");
            formulaire.reset();
            document.getElementById("compteur").textContent = "0 caractères";
        } else {
            alert("Une erreur est survenue. Merci de réessayer ou de m'écrire directement par email.");
        }
    })
    .catch(function() {
        alert("Une erreur est survenue. Merci de réessayer ou de m'écrire directement par email.");
    });
});

// Liens de navigation actifs
const liensNav = document.querySelectorAll("nav a");

liensNav.forEach(function(lien) {
    lien.addEventListener("click", function() {
        liensNav.forEach(function(l) {
            l.classList.remove("actif");
        });
        lien.classList.add("actif");
    });
});

// Bouton retour en haut
const boutonHaut = document.getElementById("retour-haut");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        boutonHaut.style.display = "block";
    } else {
        boutonHaut.style.display = "none";
    }
});

boutonHaut.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Animation au défilement (IntersectionObserver)
const sectionsCachees = document.querySelectorAll(".cache");

const observateur = new IntersectionObserver(function(entrees) {
    entrees.forEach(function(entree) {
        if (entree.isIntersecting) {
            entree.target.classList.add("visible");
        }
    });
}, { threshold: 0.15 });

sectionsCachees.forEach(function(section) {
    observateur.observe(section);
});

// Compteur de caractères
const champMessage = document.getElementById("message");
const compteur = document.getElementById("compteur");

champMessage.addEventListener("input", function() {
    const nombreCaracteres = champMessage.value.length;
    compteur.textContent = nombreCaracteres + " caractères";
});
