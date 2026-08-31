const formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (nom === "" || email === "" || message === "") {
        alert("Merci de remplir tous les champs.");
    } else {
        alert("Merci " + nom + " ! Votre message a bien été reçu.");
    }
});

const liensNav = document.querySelectorAll("nav a");

liensNav.forEach(function(lien) {
    lien.addEventListener("click", function() {
        liensNav.forEach(function(l) {
            l.classList.remove("actif");
        });
        lien.classList.add("actif");
    });
});

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

const sectionsCachees = document.querySelectorAll(".cache");

const observateur = new IntersectionObserver(function(entrees) {
    entrees.forEach(function(entree) {
        if (entree.isIntersecting) {
            entree.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sectionsCachees.forEach(function(section) {
    observateur.observe(section);
});
const champMessage = document.getElementById("message");
const compteur = document.getElementById("compteur");

champMessage.addEventListener("input", function() {
    const nombreCaracteres = champMessage.value.length;
    compteur.textContent = nombreCaracteres + " caractères";
});