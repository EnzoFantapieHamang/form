const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const motDePasse = document.getElementById("motDePasse");
const adresse = document.getElementById("adresse");
const ville = document.getElementById("ville");
const pays = document.getElementById("pays");


function validateForm(event) {
    event.preventDefault();

    // Messages d'erreur
    let errors = [];

    // Validation du nom
    if (nom.value.trim() === "" || !/^[a-zA-Z\s]+$/.test(nom.value)) {
        errors.push("Veuillez entrer un nom valide.");
    }

    // Validation du prénom
    if (prenom.value.trim() === "" || !/^[a-zA-Z\s]+$/.test(prenom.value)) {
        errors.push("Veuillez entrer un prénom valide.");
    }

    // Validation de l'e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "" || !emailRegex.test(email.value)) {
        errors.push("Veuillez entrer une adresse e-mail valide.");
    }

    // Validation du mot de passe
    if (motDePasse.value.length < 8) {
        errors.push("Le mot de passe doit contenir au moins 8 caractères.");
    }

    // Validation de l'adresse
    if (adresse.value.trim() === "") {
        errors.push("Veuillez entrer une adresse.");
    }

    // Validation de la ville
    if (ville.value.trim() === "" || !/^[a-zA-Z\s]+$/.test(ville.value)) {
        errors.push("Veuillez entrer une ville valide.");
    }

    // Validation du pays
    if (pays.value.trim() === "" || !/^[a-zA-Z\s]+$/.test(pays.value)) {
        errors.push("Veuillez entrer un pays valide.");
    }

    // Affichage des erreurs ou soumission du formulaire
    if (errors.length > 0) {
        alert("Erreur(s) dans le formulaire:\n\n" + errors.join("\n"));
    } else {
        alert("Formulaire soumis avec succès !");
    }
}


document.querySelector("form").addEventListener("submit", validateForm);