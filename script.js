const formulaire = document.querySelector("form");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Merci pour votre message ! Je vous répondrai bientôt.");
});
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

nav a.actif {
    text-decoration: underline;
    font-weight: bold;
}
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