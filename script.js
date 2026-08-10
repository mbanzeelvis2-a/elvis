/* =========================================================
   SITE WEB ELVIS MBANZE
   JAVASCRIPT
========================================================= */


/* =========================================================
   MESSAGE CONSOLE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log(
        "Bienvenue sur le site officiel de Elvis MBANZE !"
    );


    /* =========================================================
       ÉLÉMENTS DU SITE
    ========================================================= */

const sections =
    document.querySelectorAll(".page-section");

const menuLinks =
    document.querySelectorAll("nav a[data-section]");

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


/* =========================================================
   FONCTION PRINCIPALE :
   AFFICHER UNE SECTION ET CACHER LES AUTRES
========================================================= */

function afficherSection(id) {

    sections.forEach(function (section) {

        section.classList.remove(
            "active-section"
        );

    });


    const sectionChoisie =
        document.getElementById(id);


    if (sectionChoisie) {

        sectionChoisie.classList.add(
            "active-section"
        );

    }


    /* Fermer le menu sur téléphone */

    mainNav.classList.remove("open");
    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );


    /* Retour en haut */

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

    updateActiveMenu(id);

}


/* =========================================================
   CLIC SUR LES LIENS DU MENU
========================================================= */

menuLinks.forEach(function (lien) {

    lien.addEventListener(
        "click",
        function (event) {

            event.preventDefault();


            const section =
                this.getAttribute(
                    "data-section"
                );


            afficherSection(section);

        }
    );

});


function updateActiveMenu(id) {

    menuLinks.forEach(function (lien) {

        const section =
            lien.getAttribute(
                "data-section"
            );

        lien.classList.toggle(
            "active",
            section === id
        );

    });

}


/* =========================================================
   BOUTON HAMBURGER
========================================================= */

menuToggle.addEventListener(
    "click",
    function () {

        const isOpen =
            mainNav.classList.toggle(
                "open"
            );

        this.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }
);


/* =========================================================
   BOUTONS "DÉCOUVRIR"
========================================================= */

const sectionButtons =
    document.querySelectorAll(
        "[data-section-button]"
    );


sectionButtons.forEach(
    function (bouton) {

        bouton.addEventListener(
            "click",
            function () {

                const section =
                    this.getAttribute(
                        "data-section-button"
                    );


                afficherSection(section);

            }
        );

    }
);


/* =========================================================
   DÉTAILS DES COMPÉTENCES
========================================================= */

const skillCards =
    document.querySelectorAll(
        ".skill-card"
    );

const skillDetails =
    document.getElementById(
        "skillDetails"
    );

const skillDetailContent =
    document.getElementById(
        "skillDetailContent"
    );

const closeSkill =
    document.getElementById(
        "closeSkill"
    );


/*
   Informations détaillées
   de chaque compétence.
*/

const skills = {


    html: {

        titre: "HTML5",

        contenu: `
            <p>
                HTML5 est utilisé pour structurer
                les pages d'un site web.
            </p>

            <h4>Ce que j'apprends :</h4>

            <ul>
                <li>Structure HTML</li>
                <li>Balises et attributs</li>
                <li>Formulaires</li>
                <li>Liens et images</li>
                <li>Organisation d'une page web</li>
            </ul>
        `

    },


    css: {

        titre: "CSS3",

        contenu: `
            <p>
                CSS3 permet de mettre en forme
                et de rendre les pages web
                agréables et responsives.
            </p>

            <h4>Ce que j'apprends :</h4>

            <ul>
                <li>Mise en page</li>
                <li>Couleurs et typographie</li>
                <li>Flexbox</li>
                <li>Grid</li>
                <li>Responsive design</li>
                <li>Animations</li>
            </ul>
        `

    },


    javascript: {

        titre: "JavaScript",

        contenu: `
            <p>
                JavaScript permet d'ajouter
                de l'interactivité aux pages web.
            </p>

            <h4>Ce que j'apprends :</h4>

            <ul>
                <li>Variables</li>
                <li>Fonctions</li>
                <li>Événements</li>
                <li>DOM</li>
                <li>Manipulation des éléments HTML</li>
                <li>Interactions utilisateur</li>
            </ul>
        `

    },


    java: {

        titre: "Java",

        contenu: `
            <p>
                Java est un langage de programmation
                que j'étudie notamment dans le cadre
                de la programmation orientée objet.
            </p>

            <h4>Notions étudiées :</h4>

            <ul>
                <li>Classes</li>
                <li>Objets</li>
                <li>Attributs</li>
                <li>Méthodes</li>
                <li>Encapsulation</li>
                <li>Programmation orientée objet</li>
            </ul>
        `

    },


    mysql: {

        titre: "MySQL",

        contenu: `
            <p>
                MySQL est utilisé pour travailler
                avec des bases de données relationnelles.
            </p>

            <h4>Ce que j'apprends :</h4>

            <ul>
                <li>Création de bases de données</li>
                <li>Tables</li>
                <li>Relations</li>
                <li>Requêtes SQL</li>
                <li>Insertion et modification des données</li>
                <li>Gestion des informations</li>
            </ul>
        `

    },


    vb: {

        titre: "Visual Basic .NET",

        contenu: `
            <p>
                Visual Basic .NET permet de développer
                des applications, notamment des
                applications de gestion.
            </p>

            <h4>Ce que j'étudie :</h4>

            <ul>
                <li>Windows Forms</li>
                <li>Contrôles graphiques</li>
                <li>Événements</li>
                <li>Formulaires</li>
                <li>Connexion aux bases de données</li>
            </ul>
        `

    },


    reseau: {

        titre: "Administration réseau",

        contenu: `
            <p>
                L'administration réseau fait partie
                de mes domaines d'apprentissage
                en informatique.
            </p>

            <h4>Notions étudiées :</h4>

            <ul>
                <li>Réseaux informatiques</li>
                <li>LAN</li>
                <li>Adressage IP</li>
                <li>Équipements réseau</li>
                <li>Sécurité informatique</li>
            </ul>
        `

    },


    photoshop: {

        titre: "Adobe Photoshop",

        contenu: `
            <p>
                Photoshop est utilisé pour la création
                et la modification d'éléments graphiques.
            </p>

            <h4>Domaines d'utilisation :</h4>

            <ul>
                <li>Retouche d'images</li>
                <li>Création graphique</li>
                <li>Composition visuelle</li>
                <li>Préparation d'images pour le web</li>
            </ul>
        `

    }

};


/* =========================================================
   OUVRIR LE DÉTAIL D'UNE COMPÉTENCE
========================================================= */

skillCards.forEach(
    function (carte) {

        carte.addEventListener(
            "click",
            function () {

                const nom =
                    this.getAttribute(
                        "data-detail"
                    );


                const skill =
                    skills[nom];


                if (!skill) {

                    return;

                }


                skillDetailContent.innerHTML = `

                    <h3>
                        ${skill.titre}
                    </h3>

                    ${skill.contenu}

                `;


                skillDetails.classList.add(
                    "show"
                );


                skillDetails.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    }
);


/* =========================================================
   FERMER LE DÉTAIL D'UNE COMPÉTENCE
========================================================= */

closeSkill.addEventListener(
    "click",
    function () {

        skillDetails.classList.remove(
            "show"
        );

    }
);


/* =========================================================
   DÉTAILS DES PROJETS
========================================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

const projectDetails =
    document.getElementById(
        "projectDetails"
    );

const projectDetailContent =
    document.getElementById(
        "projectDetailContent"
    );

const closeProject =
    document.getElementById(
        "closeProject"
    );


/* Informations des projets */

const projects = {


    gestion: {

        titre:
            "Application de Gestion",

        contenu: `
            <p>
                Projet consacré à la conception
                d'une application de gestion.
            </p>

            <h4>Objectif :</h4>

            <p>
                Mettre en place une solution permettant
                d'organiser et de gérer efficacement
                des informations.
            </p>

            <h4>Domaines étudiés :</h4>

            <ul>
                <li>Analyse</li>
                <li>Conception</li>
                <li>Base de données</li>
                <li>Interface utilisateur</li>
            </ul>
        `

    },


    siteweb: {

        titre:
            "Site Web Professionnel",

        contenu: `
            <p>
                Ce site constitue mon propre projet
                de portfolio personnel.
            </p>

            <h4>Technologies utilisées :</h4>

            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>GitHub Pages</li>
            </ul>

            <p>
                L'objectif est de présenter mon parcours,
                mes apprentissages et mes projets.
            </p>
        `

    },


    database: {

        titre:
            "Base de données",

        contenu: `
            <p>
                Projet consacré à la conception
                et à la gestion de bases de données
                relationnelles avec MySQL.
            </p>

            <h4>Travaux réalisés :</h4>

            <ul>
                <li>Modélisation</li>
                <li>Création des tables</li>
                <li>Relations entre les tables</li>
                <li>Requêtes SQL</li>
                <li>Gestion des données</li>
            </ul>
        `

    }

};


/* =========================================================
   OUVRIR UN PROJET
========================================================= */

projectCards.forEach(
    function (carte) {

        carte.addEventListener(
            "click",
            function () {

                const nom =
                    this.getAttribute(
                        "data-detail"
                    );


                const project =
                    projects[nom];


                if (!project) {

                    return;

                }


                projectDetailContent.innerHTML = `

                    <h3>
                        ${project.titre}
                    </h3>

                    ${project.contenu}

                `;


                projectDetails.classList.add(
                    "show"
                );


                projectDetails.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    }
);


/* =========================================================
   FERMER UN PROJET
========================================================= */

closeProject.addEventListener(
    "click",
    function () {

        projectDetails.classList.remove(
            "show"
        );

    }
);


/* =========================================================
   FORMULAIRE DE CONTACT
========================================================= */

const formulaire =
    document.getElementById(
        "contactForm"
    );


formulaire.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        alert(
            "Merci ! Votre message a bien été pris en compte."
        );


        formulaire.reset();

    }
);


/* =========================================================
   BARRE DE PROGRESSION
========================================================= */

window.addEventListener(
    "scroll",
    function () {

        const hauteur =
            document.documentElement.scrollHeight
            -
            document.documentElement.clientHeight;


        const position =
            document.documentElement.scrollTop;


        if (hauteur > 0) {

            const largeur =
                (position / hauteur) * 100;


            document.getElementById(
                "progress-bar"
            ).style.width =
                largeur + "%";

        }

    }
);


/* =========================================================
   BOUTON RETOUR EN HAUT
========================================================= */

const topBtn =
    document.getElementById(
        "topbtn"
    );


window.addEventListener(
    "scroll",
    function () {

        if (
            document.documentElement.scrollTop
            >
            300
        ) {

            topBtn.style.display =
                "block";

        } else {

            topBtn.style.display =
                "none";

        }

    }
);


topBtn.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================================================
   AFFICHER ACCUEIL AU DÉMARRAGE
========================================================= */

afficherSection("accueil");
});