/* =======================================================
   script.js
   Site Web : Elvis MBANZE
   ======================================================= */

/* -------------------------------------------------------
   1. Message affiché dans la console
------------------------------------------------------- */
console.log("Bienvenue sur le site officiel de Elvis MBANZE !");

/* -------------------------------------------------------
   2. Message de bienvenue au chargement de la page
------------------------------------------------------- */
window.onload = function () {
    alert("Bienvenue sur le site web de Elvis MBANZE.\nBonne visite !");
};

/* -------------------------------------------------------
   3. Gestion du formulaire de contact
------------------------------------------------------- */
const formulaire = document.querySelector("form");
formulaire.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Merci ! Votre message a bien été reçu.");
    formulaire.reset();
});

/* -------------------------------------------------------
   4. Défilement fluide des liens du menu
------------------------------------------------------- */
const liens = document.querySelectorAll("nav a");
liens.forEach(function (lien) {
    lien.addEventListener("click", function (e) {
        e.preventDefault();
        const cible = document.querySelector(this.getAttribute("href"));
        cible.scrollIntoView({ behavior: "smooth" });
    });
});

/* -------------------------------------------------------
   5. Affiche la date actuelle dans la console
------------------------------------------------------- */
const aujourdHui = new Date();
console.log("Date :", aujourdHui.toLocaleDateString());

/* =====================================
   Barre de progression
===================================== */
window.addEventListener("scroll", function () {
    let hauteur = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let position = document.documentElement.scrollTop;
    let largeur = (position / hauteur) * 100;
    document.getElementById("progress-bar").style.width = largeur + "%";
});

/* =====================================
   Bouton Retour en haut
===================================== */
const topBtn = document.getElementById("topbtn"); // harmonisé en minuscule

window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });

    /*============== MENU MOBILE ========*/
    const menuToggle= document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");
    menuToggle.addEventListener("clic", function()){
        mainNav.classlist.toggle("active"); 
    }